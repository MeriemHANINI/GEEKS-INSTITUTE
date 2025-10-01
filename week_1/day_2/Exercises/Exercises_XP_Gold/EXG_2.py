# Exercice 2 : Birthday Look-up avancé

def birthday_lookup_advanced():
    birthdays = {
        "Alice": "1990/05/12",
        "Bob": "1985/11/03",
        "Charlie": "1992/07/19",
        "Diana": "1998/02/25",
        "Eve": "2000/09/10"
    }

    print("Bienvenue !")
    print("Vous pouvez consulter les anniversaires des personnes dans la liste !")
    
    # Afficher tous les noms disponibles
    print("Personnes disponibles :", ", ".join(birthdays.keys()))

    name = input("Entrez le nom de la personne : ")

    if name in birthdays:
        print(f"L'anniversaire de {name} est le {birthdays[name]}.")
    else:
        print(f"Désolé, nous n’avons pas l’information pour {name}.")


# birthday_lookup_advanced()
