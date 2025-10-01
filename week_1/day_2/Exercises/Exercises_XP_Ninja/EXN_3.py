# Exercice 3 : Traduction anglais ↔ Morse

MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/'
}

# Fonction : Anglais → Morse
def english_to_morse(text):
    text = text.upper()
    return ' '.join(MORSE_CODE_DICT.get(char, '') for char in text)

# Fonction : Morse → Anglais
def morse_to_english(morse_text):
    morse_dict_reversed = {value: key for key, value in MORSE_CODE_DICT.items()}
    words = morse_text.split(' / ')
    decoded_words = []
    for word in words:
        letters = word.split()
        decoded_letters = [morse_dict_reversed.get(letter, '') for letter in letters]
        decoded_words.append(''.join(decoded_letters))
    return ' '.join(decoded_words)

# Exemples de test
msg = "Hello World"
morse_msg = english_to_morse(msg)
print("Morse :", morse_msg)
print("Décodé :", morse_to_english(morse_msg))
