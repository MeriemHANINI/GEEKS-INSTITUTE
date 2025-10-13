class OrderTracker:
    """Outil de suivi des commandes"""
    
    def __init__(self):
        self.orders = {
            "CMD1001": {
                "status": "expédié",
                "customer": "Marie Martin", 
                "products": ["Crème Hydratante Intense", "Sérum Éclat"],
                "order_date": "2024-01-10",
                "estimated_delivery": "2024-01-15",
                "tracking_number": "TRK789456123"
            },
            "CMD1002": {
                "status": "en traitement",
                "customer": "Pierre Dubois",
                "products": ["Nettoyant Doux Apaisant"],
                "order_date": "2024-01-12", 
                "estimated_delivery": "2024-01-18"
            }
        }
    
    def get_order_status(self, order_number: str) -> dict:
        """Statut d'une commande"""
        order = self.orders.get(order_number.upper())
        if order:
            return order
        else:
            return {
                "status": "non trouvée",
                "error": f"Commande {order_number} introuvable"
            }