# contact/views.py
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