import random

def random_compare(user_number):
    rand_number = random.randint(1, 100)
    if user_number == rand_number:
        print(f"Success! Both numbers are {rand_number}")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {rand_number}")

user_number = int(input("Enter a number between 1 and 100: "))
random_compare(user_number)
