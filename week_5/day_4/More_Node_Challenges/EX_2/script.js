const { minutesLived } = require('./date.js');

// Using hardcoded birthdate
const birthdate = '1990-05-15';
const minutes = minutesLived(birthdate);
console.log(`You have lived approximately ${minutes} minutes in your life.`);