import requests

url = "https://restcountries.com/v3.1/all"
headers = {"User-Agent": "Mozilla/5.0"}  # Important !

try:
    response = requests.get(url, headers=headers, timeout=10)
    print("Status code:", response.status_code)
    if response.status_code == 200:
        countries = response.json()
        print("Nombre de pays récupérés:", len(countries))
        print("Exemple:", countries[0]["name"]["common"])
    else:
        print("Erreur HTTP :", response.status_code)
except requests.exceptions.RequestException as e:
    print("Erreur de connexion:", e)
