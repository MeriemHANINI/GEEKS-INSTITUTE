# Part 1: Using the provided family dictionary
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0
for name, age in family.items():
    if age < 3:
        cost = 0
    elif age <= 12:
        cost = 10
    else:
        cost = 15
    print(f"{name} has to pay ${cost}")
    total_cost += cost

print(f"Total cost for the family: ${total_cost}")

# Part 2: Bonus - User input
family = {}
total_cost = 0

while True:
    name = input("Enter family member's name (or 'done' to finish): ")
    if name.lower() == 'done':
        break
    age = int(input(f"Enter {name}'s age: "))
    family[name] = age

print("\nTicket prices:")
for name, age in family.items():
    if age < 3:
        cost = 0
    elif age <= 12:
        cost = 10
    else:
        cost = 15
    print(f"{name} has to pay ${cost}")
    total_cost += cost

print(f"Total cost for the family: ${total_cost}")