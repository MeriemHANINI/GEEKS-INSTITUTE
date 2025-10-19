function minutesLived(birthdate) {
    const birth = new Date(birthdate);
    const now = new Date();
    
    const timeLived = now - birth;
    const minutesLived = Math.floor(timeLived / (1000 * 60));
    
    return minutesLived;
}

// Hardcoded birthdate example
const hardcodedBirthdate = '1990-05-15';
console.log(`For birthdate ${hardcodedBirthdate}: ${minutesLived(hardcodedBirthdate)} minutes lived`);

module.exports = { minutesLived };