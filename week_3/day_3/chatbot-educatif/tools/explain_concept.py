"""
Explain Concept Tool

This tool provides detailed explanations of educational concepts.
"""
from typing import Dict, Any
import json
from pathlib import Path

CONTENT_FILE = Path("data/educational_content.json")

def explain_concept(concept: str, student_level: str = "débutant") -> Dict[str, Any]:
    """Explain an educational concept in detail."""

    concepts_db = {}
    if CONTENT_FILE.exists():
        with open(CONTENT_FILE, "r", encoding="utf-8") as f:
            try:
                content = json.load(f)
                concepts_db = {c["name"].lower(): c for c in content.get("concepts", [])}
            except json.JSONDecodeError:
                pass

    default_db = {
        "photosynthèse": {
            "title": "La Photosynthèse",
            "explanation": "La photosynthèse est le processus par lequel les plantes utilisent la lumière du soleil pour convertir le CO2 et l'eau en glucose et oxygène.",
            "level": "débutant",
            "formula": "6CO₂ + 6H₂O + lumière → C₆H₁₂O₆ + 6O₂",
            "examples": ["Plantes vertes", "Algues", "Certaines bactéries"]
        },
        "python": {
            "title": "Programmation Python",
            "explanation": "Python est un langage de programmation interprété, de haut niveau et généraliste.",
            "level": "débutant",
            "concepts": ["Variables", "Boucles", "Fonctions", "Classes"],
            "syntax_example": "print('Bonjour le monde!')"
        }
    }

    concepts_db = {**default_db, **concepts_db}

    concept_lower = concept.lower()
    concept_data = concepts_db.get(concept_lower)

    if concept_data:
        if "level" in concept_data and concept_data["level"] != student_level:
            concept_data["note"] = f"Ce concept est indiqué pour le niveau {concept_data['level']}, pas exactement pour {student_level}."
        return concept_data
    else:
        return {
            "concept": concept,
            "message": "Concept non trouvé dans la base locale.",
            "suggestions": ["Vérifiez l'orthographe", "Essayez un terme plus général"]
        }


EXPLAIN_CONCEPT_SCHEMA = {
    "type": "function",
    "function": {
        "name": "explain_concept",
        "description": "Expliquer un concept éducatif de manière simple et claire.",
        "parameters": {
            "type": "object",
            "properties": {
                "concept": {"type": "string", "description": "Concept à expliquer"},
                "student_level": {"type": "string", "description": "Niveau de l'étudiant"}
            },
            "required": ["concept"],
            "additionalProperties": False,
        },
        "strict": True,
    },
}
