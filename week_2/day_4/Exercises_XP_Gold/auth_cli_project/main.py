from auth import login, signup

logged_in = None

while True:
    action = input("Type 'login', 'signup', or 'exit': ").lower()
    
    if action == "exit":
        print("Exiting program...")
        break
    elif action == "login":
        logged_in = login()
    elif action == "signup":
        signup()
    else:
        print("Invalid action. Try again.")
