const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays

// 1. Remove "Greg" from the people array
people.shift();
console.log("After removing Greg:", people);

// 2. Replace "James" to "Jason"
const jamesIndex = people.indexOf("James");
if (jamesIndex !== -1) {
    people[jamesIndex] = "Jason";
}
console.log("After replacing James with Jason:", people);

// 3. Add your name to the end of the people array
people.push("YourName");
console.log("After adding your name:", people);

// 4. Console.log Mary's index
console.log("Mary's index:", people.indexOf("Mary"));

// 5. Make a copy of the people array using slice (excluding Mary and your name)
const peopleCopy = people.slice(1, 3); // Gets elements from index 1 to 2 (Devon, Jason)
console.log("Copy without Mary or your name:", peopleCopy);

// 6. Find index of "Foo"
console.log("Index of 'Foo':", people.indexOf("Foo")); // Returns -1 because "Foo" doesn't exist in the array

// 7. Create variable called last with the last element
const last = people[people.length - 1];
console.log("Last element:", last);

// Part II - Loops

// 8. Loop through array and console.log each person
console.log("All people:");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 9. Loop through array and exit after "Devon"
console.log("People until Devon:");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}