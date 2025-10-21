def birthday_lookup_basic():
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
    
    # Demander le nom à l'utilisateur
    name = input("\nEntrez le nom d'une personne : ")
    
    # Rechercher l'anniversaire
    birthday = birthdays.get(name)
    
    # Afficher le résultat
    if birthday:
        print(f"\n🎂 L'anniversaire de {name} est le {birthday}")
    else:
        print(f"\n❌ Désolé, nous n'avons pas trouvé {name} dans la liste")

# Test de l'exercice 1
if __name__ == "__main__":
    birthday_lookup_basic()