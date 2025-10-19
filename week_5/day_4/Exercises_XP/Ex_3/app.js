const { readFile, writeFile } = require('./fileManager.js');

// Read from Hello World.txt
const content = readFile('Hello World.txt');
console.log('File content:', content);

// Write to Bye World.txt
const result = writeFile('Bye World.txt', 'Writing to the file');
console.log(result);