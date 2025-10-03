"""
Agent principal pour le chatbot éducatif
"""

import json
import sys
import io
from openai import OpenAI
from dotenv import load_dotenv
from tools import TOOLS_SCHEMAS, TOOLS_FUNCTIONS

load_dotenv()

# Forcer UTF-8 sur Windows
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

MODEL = "openai/gpt-4o-mini"
client = OpenAI(
    api_key=os.getenv("GITHUB_TOKEN"),
    base_url="https://models.github.ai/inference"
)

def ask_agent(user_query: str, messages: list):
    try:
        print(f"🔍 Question reçue: {user_query}")
        messages.append({"role": "user", "content": user_query})

        # Step 1: Appel initial
        completion = client.chat.completions.create(
            model=MODEL,
            messages=messages,
            tools=TOOLS_SCHEMAS,
        )

        # Si des outils sont appelés
        if completion.choices[0].message.tool_calls:
            print("🛠️  Appel d'outils détecté")
            
            messages.append({
                "role": "assistant",
                "content": completion.choices[0].message.content or "",
                "tool_calls": [
                    {
                        "id": tc.id,
                        "type": tc.type,
                        "function": {
                            "name": tc.function.name,
                            "arguments": tc.function.arguments
                        }
                    } for tc in completion.choices[0].message.tool_calls
                ]
            })

            # Exécuter chaque outil
            for tool_call in completion.choices[0].message.tool_calls:
                function_name = tool_call.function.name
                function_args = json.loads(tool_call.function.arguments)
                
                print(f"🔧 Exécution de l'outil: {function_name} avec args: {function_args}")

                tool_function = TOOLS_FUNCTIONS.get(function_name)
                if tool_function:
                    result = tool_function(**function_args)
                    print(f"✅ Résultat de l'outil: {json.dumps(result, ensure_ascii=False, indent=2)}")
                else:
                    result = "Error: tool not found"

                # Ajouter la réponse de l'outil
                messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": json.dumps(result, ensure_ascii=False)
                })

        # Step 2: Réponse finale
        completion_2 = client.chat.completions.create(
            model=MODEL,
            messages=messages,
            tools=TOOLS_SCHEMAS,
        )

        final_response = completion_2.choices[0].message.content
        print(f"📝 Réponse générée: {final_response}")
        
        return final_response if final_response else "Désolé, je n'ai pas pu générer de réponse."

    except Exception as e:
        error_msg = f"Erreur: {str(e)}"
        print(f"❌ {error_msg}")
        return error_msg
