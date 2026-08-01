from django.urls import path
from .views import ContactView, ContactListView, ContactDetailView, ChatView

urlpatterns = [
    path('contact/',               ContactView.as_view(),       name='contact'),
    path('contact/messages/',      ContactListView.as_view(),   name='contact-list'),
    path('contact/messages/<pk>/', ContactDetailView.as_view(), name='contact-detail'),
    path('chat/',                  ChatView.as_view(),          name='chat'),
]