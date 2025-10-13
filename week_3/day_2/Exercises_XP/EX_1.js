// Basic function
function displayNumbersDivisible() {
    let sum = 0;
    let numbers = [];
    
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            numbers.push(i);
            sum += i;
        }
    }
    
    console.log(numbers.join(' '));
    console.log('Sum : ' + sum);
}

// Bonus function with parameter
function displayNumbersDivisible(divisor) {
    let sum = 0;
    let numbers = [];
    
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            numbers.push(i);
            sum += i;
        }
    }
    
    console.log(numbers.join(' '));
    console.log('Sum : ' + sum);
}

// Test the functions
displayNumbersDivisible();
console.log('---');
displayNumbersDivisible(3);
console.log('---');
displayNumbersDivisible(45);