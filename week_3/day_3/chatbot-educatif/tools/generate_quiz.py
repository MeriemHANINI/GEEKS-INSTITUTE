import json
from typing import Dict, Any
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    raise ValueError("La variable OPENAI_API_KEY n'est pas définie dans .env")

client_openai = OpenAI(api_key=OPENAI_API_KEY)

def generate_quiz(topic: str, difficulty: str = "facile", number_of_questions: int = 3) -> Dict[str, Any]:
    """Generate a quiz on a specific topic."""

    # Toujours forcer UTF-8 dans le prompt
    prompt = f"""
    Crée un quiz éducatif sur le sujet: {topic}
    Difficulté: {difficulty}
    Nombre de questions: {number_of_questions}
    
    Format de réponse JSON (UTF-8):
    {{
        "quiz_title": "Titre du quiz",
        "topic": "{topic}",
        "difficulty": "{difficulty}",
        "questions": [
            {{
                "question": "Question ici",
                "options": ["A. Option1", "B. Option2", "C. Option3", "D. Option4"],
                "correct_answer": "A",
                "explanation": "Explication de la réponse correcte"
            }}
        ]
    }}
    """

    try:
        response = client_openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "Tu es un expert en création de quiz éducatifs."},
                {"role": "user", "content": prompt}
            ],
        )

        # Toujours utiliser ensure_ascii=False pour JSON
        content = response.choices[0].message.content
        if isinstance(content, str):
            quiz_data = json.loads(content)
        else:
            quiz_data = content

        return quiz_data

    except Exception as e:
        return {"error": f"Erreur lors de la génération du quiz: {str(e)}"}
