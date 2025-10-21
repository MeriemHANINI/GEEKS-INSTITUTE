def calculate_sum(x):
    """
    Calcule la valeur de X + XX + XXX + XXXX
    """
    # Convertir en string pour construire les nombres
    x_str = str(x)
    
    # Construire les termes: X, XX, XXX, XXXX
    total = 0
    for i in range(1, 5):
        term = int(x_str * i)  # Répéter le chiffre i fois
        total += term
    
    return total

# Test de l'exercice 3
if __name__ == "__main__":
    # Test avec l'exemple donné
    result = calculate_sum(3)
    print(f"Résultat pour X=3 : {result}")  # Devrait afficher 3702
    
    # Test avec d'autres valeurs
    test_values = [1, 2, 4, 5]
    for value in test_values:
        result = calculate_sum(value)
        print(f"Résultat pour X={value} : {result}")