#  What's your name?

def get_full_name(first_name, last_name, middle_name=None):
    """
    Returns a formatted full name with optional middle name.
    
    Args:
        first_name (str): The first name
        last_name (str): The last name
        middle_name (str, optional): The middle name. Defaults to None.
    
    Returns:
        str: Formatted full name
    """
    # Capitalize each part of the name
    first_name = first_name.capitalize()
    last_name = last_name.capitalize()
    
    if middle_name:
        middle_name = middle_name.capitalize()
        return f"{first_name} {middle_name} {last_name}"
    else:
        return f"{first_name} {last_name}"

# Test cases
print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
print(get_full_name(first_name="bruce", last_name="lee"))