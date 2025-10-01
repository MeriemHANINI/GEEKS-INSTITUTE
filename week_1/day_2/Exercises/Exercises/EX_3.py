brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {"France": "blue", "Spain": "red", "US": ["pink", "green"]}
}

# 2. Change number of stores
brand["number_stores"] = 2

# 3. Print clients
print(f"Zara's clients are {', '.join(brand['type_of_clothes'])}")

# 4. Add country_creation
brand["country_creation"] = "Spain"

# 5. Add Desigual to competitors
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# 6. Delete creation_date
brand.pop("creation_date", None)

# 7. Last international competitor
print(brand["international_competitors"][-1])

# 8. Major colors in US
print(brand["major_color"]["US"])

# 9. Length of dictionary
print(len(brand))

# 10. Keys of dictionary
print(brand.keys())

# 11. More on Zara
more_on_zara = {"creation_date": 1975, "number_stores": 10000}

# 12. Add to brand
brand.update(more_on_zara)

# 13. Check number_stores
print(brand["number_stores"])  # updated to 10000
