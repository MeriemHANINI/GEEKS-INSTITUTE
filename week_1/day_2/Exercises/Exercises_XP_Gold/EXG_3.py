# Exercice 3: Sum X + XX + XXX + XXXX

def sum_sequence(x):
    """
    Calcule la somme X + XX + XXX + XXXX pour un entier X
    """
    str_x = str(x)
    total = int(str_x) + int(str_x*2) + int(str_x*3) + int(str_x*4)
    return total


# print(sum_sequence(3))  
