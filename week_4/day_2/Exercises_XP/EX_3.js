// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// Output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
console.log([...country]);
// Output: ['U', 'S', 'A']

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// Output: [undefined, undefined] (array with two empty slots become undefined)