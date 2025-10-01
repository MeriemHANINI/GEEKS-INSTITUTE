# Predefined family
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0
for member, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    print(f"{member} has to pay ${price}")
    total_cost += price

print(f"Total family cost: ${total_cost}")

# Bonus: user input version
family_input = {}
while True:
    name = input("Enter family member name (or 'done' to finish): ")
    if name.lower() == 'done':
        break
    age = int(input(f"Enter age for {name}: "))
    family_input[name] = age

print(family_input)
