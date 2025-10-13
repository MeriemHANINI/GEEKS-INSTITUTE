function biggestNumberInArray(arrayNumber) {
    let biggest = 0;
    
    for (let i = 0; i < arrayNumber.length; i++) {
        const element = arrayNumber[i];
        
        // Check if element is a number
        if (typeof element === 'number' && !isNaN(element)) {
            if (element > biggest) {
                biggest = element;
            }
        }
    }
    
    return biggest;
}

// Test
const array = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ['a', 3, 4, 2];
const array3 = [];

console.log(biggestNumberInArray(array)); // 100
console.log(biggestNumberInArray(array2)); // 4
console.log(biggestNumberInArray(array3)); // 0