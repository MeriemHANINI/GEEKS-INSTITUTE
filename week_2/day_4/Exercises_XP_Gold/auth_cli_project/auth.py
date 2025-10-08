import hashlib
from db import user_exists, add_user, get_password

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def login():
    username = input("Enter username: ")
    password = input("Enter password: ")
    stored_hash = get_password(username)
    
    if stored_hash and stored_hash == hash_password(password):
        print("You are now logged in")
        return username
    else:
        print("Invalid credentials.")
        return None

def signup():
    while True:
        new_username = input("Enter a new username: ")
        if user_exists(new_username):
            print("Username already exists. Try another one.")
        else:
            break
    new_password = input("Enter a new password: ")
    add_user(new_username, hash_password(new_password))
    print(f"User '{new_username}' created successfully!")
