function biggestNumberInArray(array) {
    let max = 0;
    for (let item of array) {
        if (typeof item === "number" && item > max) {
            max = item;
        }
    }
    return max;
}

// Examples
console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); // 100
console.log(biggestNumberInArray(['a', 3, 4, 2])); // 4
console.log(biggestNumberInArray([])); // 0
