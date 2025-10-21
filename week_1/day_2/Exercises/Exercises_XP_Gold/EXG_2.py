def birthday_lookup_advanced():
    # Créer le dictionnaire des anniversaires
    birthdays = {
        "Alice": "1990/05/15",
        "Bob": "1985/12/03",
        "Charlie": "1992/08/22",
        "Diana": "1988/03/10",
        "Eve": "1995/11/28"
    }
    
    # Message de bienvenue
    print("👋 Bienvenue dans le système de recherche d'anniversaires !")
    print("Vous pouvez rechercher les anniversaires des personnes dans la liste !")
    
    # Afficher tous les noms disponibles
    print("\nVoici toutes les personnes dans notre liste :")
    for name in birthdays:
        print(f"- {name}")
    
    # Demander le nom à l'utilisateur
    name = input("\nEntrez le nom d'une personne : ")
    
    # Rechercher l'anniversaire avec gestion d'erreur
    if name in birthdays:
        birthday = birthdays[name]
        print(f"\n🎂 L'anniversaire de {name} est le {birthday}")
    else:
        print(f"\n❌ Désolé, nous n'avons pas les informations d'anniversaire pour {name}")

# Test de l'exercice 2
if __name__ == "__main__":
    birthday_lookup_advanced()