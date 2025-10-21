def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'")

# Call the function in different ways
make_shirt()  # Default values
make_shirt("medium")  # Medium size, default text
make_shirt("small", "Hello World!")  # Custom size and text
make_shirt(size="extra large", text="Python is awesome!")  # Keyword arguments