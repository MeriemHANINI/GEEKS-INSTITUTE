const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedString = epic.reduce((accumulator, currentWord) => {
    return accumulator + ' ' + currentWord;
});

console.log(combinedString);
// Output: "a long time ago in a galaxy far far away"