# 1. Create the brand dictionary
brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        'France': 'blue',
        'Spain': 'red',
        'US': ['pink', 'green']
    }
}

# 2. Change number of stores to 2
brand['number_stores'] = 2

# 3. Print who Zara's clients are
print(f"Zara's clients are: {', '.join(brand['type_of_clothes'][:-1])} and {brand['type_of_clothes'][-1]}.")

# 4. Add country_creation
brand['country_creation'] = 'Spain'

# 5. Check and add Desigual to international_competitors
if 'international_competitors' in brand:
    brand['international_competitors'].append('Desigual')

# 6. Delete creation_date
del brand['creation_date']

# 7. Print last international competitor
print(f"Last international competitor: {brand['international_competitors'][-1]}")

# 8. Print major clothes colors in US
print(f"Major clothes colors in US: {', '.join(brand['major_color']['US'])}")

# 9. Print length of dictionary
print(f"Number of key-value pairs: {len(brand)}")

# 10. Print keys of dictionary
print(f"Keys: {list(brand.keys())}")

# 11. Create more_on_zara dictionary
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}

# 12. Add more_on_zara to brand
brand.update(more_on_zara)

# 13. Print number_stores
print(f"Number of stores: {brand['number_stores']}")
# The value was updated to 10000 from more_on_zara