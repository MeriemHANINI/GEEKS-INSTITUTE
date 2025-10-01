let number = prompt("Please enter a number:");

// ⚠️ prompt retourne toujours une chaîne (string)
// donc on convertit en nombre avec Number()
number = Number(number);

while (number < 10) {
  number = Number(prompt("Number is too small. Enter a new number:"));
}

console.log("Great! The number is " + number);



let number1;

do {
  number1 = Number(prompt("Please enter a number (must be >= 10):"));
} while (number1 < 10);

console.log("Great! The number is " + number1);
