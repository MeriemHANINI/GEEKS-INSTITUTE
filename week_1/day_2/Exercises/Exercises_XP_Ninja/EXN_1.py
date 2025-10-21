#  Cars

# Part 1: Basic operations
manufacturers_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# Convert string to list
manufacturers_list = manufacturers_string.split(", ")
print(f"Number of manufacturers: {len(manufacturers_list)}")

# Print in reverse order
manufacturers_list.reverse()
print("Manufacturers in reverse order:", manufacturers_list)

# Reset list for further operations
manufacturers_list = manufacturers_string.split(", ")

# Count manufacturers with 'o' and without 'i'
count_with_o = sum(1 for manufacturer in manufacturers_list if 'o' in manufacturer.lower())
count_without_i = sum(1 for manufacturer in manufacturers_list if 'i' not in manufacturer.lower())

print(f"Manufacturers with 'o': {count_with_o}")
print(f"Manufacturers without 'i': {count_without_i}")

# Bonus: Remove duplicates
duplicate_list = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
unique_manufacturers = list(set(duplicate_list))
unique_string = ", ".join(unique_manufacturers)

print(f"Unique manufacturers: {unique_string}")
print(f"Number of unique manufacturers: {len(unique_manufacturers)}")

# Bonus: Reverse letters in ascending order
unique_manufacturers.sort()  # Sort A-Z
reversed_names = [name[::-1] for name in unique_manufacturers]
print("Manufacturers with reversed letters:", reversed_names)