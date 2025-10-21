import random

def compare_numbers(user_number):
    if user_number < 1 or user_number > 100:
        print("Please enter a number between 1 and 100")
        return
    
    random_number = random.randint(1, 100)
    
    if user_number == random_number:
        print(f"Success! Both numbers are {user_number}")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}")

# Test the function
compare_numbers(50)