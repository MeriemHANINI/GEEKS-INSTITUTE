import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")

# Connexion à MongoDB
client_mongo = MongoClient(MONGODB_URI)
db = client_mongo.chatbot_educatif
collection = db.courses

# Données de cours éducatifs
courses_data = [
    {
        "title": "Introduction à Python",
        "description": "Apprenez les bases de la programmation Python",
        "level": "débutant",
        "topics": ["python", "programmation", "coding"],
        "duration": "2 heures",
        "content": ["Variables", "Boucles", "Fonctions", "Listes"]
    },
    {
        "title": "Photosynthèse pour débutants", 
        "description": "Comprendre le processus de photosynthèse",
        "level": "débutant",
        "topics": ["biologie", "photosynthèse", "plantes"],
        "duration": "1 heure",
        "content": ["Définition", "Processus", "Importance"]
    },
    {
        "title": "Mathématiques - Algèbre de base",
        "description": "Introduction aux concepts algébriques fondamentaux",
        "level": "débutant", 
        "topics": ["mathématiques", "algèbre", "équations"],
        "duration": "3 heures",
        "content": ["Variables", "Équations", "Graphiques"]
    },
    {
        "title": "Histoire de la Révolution Française",
        "description": "Les événements clés de la Révolution Française",
        "level": "intermédiaire",
        "topics": ["histoire", "révolution française", "france"],
        "duration": "1.5 heures", 
        "content": ["Causes", "Événements majeurs", "Conséquences"]
    },
    {
        "title": "Physique - Les lois de Newton",
        "description": "Comprendre les trois lois du mouvement de Newton",
        "level": "intermédiaire",
        "topics": ["physique", "newton", "mécanique"],
        "duration": "2 heures",
        "content": ["Première loi", "Deuxième loi", "Troisième loi", "Applications"]
    }
]

# Nettoyer la collection existante et insérer les nouveaux données
collection.delete_many({})
result = collection.insert_many(courses_data)

print(f"{len(result.inserted_ids)} cours insérés dans la base de données!")
print("Cours disponibles:")
for course in courses_data:
    print(f"  - {course['title']} ({course['level']})")

# Fermer la connexion
client_mongo.close()