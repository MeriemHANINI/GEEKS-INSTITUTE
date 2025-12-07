// Define the structure of a Person object
type Person = {
    name: string;
    age: number;
};

// Create the function
function createPerson(name: string, age: number): Person {
    return { name, age };
}

// Test
const person = createPerson("Meriem", 23);
console.log(person);
