function capitalize(str) {
    let evenCapitalized = '';
    let oddCapitalized = '';
    
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            // Even index - capitalize
            evenCapitalized += str[i].toUpperCase();
            oddCapitalized += str[i];
        } else {
            // Odd index - keep lowercase for evenCapitalized, capitalize for oddCapitalized
            evenCapitalized += str[i];
            oddCapitalized += str[i].toUpperCase();
        }
    }
    
    return [evenCapitalized, oddCapitalized];
}

// Test
console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']