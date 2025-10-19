const chalk = require('chalk');

function displayColorfulMessage() {
    console.log(chalk.blue('This is a blue message!'));
    console.log(chalk.red.bold('This is a bold red message!'));
    console.log(chalk.green.italic('This is an italic green message!'));
    console.log(chalk.yellow.bgMagenta('This is yellow text on magenta background!'));
    console.log(chalk.rainbow('This is a rainbow message!'));
}

module.exports = { displayColorfulMessage };