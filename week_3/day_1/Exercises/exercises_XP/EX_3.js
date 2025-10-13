let userNumber;

do {
    userNumber = prompt("Please enter a number:");
    userNumber = Number(userNumber); // Convert to number
    console.log("Type of input:", typeof userNumber);
} while (userNumber < 10);

console.log("Final number:", userNumber);