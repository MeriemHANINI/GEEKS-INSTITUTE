"""
Script de test pour les outils éducatifs du chatbot
"""

import json
from tools.explain_concept import explain_concept
from tools.generate_quiz import generate_quiz
from tools.search_courses import search_courses

def test_explain_concept():
    print("\n=== Test Explain Concept ===")
    concept = "photosynthèse"
    result = explain_concept(concept, student_level="débutant")
    print(json.dumps(result, ensure_ascii=False, indent=2))

def test_generate_quiz():
    print("\n=== Test Generate Quiz ===")
    topic = "python"
    result = generate_quiz(topic, difficulty="facile", number_of_questions=2)
    print(json.dumps(result, ensure_ascii=False, indent=2))

def test_search_courses():
    print("\n=== Test Search Courses ===")
    topic = "python"
    level = "débutant"
    result = search_courses(topic, level)
    print(json.dumps(result, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    test_explain_concept()
    test_generate_quiz()
    test_search_courses()
