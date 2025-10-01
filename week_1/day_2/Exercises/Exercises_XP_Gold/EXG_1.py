# Exercice 1 : Birthday Look-up simple

def birthday_lookup_simple():
    birthdays = {
        "Alice": "1990/05/12",
        "Bob": "1985/11/03",
        "Charlie": "1992/07/19",
        "Diana": "1998/02/25",
        "Eve": "2000/09/10"
    }

    print("Bienvenue !")
    print("Vous pouvez consulter les anniversaires des personnes dans la liste !")

    name = input("Entrez le nom de la personne : ")

    if name in birthdays:
        print(f"L'anniversaire de {name} est le {birthdays[name]}.")
    else:
        print("Nom non trouvé.")


# birthday_lookup_simple()
