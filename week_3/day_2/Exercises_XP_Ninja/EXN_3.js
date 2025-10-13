function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if string is the same forwards and backwards
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Test
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("bob")); // true
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("hello")); // false