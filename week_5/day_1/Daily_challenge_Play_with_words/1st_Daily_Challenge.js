// First function - makeAllCaps
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        // Check if all elements are strings
        const allStrings = words.every(word => typeof word === 'string');
        
        if (allStrings) {
            // Uppercase all words
            const uppercased = words.map(word => word.toUpperCase());
            resolve(uppercased);
        } else {
            reject("Error: Array contains non-string elements");
        }
    });
}

// Second function - sortWords
function sortWords(words) {
    return new Promise((resolve, reject) => {
        // Check if array length is bigger than 4
        if (words.length > 4) {
            // Sort alphabetically
            const sorted = words.sort();
            resolve(sorted);
        } else {
            reject("Error: Array length is not bigger than 4");
        }
    });
}

// Test cases
console.log("Test 1:");
makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));

console.log("\nTest 2:");
makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));

console.log("\nTest 3:");
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));