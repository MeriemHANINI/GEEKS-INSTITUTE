// Function declaration
function kgToGramsDeclaration(kg) {
    return kg * 1000;
}
console.log(kgToGramsDeclaration(2)); // 2000

// Function expression
const kgToGramsExpression = function(kg) {
    return kg * 1000;
}
console.log(kgToGramsExpression(1.5)); // 1500

// Difference: Function declarations are hoisted, function expressions are not

// Arrow function (one line)
const kgToGramsArrow = kg => kg * 1000;
console.log(kgToGramsArrow(3)); // 3000