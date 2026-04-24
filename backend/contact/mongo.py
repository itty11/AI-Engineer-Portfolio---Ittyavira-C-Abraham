# contact/mongo.py
import certifi
from pymongo import MongoClient
from django.conf import settings

_client = None

def get_db():
    global _client
    if _client is None:
        _client = MongoClient(
            settings.MONGO_URI,
            tlsCAFile=certifi.where(),
        )
    return _client[settings.MONGO_DB_NAME]

def get_messages_collection():
    return get_db()['contact_messages']