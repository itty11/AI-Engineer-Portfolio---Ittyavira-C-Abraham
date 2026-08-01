# contact/views.py
import os
from groq import Groq
from .portfolio_context import PORTFOLIO_CONTEXT
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime, timezone
from bson import ObjectId
from .mongo import get_messages_collection
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


def serialize(doc):
    """Convert MongoDB document to JSON-safe dict."""
    doc['id']      = str(doc['_id'])
    doc['sent_at'] = doc.get('sent_at', '').isoformat() if isinstance(doc.get('sent_at'), datetime) else str(doc.get('sent_at', ''))
    del doc['_id']
    return doc


@method_decorator(csrf_exempt, name='dispatch')
class ContactView(APIView):
    def post(self, request):
        name    = request.data.get('name', '').strip()
        email   = request.data.get('email', '').strip()
        message = request.data.get('message', '').strip()

        if not name or not email or not message:
            return Response(
                {'error': 'Name, email and message are required.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        doc = {
            'name':    name,
            'email':   email,
            'message': message,
            'sent_at': datetime.now(timezone.utc),
            'is_read': False,
        }

        col = get_messages_collection()
        col.insert_one(doc)

        return Response(
            {'status': 'Message saved successfully.'},
            status=status.HTTP_201_CREATED
        )


class ContactListView(APIView):
    """GET /api/contact/messages/ — list all messages"""
    def get(self, request):
        col  = get_messages_collection()
        docs = list(col.find().sort('sent_at', -1))
        return Response([serialize(d) for d in docs])


class ContactDetailView(APIView):
    """GET / PATCH / DELETE /api/contact/messages/:id/"""

    def get(self, request, pk):
        col = get_messages_collection()
        doc = col.find_one({'_id': ObjectId(pk)})
        if not doc:
            return Response({'error': 'Not found.'}, status=status.HTTP_404_NOT_FOUND)
        return Response(serialize(doc))

    def patch(self, request, pk):
        col = get_messages_collection()
        col.update_one({'_id': ObjectId(pk)}, {'$set': {'is_read': True}})
        return Response({'status': 'Marked as read.'})

    def delete(self, request, pk):
        col = get_messages_collection()
        col.delete_one({'_id': ObjectId(pk)})
        return Response(status=status.HTTP_204_NO_CONTENT)

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

@method_decorator(csrf_exempt, name='dispatch')
class ChatView(APIView):
    def post(self, request):
        user_message = request.data.get('message', '').strip()
        if not user_message:
            return Response(
                {'error': 'Message required.'},
                status=status.HTTP_400_BAD_REQUEST
            )
        try:
            from groq import Groq
            client = Groq(api_key=os.getenv('GROQ_API_KEY'))
            completion = client.chat.completions.create(
                model='llama3-8b-8192',
                messages=[
                    {
                        'role': 'system',
                        'content': f"""You are Ittyavira C Abraham's AI portfolio assistant.
Answer questions based ONLY on this information:

{PORTFOLIO_CONTEXT}

Rules:
- Be friendly, concise and professional
- Answer in 2-4 sentences max
- Speak in first person as Ittyavira
- If asked something not in the data say I don't have that info but you can contact me directly
- Never make up information"""
                    },
                    {
                        'role': 'user',
                        'content': user_message
                    }
                ],
                max_tokens=200,
                temperature=0.7,
            )
            reply = completion.choices[0].message.content
            return Response({'reply': reply})
        except Exception as e:
            print(f"Chat error: {e}")
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )