// Create family object
const family = {
  father: "John",
  mother: "Jane",
  son: "Mike",
  daughter: "Emily",
  pet: "Rex"
};

// Console.log keys using for...in
console.log("Keys of family object:");
for (let key in family) {
  console.log(key);
}

// Console.log values using for...in
console.log("Values of family object:");
for (let key in family) {
  console.log(family[key]);
}