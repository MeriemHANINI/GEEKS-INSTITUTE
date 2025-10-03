"""
Search Courses Tool

This tool searches for educational content and courses.
"""
from typing import Dict, Any
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")

# Connect to MongoDB
client_mongo = MongoClient(MONGODB_URI)
db = client_mongo.chatbot_educatif
collection = db.courses

def search_courses(topic: str, level: str = "débutant") -> Dict[str, Any]:
    """Search for courses based on topic and level."""

    print(f"Recherche de cours: {topic}, niveau: {level}")

    records = list(collection.find(
        {
            "$and": [
                {"topics": {"$regex": topic, "$options": "i"}},
                {"level": {"$regex": level, "$options": "i"}}
            ]
        },
        limit=5
    ))

    print(f"Found {len(records)} courses")

    clean_records = []
    for record in records:
        clean_record = {
            "id": str(record["_id"]),
            "title": record["title"],
            "description": record["description"],
            "level": record["level"],
            "duration": record.get("duration", "Non spécifié"),
            "topics": record["topics"]
        }
        clean_records.append(clean_record)

    return clean_records


SEARCH_COURSES_SCHEMA = {
    "type": "function",
    "function": {
        "name": "search_courses",
        "description": "Rechercher des cours éducatifs par sujet et niveau.",
        "parameters": {
            "type": "object",
            "properties": {
                "topic": {"type": "string", "description": "Sujet du cours"},
                "level": {"type": "string", "description": "Niveau (débutant, intermédiaire, avancé)"}
            },
            "required": ["topic"],
            "additionalProperties": False,
        },
        "strict": True,
    },
}
