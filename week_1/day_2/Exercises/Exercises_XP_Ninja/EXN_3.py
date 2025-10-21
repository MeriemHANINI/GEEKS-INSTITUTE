#  From English to Morse

def english_to_morse(text):
    """
    Convert English text to Morse code.
    
    Args:
        text (str): English text to convert
    
    Returns:
        str: Morse code representation
    """
    morse_dict = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
        '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..',
        "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
        '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.',
        '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.',
        ' ': '/'
    }
    
    morse_code = []
    for char in text.upper():
        if char in morse_dict:
            morse_code.append(morse_dict[char])
        else:
            morse_code.append('?')  # For unknown characters
    
    return ' '.join(morse_code)

def morse_to_english(morse_code):
    """
    Convert Morse code back to English text.
    
    Args:
        morse_code (str): Morse code to convert
    
    Returns:
        str: English text representation
    """
    morse_dict = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
        '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
        '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
        '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
        '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2',
        '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7',
        '---..': '8', '----.': '9', '.-.-.-': '.', '--..--': ',', '..--..': '?',
        '.----.': "'", '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')',
        '.-...': '&', '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+',
        '-....-': '-', '..--.-': '_', '.-..-.': '"', '...-..-': '$', '.--.-.': '@',
        '/': ' '
    }
    
    words = morse_code.split(' / ')
    english_text = []
    
    for word in words:
        letters = word.split(' ')
        decoded_word = []
        for letter in letters:
            if letter in morse_dict:
                decoded_word.append(morse_dict[letter])
            elif letter:  # Non-empty unknown code
                decoded_word.append('?')
        english_text.append(''.join(decoded_word))
    
    return ' '.join(english_text)

# Test the Morse code functions
test_text = "HELLO WORLD"
morse_result = english_to_morse(test_text)
english_result = morse_to_english(morse_result)

print(f"Original: {test_text}")
print(f"Morse: {morse_result}")
print(f"Back to English: {english_result}")

# Test with a more complex sentence
sentence = "Python is fun!"
morse_sentence = english_to_morse(sentence)
print(f"\nSentence: {sentence}")
print(f"Morse: {morse_sentence}")
print(f"Decoded: {morse_to_english(morse_sentence)}")