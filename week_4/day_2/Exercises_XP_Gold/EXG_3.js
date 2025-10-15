const arrayNum = [1, 2, 4, 5, 8, 9];

// Code original avec console.log pour voir la valeur de i
const newArray = arrayNum.map((num, i) => {
    console.log(`Value: ${num}, Index: ${i}`);
    return num * 2;
});

console.log("Original array:", arrayNum);
console.log("New array:", newArray);

// Réponse à la question: Quelle est la valeur de i ?
console.log("\n=== RÉPONSE ===");
console.log("La valeur de 'i' représente l'index (position) de chaque élément dans le tableau.");
console.log("Pour arrayNum = [1, 2, 4, 5, 8, 9]:");
console.log("- i = 0 pour l'élément 1");
console.log("- i = 1 pour l'élément 2"); 
console.log("- i = 2 pour l'élément 4");
console.log("- i = 3 pour l'élément 5");
console.log("- i = 4 pour l'élément 8");
console.log("- i = 5 pour l'élément 9");

// Démonstration supplémentaire
console.log("\n=== DÉMONSTRATION COMPLÈTE ===");
arrayNum.forEach((num, index) => {
    console.log(`Élément ${num} est à l'index ${index}`);
});