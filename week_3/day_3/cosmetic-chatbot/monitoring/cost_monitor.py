import json
import os
from datetime import datetime, timedelta
from config.settings import Config

class CostMonitor:
    """Surveillance avancée des coûts GPT-4.1"""
    
    def __init__(self):
        self.config = Config()
        self.usage_file = "data/usage_log.json"
        self._ensure_data_directory()
        self.load_usage_data()
    
    def _ensure_data_directory(self):
        """Crée le dossier data s'il n'existe pas"""
        os.makedirs("data", exist_ok=True)
    
    def load_usage_data(self):
        """Charge l'historique d'utilisation"""
        try:
            with open(self.usage_file, 'r', encoding='utf-8') as f:
                self.usage_data = json.load(f)
        except (FileNotFoundError, json.JSONDecodeError):
            self.usage_data = {
                "daily_usage": [],
                "total_cost": 0.0,
                "total_requests": 0,
                "total_tokens": 0
            }
    
    def save_usage_data(self):
        """Sauvegarde les données d'utilisation"""
        try:
            with open(self.usage_file, 'w', encoding='utf-8') as f:
                json.dump(self.usage_data, f, indent=2, ensure_ascii=False)
        except Exception as e:
            print(f"❌ Erreur sauvegarde usage: {e}")
    
    def log_usage(self, model: str, tokens: int, cost: float, user_message: str = ""):
        """Enregistre une utilisation avec contexte"""
        today = datetime.now().strftime("%Y-%m-%d")
        now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Trouve ou crée l'entrée du jour
        daily_entry = next(
            (entry for entry in self.usage_data["daily_usage"] if entry["date"] == today), 
            None
        )
        
        if not daily_entry:
            daily_entry = {
                "date": today, 
                "tokens": 0, 
                "cost": 0.0, 
                "requests": 0,
                "details": []
            }
            self.usage_data["daily_usage"].append(daily_entry)
        
        # Met à jour les stats globales
        daily_entry["tokens"] += tokens
        daily_entry["cost"] += cost
        daily_entry["requests"] += 1
        
        # Ajoute le détail de la requête
        daily_entry["details"].append({
            "timestamp": now,
            "model": model,
            "tokens": tokens,
            "cost": cost,
            "message_preview": user_message[:100] + "..." if len(user_message) > 100 else user_message
        })
        
        # Met à jour les totaux globaux
        self.usage_data["total_cost"] += cost
        self.usage_data["total_requests"] += 1
        self.usage_data["total_tokens"] += tokens
        
        # Sauvegarde
        self.save_usage_data()
        
        # Avertissements
        self._check_limits(daily_entry)
        
        return daily_entry["cost"]
    
    def _check_limits(self, daily_entry: dict):
        """Vérifie les limites et envoie des avertissements"""
        current_cost = daily_entry["cost"]
        max_daily = self.config.MAX_COST_PER_DAY
        
        if current_cost > max_daily * 0.9:  # 90% du budget
            print(f"🚨 CRITIQUE: {current_cost:.2f}€/{max_daily}€ utilisés aujourd'hui!")
        elif current_cost > max_daily * 0.7:  # 70% du budget
            print(f"⚠️  ATTENTION: {current_cost:.2f}€/{max_daily}€ utilisés aujourd'hui")
        elif current_cost > max_daily * 0.5:  # 50% du budget
            print(f"📊 INFO: {current_cost:.2f}€/{max_daily}€ utilisés aujourd'hui")
    
    def get_daily_report(self, date: str = None) -> str:
        """Génère un rapport quotidien détaillé"""
        if not date:
            date = datetime.now().strftime("%Y-%m-%d")
        
        daily_entry = next(
            (entry for entry in self.usage_data["daily_usage"] if entry["date"] == date), 
            None
        )
        
        if not daily_entry:
            return f"📊 Aucune utilisation enregistrée pour {date}"
        
        avg_cost_per_request = daily_entry["cost"] / daily_entry["requests"] if daily_entry["requests"] > 0 else 0
        remaining_budget = max(0, self.config.MAX_COST_PER_DAY - daily_entry["cost"])
        
        report = f"""
📊 RAPPORT DÉTAILLÉ GPT-4.1 - {date}
{'=' * 50}
• 📨 Requêtes aujourd'hui: {daily_entry['requests']}
• 🧮 Tokens utilisés: {daily_entry['tokens']:,}
• 💰 Coût aujourd'hui: {daily_entry['cost']:.4f}€
• 📈 Coût moyen/requête: {avg_cost_per_request:.4f}€
• 💵 Budget restant: {remaining_budget:.2f}€
• 📉 Pourcentage utilisé: {(daily_entry['cost'] / self.config.MAX_COST_PER_DAY * 100):.1f}%

📈 STATISTIQUES GLOBALES:
• 🏁 Total requêtes: {self.usage_data['total_requests']:,}
• 🧮 Total tokens: {self.usage_data['total_tokens']:,}
• 💳 Coût total: {self.usage_data['total_cost']:.4f}€
        """
        
        return report
    
    def get_weekly_report(self) -> str:
        """Génère un rapport hebdomadaire"""
        end_date = datetime.now()
        start_date = end_date - timedelta(days=7)
        
        weekly_data = {
            "total_requests": 0,
            "total_tokens": 0,
            "total_cost": 0.0,
            "days": []
        }
        
        for daily_entry in self.usage_data["daily_usage"]:
            entry_date = datetime.strptime(daily_entry["date"], "%Y-%m-%d")
            if start_date <= entry_date <= end_date:
                weekly_data["total_requests"] += daily_entry["requests"]
                weekly_data["total_tokens"] += daily_entry["tokens"]
                weekly_data["total_cost"] += daily_entry["cost"]
                weekly_data["days"].append(daily_entry)
        
        avg_daily_cost = weekly_data["total_cost"] / len(weekly_data["days"]) if weekly_data["days"] else 0
        
        return f"""
📅 RAPPORT HEBDOMADAIRE GPT-4.1
{'=' * 45}
• 📅 Période: {start_date.strftime('%d/%m')} - {end_date.strftime('%d/%m/%Y')}
• 📨 Total requêtes: {weekly_data['total_requests']:,}
• 🧮 Total tokens: {weekly_data['total_tokens']:,}
• 💰 Coût total: {weekly_data['total_cost']:.4f}€
• 📊 Coût moyen/jour: {avg_daily_cost:.4f}€
• 📈 Jours actifs: {len(weekly_data['days'])}
        """
    
    def can_make_request(self) -> tuple[bool, str]:
        """Vérifie si une nouvelle requête est autorisée"""
        today = datetime.now().strftime("%Y-%m-%d")
        daily_entry = next(
            (entry for entry in self.usage_data["daily_usage"] if entry["date"] == today), 
            None
        )
        
        current_cost = daily_entry["cost"] if daily_entry else 0.0
        
        if current_cost >= self.config.MAX_COST_PER_DAY:
            return False, f"❌ Budget quotidien épuisé ({current_cost:.2f}€/{self.config.MAX_COST_PER_DAY}€)"
        
        remaining = self.config.MAX_COST_PER_DAY - current_cost
        return True, f"✅ Budget disponible: {remaining:.2f}€"

# Instance globale pour partager entre les modules
cost_monitor = CostMonitor()