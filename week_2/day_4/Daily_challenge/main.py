import requests
import random
import psycopg2
from config import DB_CONFIG

try:
    # Connexion à PostgreSQL
    conn = psycopg2.connect(**DB_CONFIG)
    cursor = conn.cursor()

    # Récupérer tous les pays depuis l'API
    response = requests.get("https://restcountries.com/v3.1/all")


    if response.status_code == 200:
        countries = response.json()

        if isinstance(countries, list):
            # Choisir 10 pays aléatoires
            random_countries = random.sample(countries, 10)

            # Insérer dans la base
            for country in random_countries:
                name = country.get("name", {}).get("common", "N/A")
                capital = country.get("capital", ["N/A"])[0] if country.get("capital") else "N/A"
                flag = country.get("flags", {}).get("png", "N/A")
                subregion = country.get("subregion", "N/A")
                population = country.get("population", 0)

                cursor.execute('''
                    INSERT INTO countries (name, capital, flag, subregion, population)
                    VALUES (%s, %s, %s, %s, %s)
                ''', (name, capital, flag, subregion, population))

            conn.commit()
            print("10 pays aléatoires insérés dans la base avec succès !")
        else:
            print("Erreur : La réponse de l'API n'est pas une liste.")
    else:
        print(f"Erreur HTTP {response.status_code}")

except Exception as e:
    print("Erreur :", e)

finally:
    if cursor:
        cursor.close()
    if conn:
        conn.close()
