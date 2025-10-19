const readlineSync = require('readline-sync');

function minutesLived(birthdate) {
    const birth = new Date(birthdate);
    const now = new Date();
    
    const timeLived = now - birth;
    const minutesLived = Math.floor(timeLived / (1000 * 60));
    
    return minutesLived;
}

function promptForBirthdate() {
    console.log("Please enter your birthdate (YYYY-MM-DD format):");
    const birthdate = readlineSync.question('> ');
    return birthdate;
}

module.exports = { minutesLived, promptForBirthdate };