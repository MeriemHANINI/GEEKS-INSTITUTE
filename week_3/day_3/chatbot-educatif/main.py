"""
Educational Chatbot Agent - Point d'entrée principal
"""

import sys
import io
from agent import ask_agent

memory = [
    {
        "role": "system",
        "content": """
        Tu es un assistant éducatif intelligent et patient. 
        Tu aides les étudiants à apprendre en:
        - Expliquant des concepts complexes simplement
        - Proposant des cours adaptés à leur niveau
        - Créant des quiz pour tester leurs connaissances
        - Donnant des exemples concrets et pratiques
        
        Sois encourageant et adapte-toi au niveau de chaque étudiant.
        Utilise les outils à ta disposition pour offrir la meilleure aide possible.
        """
    },
]

if __name__ == "__main__":
    print("Chatbot Éducatif - Prêt à aider!")
    print("Tapez 'quit' pour quitter\n")
    
    try:
        while True:
            question = input("Étudiant: ")
            if question.lower() in ['quit', 'exit', 'q']:
                break
            
            response = ask_agent(question, memory)
            print(f"\nAssistant: {response}\n")

    except Exception as e:
        print(f"Erreur: {e}\n")
