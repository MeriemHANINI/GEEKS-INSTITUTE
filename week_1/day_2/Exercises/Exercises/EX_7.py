import random

def get_random_temp(season=None):
    if season == "winter":
        return round(random.uniform(-10, 16), 1)
    elif season == "spring":
        return round(random.uniform(5, 25), 1)
    elif season == "summer":
        return round(random.uniform(20, 40), 1)
    elif season == "autumn" or season == "fall":
        return round(random.uniform(0, 23), 1)
    else:
        return round(random.uniform(-10, 40), 1)

def get_season_from_month(month):
    if 3 <= month <= 5:
        return "spring"
    elif 6 <= month <= 8:
        return "summer"
    elif 9 <= month <= 11:
        return "autumn"
    else:
        return "winter"

def main():
    # Ask for season or month
    choice = input("Would you like to enter a season or month? (season/month): ").lower()
    
    if choice == "month":
        month = int(input("Enter the month number (1-12): "))
        season = get_season_from_month(month)
    else:
        season = input("Enter the season (summer, autumn/fall, winter, spring): ").lower()
    
    temp = get_random_temp(season)
    
    print(f"The temperature right now is {temp} degrees Celsius.")
    
    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today")
    elif 0 <= temp < 16:
        print("Quite chilly! Don't forget your coat")
    elif 16 <= temp < 23:
        print("Pleasant weather! Enjoy your day")
    elif 23 <= temp < 32:
        print("Warm day! Stay hydrated")
    else:
        print("Hot! Avoid prolonged exposure to the sun")

# Run the program
main()