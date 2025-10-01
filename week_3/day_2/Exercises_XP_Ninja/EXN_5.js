function uniqueElements(arr) {
    const uniqueArr = [];
    for (let item of arr) {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item);
        }
    }
    return uniqueArr;
}

// Example
console.log(uniqueElements([1, 2, 3, 3, 3, 4, 5])); // [1, 2, 3, 4, 5]
