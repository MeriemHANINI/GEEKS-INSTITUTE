function isAnagram(str1, str2) {
    // Helper function to normalize strings
    const normalizeString = (str) => {
        return str
            .toLowerCase()           // Convert to lowercase
            .replace(/[^a-z0-9]/g, '') // Remove non-alphanumeric characters (including spaces)
            .split('')               // Convert to array of characters
            .sort()                  // Sort characters alphabetically
            .join('');               // Convert back to string
    };
    
    // Normalize both strings and compare
    return normalizeString(str1) === normalizeString(str2);
}

// Alternative version using character frequency counting
function isAnagramFrequency(str1, str2) {
    // Helper function to create character frequency map
    const createCharMap = (str) => {
        const charMap = {};
        const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        for (let char of normalizedStr) {
            charMap[char] = (charMap[char] || 0) + 1;
        }
        
        return charMap;
    };
    
    // Create frequency maps for both strings
    const charMap1 = createCharMap(str1);
    const charMap2 = createCharMap(str2);
    
    // Check if maps have same number of keys
    if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
        return false;
    }
    
    // Check if all character frequencies match
    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
    }
    
    return true;
}

// Test cases
console.log(isAnagram("Astronomer", "Moon starer")); // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rail safety", "fairy tales")); // true

// Test with the frequency version
console.log(isAnagramFrequency("Astronomer", "Moon starer")); // true
console.log(isAnagramFrequency("hello", "world")); // false