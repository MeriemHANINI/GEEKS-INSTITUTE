function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

// Example
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
