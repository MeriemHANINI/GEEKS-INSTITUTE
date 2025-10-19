const chalk = require('chalk');

function greet(name = 'Ninja') {
    const greeting = chalk.hex('#FF6B6B').bold(`👋 Hello, ${name}!`) + 
                    chalk.hex('#4ECDC4').italic('\nWelcome to the Ninja Utility!') +
                    chalk.hex('#45B7D1').underline('\nMay your code be bug-free!');
    
    console.log(greeting);
    
    // Bonus: Create a colorful border
    const border = chalk.hex('#FFE66D')('═'.repeat(50));
    console.log(chalk.hex('#FFE66D')(`╔${border}╗`));
    console.log(chalk.hex('#FFE66D')(`╚${border}╝`));
}

module.exports = greet;