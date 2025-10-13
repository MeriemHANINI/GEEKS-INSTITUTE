import openai
import time
from datetime import datetime, timedelta
from config.settings import Config
from prompts.system_prompts import SystemPrompts
from tools.product_search import ProductSearch
from tools.skin_analyzer import SkinAnalyzer
from tools.order_tracker import OrderTracker
from monitoring.cost_monitor import cost_monitor  # 📊 IMPORT NOUVEAU

class CosmeticAgentGPT4:
    """Agent optimisé pour GPT-4.1 avec monitoring des coûts"""
    
    def __init__(self):
        self.config = Config()
        self.prompts = SystemPrompts()
        self.product_tool = ProductSearch()
        self.skin_tool = SkinAnalyzer()
        self.order_tool = OrderTracker()
        
        # 🔧 Configuration OpenRouter
        openai.api_base = self.config.API_BASE
        openai.api_key = self.config.OPENROUTER_API_KEY
        
        # 💰 Gestion des coûts et limites
        self.request_times = []
    
    def _check_rate_limits(self):
        """Vérifie les limites de taux et de coût"""
        now = datetime.now()
        
        # 🚫 Vérification autorisation via cost_monitor
        can_request, message = cost_monitor.can_make_request()
        if not can_request:
            raise Exception(message)
        
        # ⏱️ Vérification limite de taux
        self.request_times = [t for t in self.request_times if now - t < timedelta(minutes=1)]
        if len(self.request_times) >= self.config.REQUESTS_PER_MINUTE:
            time.sleep(10)  # Pause si trop de requêtes
    
    def _generate_llm_response(self, prompt: str, context: dict = None, user_message: str = "") -> str:
        """Génère une réponse avec monitoring des coûts"""
        
        # 🛡️ Vérification des limites
        self._check_rate_limits()
        self.request_times.append(datetime.now())
        
        try:
            # 🎯 Préparation du message avec contexte riche
            messages = [
                {"role": "system", "content": self.prompts.COSMETIC_EXPERT_GPT4},
            ]
            
            # 📝 Ajout du contexte si disponible
            if context:
                context_message = f"""
                CONTEXTE SUPPLÉMENTAIRE :
                - Type de peau : {context.get('skin_type', 'Non spécifié')}
                - Âge estimé : {context.get('age_range', 'Non spécifié')}
                - Préoccupations : {context.get('concerns', [])}
                - Produits disponibles : {context.get('available_products', [])}
                """
                messages.append({"role": "system", "content": context_message})
            
            messages.append({"role": "user", "content": prompt})
            
            # 🚀 Appel GPT-4.1 avec paramètres optimisés
            response = openai.ChatCompletion.create(
                model=self.config.DEFAULT_MODEL,
                messages=messages,
                max_tokens=self.config.MAX_TOKENS,
                temperature=0.7,
                top_p=0.9,
                frequency_penalty=0.1,
                presence_penalty=0.1,
                headers=self.config.HEADERS
            )
            
            # 💰 Tracking des coûts AVEC MONITORING
            tokens_used = response.usage.total_tokens
            cost = self._estimate_cost(self.config.DEFAULT_MODEL, tokens_used)
            
            # 📊 ENREGISTREMENT DANS LE MONITOR
            cost_monitor.log_usage(
                model=self.config.DEFAULT_MODEL,
                tokens=tokens_used,
                cost=cost,
                user_message=user_message
            )
            
            print(f"✅ GPT-4.1 utilisé - Tokens: {tokens_used} - Coût: {cost:.4f}€")
            
            return response.choices[0].message.content.strip()
            
        except openai.error.RateLimitError:
            return "⚠️ Service temporairement saturé. Veuillez réessayer dans quelques instants."
        except openai.error.APIError as e:
            return f"❌ Erreur API: {str(e)}"
        except Exception as e:
            return f"🔧 Erreur technique: {str(e)}"
    
    def _estimate_cost(self, model: str, tokens: int) -> float:
        """Estime le coût d'une requête"""
        cost_per_token = self.config.MODEL_COSTS.get(model, 0.03) / 1000
        return tokens * cost_per_token

    # ... [le reste du code reste identique] ...