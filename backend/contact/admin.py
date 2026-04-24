# contact/admin.py
from django.contrib import admin
from .models import ContactMessage


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display   = ('name', 'email', 'sent_at', 'is_read')
    list_filter    = ('is_read',)
    search_fields  = ('name', 'email', 'message')
    readonly_fields = ('name', 'email', 'message', 'sent_at')
    ordering       = ('-sent_at',)

    # Mark selected messages as read from admin
    actions = ['mark_as_read']

    def mark_as_read(self, request, queryset):
        queryset.update(is_read=True)
    mark_as_read.short_description = 'Mark selected messages as read'