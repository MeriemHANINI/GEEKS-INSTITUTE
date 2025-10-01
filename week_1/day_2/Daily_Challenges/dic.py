# Challenge : Index des lettres dans un mot
# L'objectif est de créer un dictionnaire où chaque lettre est la clé,
# et la valeur est une liste contenant toutes les positions (indices) de cette lettre.

def letter_positions(word):
    """
    Retourne un dictionnaire contenant les positions de chaque lettre dans le mot.
    
    Args:
        word (str): Le mot à analyser.
    
    Returns:
        dict: Dictionnaire avec les lettres comme clés et les indices comme valeurs.
    """
    positions = {}
    for index, letter in enumerate(word):
        if letter in positions:
            positions[letter].append(index)  # Ajouter l'indice à la liste existante
        else:
            positions[letter] = [index]      # Créer une nouvelle entrée avec une liste
    return positions

# Exemple d'utilisation
word_input = input("Entrez un mot : ")
result = letter_positions(word_input)
print(result)

# Exemples de tests :
# "dodo"   ➞ {'d': [0, 2], 'o': [1, 3]}
# "froggy" ➞ {'f': [0], 'r': [1], 'o': [2], 'g': [3, 4], 'y': [5]}
# "grapes" ➞ {'g': [0], 'r': [1], 'a': [2], 'p': [3], 'e': [4], 's': [5]}
