// Partie 1 - Modifier le tableau imbriqué
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
console.log("Original array:", array);

// Solution avec flat(2)
const modifiedArray = array.flat(2);
console.log("Modified array (flat 2):", modifiedArray);

// Solution en une ligne
const oneLineSolution = [[1],[2],[3],[[[4]]],[[[5]]]].flat(2);
console.log("One-line solution:", oneLineSolution);

// Partie 2 - Transformer le tableau de salutations
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log("\nOriginal greeting:", greeting);

const modifiedGreeting = greeting.map(innerArray => innerArray.join(" "));
console.log("Modified greeting:", modifiedGreeting);

// Partie 3 - Convertir en string
const greetingString = modifiedGreeting.join(" ");
console.log("Greeting as string:", greetingString);

// Solution complète en une ligne
const completeSolution = greeting.map(inner => inner.join(" ")).join(" ");
console.log("Complete one-line solution:", completeSolution);

// Partie 4 - Libérer le nombre piégé
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log("\nTrapped number:", trapped);

// Solution avec flat(Infinity)
const freedNumber = trapped.flat(Infinity);
console.log("Freed number (Infinity):", freedNumber);

// Solution avec flat(25) - assez profond pour 25 niveaux
const freedNumber25 = trapped.flat(25);
console.log("Freed number (depth 25):", freedNumber25);

// Vérification du niveau d'imbrication
console.log("Niveau d'imbrication original:", JSON.stringify(trapped).length / 2 - 1);

// Solution bonus toutes en une ligne
console.log("\n=== SOLUTIONS BONUS EN UNE LIGNE ===");
console.log("Part 1:", [[1],[2],[3],[[[4]]],[[[5]]]].flat(2));
console.log("Part 2:", [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]].map(arr => arr.join(" ")));
console.log("Part 3:", [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]].map(arr => arr.join(" ")).join(" "));
console.log("Part 4:", [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]].flat(Infinity));