import random

# Exercice 4: Simulation de lancers de dés
def throw_dice():
    """
    Simule le lancer d'un dé
    Retourne un entier entre 1 et 6
    """
    return random.randint(1, 6)

def throw_until_doubles():
    """
    Lance deux dés jusqu'à obtenir un double
    Retourne le nombre total de lancers
    """
    count = 0
    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        count += 1
        
        # Afficher chaque lancer (optionnel)
        print(f"Lancer {count}: ({dice1}, {dice2})")
        
        if dice1 == dice2:
            print(f"Double obtenu ! ({dice1}, {dice2})")
            return count

def main():
    """
    Fonction principale pour l'exercice 4
    """
    print("Simulation de lancers de dés jusqu'à obtenir 100 doubles")
    
    results = []  # Liste pour stocker le nombre de lancers pour chaque double
    total_throws = 0
    
    for i in range(100):
        print(f"\n--- Double n°{i+1} ---")
        throws_needed = throw_until_doubles()
        results.append(throws_needed)
        total_throws += throws_needed
    
    # Calculer la moyenne
    average_throws = total_throws / 100
    
    # Afficher les résultats
    print("\n" + "="*50)
    print("RÉSULTATS FINAUX")
    print("="*50)
    print(f"Nombre total de lancers : {total_throws}")
    print(f"Moyenne de lancers pour obtenir un double : {average_throws:.2f}")
    
    # Statistiques supplémentaires
    print(f"\nStatistiques supplémentaires :")
    print(f"Minimum de lancers : {min(results)}")
    print(f"Maximum de lancers : {max(results)}")

# Test de l'exercice 4
if __name__ == "__main__":
    main()