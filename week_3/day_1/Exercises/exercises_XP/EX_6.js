const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

// Using for loop to build the sentence
let sentence = "";
const keys = Object.keys(details);

for (let i = 0; i < keys.length; i++) {
  sentence += details[keys[i]] + " ";
}

console.log(sentence.trim()); // "my name is Rudolf the reindeer"

// Alternative method using for...in
let sentence2 = "";
for (let key in details) {
  sentence2 += details[key] + " ";
}
console.log(sentence2.trim());