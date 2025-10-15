// 🌟 Exercise 6 : Challenges

// -------------------------------------------
// Part 1: Evaluate these (True or False)
console.log("[2] == [2] :", [2] == [2]); // false
console.log("{} == {} :", {} == {}); // false

// -------------------------------------------
// Part 2: Objects and references
console.log("\nPart 2 - Object references:");

const object1 = { number: 5 }; 
const object2 = object1; // object2 référence le même objet que object1
const object3 = object2; // object3 référence aussi le même objet
const object4 = { number: 5 }; // un nouvel objet différent

// On modifie la propriété de object1
object1.number = 4;

console.log("object2.number:", object2.number); // 4 -> même référence que object1
console.log("object3.number:", object3.number); // 4 -> même référence aussi
console.log("object4.number:", object4.number); // 5 -> différent objet

// -------------------------------------------
// Part 3-5: Animal and Mammal classes
console.log("\nPart 3-5 - Animal and Mammal classes:");

// Classe Animal
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Classe Mammal qui hérite de Animal
class Mammal extends Animal {
  sound(soundMade) {
    return `${soundMade}! I'm a ${this.type}, my name is ${this.name}, and I'm ${this.color}.`;
  }
}

// Création d’un objet farmerCow
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');

// Affichage du son produit
console.log(farmerCow.sound('Moooo'));
