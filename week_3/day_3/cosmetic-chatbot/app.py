from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuration
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"

headers = {
    "Authorization": f"Bearer {OPENROUTER_API_KEY}",
    "HTTP-Referer": "http://localhost:5000", 
    "X-Title": "Chatbot Cosmétique",
    "Content-Type": "application/json; charset=utf-8"
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message = data.get('message', '').strip()
        
        if not user_message:
            return jsonify({'error': 'Message vide'}), 400
        
        print(f"📨 Message reçu: {user_message}")
        
        # Préparer la requête avec encodage UTF-8 explicite
        payload = {
            "model": "google/gemini-2.0-flash-exp:free",
            "messages": [
                {
                    "role": "system",
                    "content": "Tu es un expert cosmétique français pour 'Beauté Naturelle'. Réponds en français avec bienveillance. Utilise 1-2 emojis. Sois concis et utile."
                },
                {
                    "role": "user", 
                    "content": user_message
                }
            ],
            "max_tokens": 300,
            "temperature": 0.7
        }
        
        # Faire la requête avec requests et encodage UTF-8
        response = requests.post(
            OPENROUTER_URL,
            json=payload,
            headers=headers,
            timeout=30
        )
        
        if response.status_code == 200:
            result = response.json()
            bot_response = result['choices'][0]['message']['content']
            
            # Forcer l'encodage UTF-8 pour l'affichage
            safe_response = bot_response.encode('utf-8', 'ignore').decode('utf-8')
            print(f"✅ Réponse générée: {safe_response[:50]}...")
            
            return jsonify({
                'success': True,
                'response': bot_response,
                'intent': 'general'
            })
        else:
            error_text = response.text.encode('utf-8', 'ignore').decode('utf-8')
            print(f"❌ Erreur API: {response.status_code} - {error_text}")
            return jsonify({
                'success': False,
                'response': f"Erreur de service: {response.status_code}"
            }), 500
                
    except Exception as e:
        # Gestion sécurisée de l'erreur avec encodage
        error_msg = str(e).encode('utf-8', 'ignore').decode('utf-8')
        print(f"❌ Erreur: {error_msg}")
        return jsonify({
            'success': False,
            'response': "Désolé, service temporairement indisponible"
        }), 500

@app.route('/api/health')
def health():
    return jsonify({'status': 'healthy', 'service': 'cosmetic-chatbot'})

if __name__ == '__main__':
    print("🚀 Chatbot Cosmétique - Encodage UTF-8")
    print("📍 http://localhost:5000")
    app.run(debug=True, port=5000)