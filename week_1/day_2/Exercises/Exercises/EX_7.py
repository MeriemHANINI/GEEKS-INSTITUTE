def get_random_temp(season="summer"):
    import random
    limits = {"winter": (-10, 16), "spring": (0, 23), "summer": (24, 40), "autumn": (0, 23)}
    low, high = limits.get(season, (0, 40))
    return round(random.uniform(low, high), 1)

def main():
    season = input("Enter the season (summer, autumn, winter, spring): ")
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp}°C.")
    
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 < temp <= 23:
        print("Nice weather! Light jacket is enough")
    elif 24 <= temp <= 32:
        print("Warm! Dress comfortably")
    else:
        print("Hot! Stay hydrated and cool")

main()
