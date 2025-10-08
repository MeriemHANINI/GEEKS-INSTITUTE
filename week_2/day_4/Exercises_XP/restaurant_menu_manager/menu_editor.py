from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    print("\n=== MENU DU PROGRAMME ===")
    print("V : Voir un item")
    print("A : Ajouter un item")
    print("D : Supprimer un item")
    print("U : Mettre à jour un item")
    print("S : Afficher le menu")
    
    choice = input("Choisissez une option : ").upper()
    if choice == 'V':
        view_item()
    elif choice == 'A':
        add_item_to_menu()
    elif choice == 'D':
        remove_item_from_menu()
    elif choice == 'U':
        update_item_from_menu()
    elif choice == 'S':
        show_restaurant_menu()
    else:
        print("Option invalide.")

def add_item_to_menu():
    name = input("Nom de l'item : ")
    price = int(input("Prix de l'item : "))
    item = MenuItem(name, price)
    item.save()

def remove_item_from_menu():
    name = input("Nom de l'item à supprimer : ")
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
    else:
        print("Erreur : l’item n’existe pas.")

def update_item_from_menu():
    old_name = input("Nom actuel de l'item : ")
    old_item = MenuManager.get_by_name(old_name)
    if old_item:
        new_name = input("Nouveau nom : ")
        new_price = int(input("Nouveau prix : "))
        old_item.update(new_name, new_price)
    else:
        print("Erreur : l’item n’existe pas.")

def view_item():
    name = input("Nom de l'item à voir : ")
    item = MenuManager.get_by_name(name)
    if item:
        print(f"{item.name} - {item.price} MAD")
    else:
        print("L’item n’existe pas.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    print("\n=== MENU DU RESTAURANT ===")
    for item in items:
        print(f"{item.name} - {item.price} MAD")
