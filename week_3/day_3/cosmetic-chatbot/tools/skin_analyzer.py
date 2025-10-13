class SkinAnalyzer:
    """Outil d'analyse du type de peau"""
    
    def __init__(self):
        self.skin_profiles = {
            "sèche": {
                "symptoms": ["tiraillements", "desquamation", "rugueuse"],
                "recommendations": ["Crèmes riches", "Huiles", "Nettoyants doux"]
            },
            "grasse": {
                "symptoms": ["brillante", "pores dilatés", "imperfections"], 
                "recommendations": ["Gels nettoyants", "Textures légères", "Matifiants"]
            },
            "mixte": {
                "symptoms": ["zone T grasse", "joues sèches"],
                "recommendations": ["Soins équilibrants", "Hydratation adaptée"]
            },
            "sensible": {
                "symptoms": ["rougeurs", "réactive", "picotements"],
                "recommendations": ["Produits hypoallergéniques", "Sans parfum"]
            }
        }
    
    def analyze(self, description: str) -> dict:
        """Analyse la description de la peau"""
        description_lower = description.lower()
        detected_types = []
        
        for skin_type, data in self.skin_profiles.items():
            for symptom in data["symptoms"]:
                if symptom in description_lower:
                    detected_types.append(skin_type)
                    break
        
        main_type = max(set(detected_types), key=detected_types.count) if detected_types else "normale"
        
        return {
            "skin_type": main_type,
            "confidence": "high" if detected_types else "medium",
            "recommendations": self.skin_profiles.get(main_type, {}).get("recommendations", []),
            "routine": self._generate_routine(main_type)
        }
    
    def _generate_routine(self, skin_type: str) -> str:
        routines = {
            "sèche": "Nettoyant doux → Sérum hydratant → Crème riche → SPF",
            "grasse": "Gel nettoyant → Tonique → Sérum matifiant → Crème légère", 
            "mixte": "Nettoyant doux → Sérum → Crème zone mixte → SPF",
            "sensible": "Nettoyant sans savon → Sérum apaisant → Crème hypoallergénique"
        }
        return routines.get(skin_type, "Routine équilibrée adaptée")