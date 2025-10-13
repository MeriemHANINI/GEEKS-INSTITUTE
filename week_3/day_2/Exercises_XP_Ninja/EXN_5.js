function getUniqueElements(arr) {
    // Method 1: Using Set (simplest)
    return [...new Set(arr)];
    
    // Method 2: Using filter (alternative)
    // return arr.filter((value, index, self) => self.indexOf(value) === index);
}

// Test
const list = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(getUniqueElements(list)); // [1, 2, 3, 4, 5]