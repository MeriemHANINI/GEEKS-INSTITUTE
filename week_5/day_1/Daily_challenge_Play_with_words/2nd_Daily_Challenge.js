const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  // First function - toJs
  function toJs() {
      return new Promise((resolve, reject) => {
          try {
              const morseObj = JSON.parse(morse);
              
              // Check if object is empty
              if (Object.keys(morseObj).length === 0) {
                  reject("Error: Morse JavaScript object is empty");
              } else {
                  resolve(morseObj);
              }
          } catch (error) {
              reject("Error: Failed to parse morse JSON");
          }
      });
  }
  
  // Second function - toMorse
  function toMorse(morseJS) {
      return new Promise((resolve, reject) => {
          const userInput = prompt("Please enter a word or sentence:");
          
          if (!userInput) {
              reject("Error: No input provided");
              return;
          }
          
          const inputLower = userInput.toLowerCase();
          const morseTranslation = [];
          
          // Convert each character to morse
          for (let char of inputLower) {
              if (morseJS[char]) {
                  morseTranslation.push(morseJS[char]);
              } else {
                  reject(`Error: Character "${char}" doesn't exist in the morse dictionary`);
                  return;
              }
          }
          
          resolve(morseTranslation);
      });
  }
  
  // Third function - joinWords
  function joinWords(morseTranslation) {
      // Join with line breaks and display on DOM
      const morseString = morseTranslation.join('\n');
      
      // Create or update DOM element
      let morseElement = document.getElementById('morse-output');
      if (!morseElement) {
          morseElement = document.createElement('pre');
          morseElement.id = 'morse-output';
          document.body.appendChild(morseElement);
      }
      
      morseElement.textContent = morseString;
      console.log(morseString); // Also log to console for visibility
  }
  
  // Chain the three functions
  toJs()
      .then((morseObj) => toMorse(morseObj))
      .then((morseTranslation) => joinWords(morseTranslation))
      .catch((error) => {
          console.error(error);
          alert(error); // Also alert for user visibility
      });