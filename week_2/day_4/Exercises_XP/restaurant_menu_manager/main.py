from menu_editor import show_user_menu

while True:
    show_user_menu()
    cont = input("Voulez-vous continuer ? (O/N) : ").upper()
    if cont != 'O':
        break
