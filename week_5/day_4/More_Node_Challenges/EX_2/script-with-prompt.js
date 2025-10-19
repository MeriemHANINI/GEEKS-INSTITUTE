const { minutesLived, promptForBirthdate } = require('./date-with-prompt.js');

const birthdate = promptForBirthdate();
const minutes = minutesLived(birthdate);
console.log(`You have lived approximately ${minutes} minutes in your life.`);