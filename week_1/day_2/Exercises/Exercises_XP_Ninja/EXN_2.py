# Exercice 2 : Fonction pour obtenir le nom complet

def get_full_name(first_name, last_name, middle_name=""):
    """
    Retourne le nom complet. Le middle_name est optionnel.
    """
    if middle_name:
        full_name = f"{first_name.capitalize()} {middle_name.capitalize()} {last_name.capitalize()}"
    else:
        full_name = f"{first_name.capitalize()} {last_name.capitalize()}"
    return full_name

# Exemples de test
print(get_full_name("john", "lee", "hooker"))  # John Hooker Lee
print(get_full_name("bruce", "lee"))           # Bruce Lee
