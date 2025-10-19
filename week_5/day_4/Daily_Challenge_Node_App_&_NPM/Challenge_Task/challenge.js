// Require all modules
const greeting = require('./greeting.js');
const colorfulMessage = require('./colorful-message.js');
const readFile = require('./read-file.js');

async function runChallenge() {
    console.log('=== NODE.JS DAILY CHALLENGE ===\n');
    
    // Task 1: Greet the user
    console.log('1. Basic Module System:');
    const greetingMessage = greeting.greet('Developer');
    console.log(greetingMessage);
    console.log('');
    
    // Task 2: Display colorful message
    console.log('2. NPM Module Integration:');
    colorfulMessage.displayColorfulMessage();
    console.log('');
    
    // Task 3: Read and display file content
    console.log('3. File Operations:');
    await readFile.readAndDisplayFile();
    
    console.log('=== CHALLENGE COMPLETED! ===');
}

// Run the challenge
runChallenge();