# contact/serializers.py
from rest_framework import serializers
from .models import ContactMessage


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model  = ContactMessage
        fields = ['id', 'name', 'email', 'message', 'sent_at', 'is_read']
        read_only_fields = ['id', 'sent_at', 'is_read']

    def validate_name(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Name cannot be blank.")
        return value

    def validate_message(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Message cannot be blank.")
        return value