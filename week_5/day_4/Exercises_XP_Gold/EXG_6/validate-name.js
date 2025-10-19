const prompt = require('prompt-sync')();

function validateFullName(name) {
    // Regular expression to validate:
    // ^[A-Z] - First letter uppercase
    // [a-zA-Z]+ - One or more letters
    // \s - Single space
    // [A-Z][a-zA-Z]+$ - Another word starting with uppercase
    const nameRegex = /^[A-Z][a-zA-Z]+\s[A-Z][a-zA-Z]+$/;
    
    return nameRegex.test(name);
}

function validateNameWithDetails(name) {
    // Check if contains only letters and one space
    if (!/^[a-zA-Z]+\s[a-zA-Z]+$/.test(name)) {
        return { isValid: false, message: 'Name should contain only letters and exactly one space' };
    }
    
    // Check if first letter of each name is uppercase
    const names = name.split(' ');
    if (names[0][0] !== names[0][0].toUpperCase() || names[1][0] !== names[1][0].toUpperCase()) {
        return { isValid: false, message: 'First letter of each name should be uppercase' };
    }
    
    return { isValid: true, message: 'Valid name format' };
}

// Interactive version
function promptAndValidateName() {
    const fullName = prompt('Please enter your full name (e.g., "John Doe"): ');
    
    const result = validateNameWithDetails(fullName);
    console.log(result.message);
    
    if (!result.isValid) {
        console.log('Please try again with the format: "FirstName LastName"');
    }
    
    return result.isValid;
}

// Test cases
console.log('Test cases:');
console.log('John Doe:', validateFullName('John Doe')); // true
console.log('john Doe:', validateFullName('john Doe')); // false
console.log('John doe:', validateFullName('John doe')); // false
console.log('John  Doe:', validateFullName('John  Doe')); // false
console.log('John123 Doe:', validateFullName('John123 Doe')); // false

// Uncomment to run interactive version
// promptAndValidateName();

module.exports = { validateFullName, validateNameWithDetails, promptAndValidateName };