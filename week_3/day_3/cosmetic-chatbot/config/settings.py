import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Configuration optimisée pour GPT-4.1"""
    
    # 🔑 Keys API
    OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
    
    # 🎯 Configuration GPT-4.1
    DEFAULT_MODEL = os.getenv("DEFAULT_MODEL", "openai/gpt-4.1")
    MAX_TOKENS = int(os.getenv("MAX_TOKENS", 1000))
    
    # 💰 Gestion des coûts (GPT-4.1 coûte ~$0.03/1K tokens)
    MAX_COST_PER_DAY = float(os.getenv("MAX_COST_PER_DAY", 5.00))
    REQUESTS_PER_MINUTE = int(os.getenv("REQUESTS_PER_MINUTE", 10))
    
    # ⚙️ Configuration App
    SECRET_KEY = os.getenv("SECRET_KEY")
    DEBUG = os.getenv("DEBUG", "False").lower() == "true"
    PORT = int(os.getenv("PORT", 5000))
    
    # 🌐 Configuration OpenRouter
    API_BASE = "https://openrouter.ai/api/v1"
    HEADERS = {
        "HTTP-Referer": "http://localhost:5000",
        "X-Title": "Chatbot Cosmétique GPT-4.1"
    }
    
    # 📊 Coûts par modèle (pour estimation)
    MODEL_COSTS = {
        "openai/gpt-4.1": 0.03,  # $0.03 per 1K tokens
        "openai/gpt-4": 0.06,
        "openai/gpt-3.5-turbo": 0.002,
        "anthropic/claude-3.5-sonnet": 0.015,
        "google/gemini-2.0-flash-exp:free": 0.0
    }