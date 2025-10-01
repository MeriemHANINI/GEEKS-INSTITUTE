# Exercice 1 : Manipulation de listes de voitures

# Liste initiale
cars_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
cars_list = [car.strip() for car in cars_str.split(",")]

# Nombre de constructeurs
print(f"Il y a {len(cars_list)} constructeurs dans la liste.")

# Liste en ordre inverse (Z-A)
cars_desc = sorted(cars_list, reverse=True)
print("Liste des constructeurs en ordre décroissant :", cars_desc)

# Combien ont la lettre 'o'
count_o = sum(1 for car in cars_list if 'o' in car.lower())
print(f"Nombre de constructeurs contenant la lettre 'o' : {count_o}")

# Combien n'ont pas la lettre 'i'
count_no_i = sum(1 for car in cars_list if 'i' not in car.lower())
print(f"Nombre de constructeurs ne contenant pas la lettre 'i' : {count_no_i}")

# enlever les doublons
cars_with_duplicates = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
cars_unique = list(dict.fromkeys(cars_with_duplicates))  # préserve l'ordre
print(f"Liste sans doublons : {', '.join(cars_unique)}")
print(f"Nombre de constructeurs après suppression des doublons : {len(cars_unique)}")

# lettres inversées, ordre croissant (A-Z)
cars_reversed_letters = [car[::-1] for car in sorted(cars_unique)]
print("Constructeurs en ordre A-Z avec lettres inversées :", cars_reversed_letters)
