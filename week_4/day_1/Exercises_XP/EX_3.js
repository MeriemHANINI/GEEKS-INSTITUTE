const isString = (value) => typeof value === 'string';

// Test cases
console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false
console.log(isString(123)); // false
console.log(isString(null)); // false