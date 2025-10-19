const chalk = require('chalk');

console.log(chalk.blue('This is a blue message!'));
console.log(chalk.red.bold('This is a bold red message!'));
console.log(chalk.green.underline('This is a green underlined message!'));
console.log(chalk.yellow.bgBlue('This is yellow text on blue background!'));
console.log(chalk.hex('#FF5733').bold('This is a custom color message!'));

// Colorful greeting
console.log('\n' + chalk.rainbow('🌈 Welcome to Node.js with Chalk! 🌈'));

// Warning and error messages
console.log(chalk.yellow('⚠️  Warning: This is a warning'));
console.log(chalk.red('❌ Error: Something went wrong'));
console.log(chalk.green('✅ Success: Operation completed successfully'));