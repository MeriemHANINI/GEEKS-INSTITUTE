const letters = ['x', 'y', 'z', 'z'];

// Using a for loop
const resultWithLoop = {};
for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  if (resultWithLoop[letter]) {
    resultWithLoop[letter]++;
  } else {
    resultWithLoop[letter] = 1;
  }
}
console.log('With loop:', resultWithLoop);

// Using reduce() method
const resultWithReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log('With reduce:', resultWithReduce);