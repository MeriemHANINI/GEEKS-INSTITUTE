function returnNumbers(str) {
    // Method 1: Using regular expression with match
    const numbers = str.match(/\d/g);
    return numbers ? numbers.join('') : '';
    
    // Method 2: Using replace to remove non-digits
    // return str.replace(/\D/g, '');
}

// Test the function
console.log(returnNumbers('k5k3q2g5z6x9bn')); // Output: 532569
console.log(returnNumbers('abc123def456'));    // Output: 123456
console.log(returnNumbers('no numbers here')); // Output: (empty string)

module.exports = returnNumbers;