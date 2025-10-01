// Function without parameter (for numbers divisible by 23)
function displayNumbersDivisible() {
    let sum = 0;
    let numbers = '';
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            numbers += i + ' ';
            sum += i;
        }
    }
    console.log(numbers.trim());
    console.log('Sum :', sum);
}

// Test the function
displayNumbersDivisible();

// Bonus: Function with a divisor parameter
function displayNumbersDivisible(divisor) {
    let sum = 0;
    let numbers = '';
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            numbers += i + ' ';
            sum += i;
        }
    }
    console.log(numbers.trim());
    console.log('Sum :', sum);
}

// Test the bonus function
displayNumbersDivisible(3);   // Numbers divisible by 3
displayNumbersDivisible(45);  // Numbers divisible by 45
