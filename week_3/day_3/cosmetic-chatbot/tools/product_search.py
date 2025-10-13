class ProductSearch:
    """Outil de recherche de produits cosmétiques"""
    
    def __init__(self):
        self.products = self._load_products()
    
    def _load_products(self):
        return [
            {
                "id": 1,
                "name": "Crème Hydratante Intense",
                "category": "hydratation",
                "price": 45.00,
                "skin_types": ["sèche", "normale", "sensible"],
                "ingredients": ["Acide hyaluronique", "Beurre de karité"],
                "benefits": "Hydratation 24h, apaisante"
            },
            {
                "id": 2, 
                "name": "Sérum Anti-Âge Global",
                "category": "anti-âge",
                "price": 68.00,
                "skin_types": ["toutes"],
                "ingredients": ["Rétinol", "Vitamine C", "Peptides"],
                "benefits": "Rides, fermeté, éclat"
            },
            {
                "id": 3,
                "name": "Nettoyant Doux Apaisant", 
                "category": "nettoyage",
                "price": 28.00,
                "skin_types": ["sensible", "sèche"],
                "ingredients": ["Camomille", "Glycérine"],
                "benefits": "Nettoyage doux sans irritation"
            }
        ]
    
    def search_by_skin_type(self, skin_type: str):
        """Recherche produits par type de peau"""
        return [p for p in self.products if skin_type in p["skin_types"]]
    
    def search_by_category(self, category: str):
        """Recherche produits par catégorie"""
        return [p for p in self.products if category in p["category"]]
    
    def get_product_details(self, product_id: int):
        """Détails d'un produit spécifique"""
        return next((p for p in self.products if p["id"] == product_id), None)