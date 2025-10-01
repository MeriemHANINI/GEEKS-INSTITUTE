# Exercice 4: Double Dice

import random

def throw_dice():
    """
    Lance un dé et retourne un entier entre 1 et 6
    """
    return random.randint(1, 6)

def throw_until_doubles():
    """
    Lance deux dés jusqu'à obtenir des doubles.
    Retourne le nombre de lancers nécessaires.
    """
    count = 0
    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        count += 1
        if dice1 == dice2:
            break
    return count

def main_dice_simulation():
    """
    Lance l'expérience 100 fois et affiche :
    - Le nombre total de lancers
    - Le nombre moyen de lancers pour obtenir des doubles
    """
    results = []
    for _ in range(100):
        throws_needed = throw_until_doubles()
        results.append(throws_needed)

    total_throws = sum(results)
    average_throws = round(total_throws / len(results), 2)

    print(f"Total de lancers pour atteindre 100 doubles : {total_throws}")
    print(f"Moyenne de lancers pour obtenir des doubles : {average_throws}")


# main_dice_simulation()
