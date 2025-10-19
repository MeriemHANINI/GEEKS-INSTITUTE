const { format, addDays } = require('date-fns');

function performDateOperations() {
    const currentDate = new Date();
    console.log(`Current date: ${format(currentDate, 'yyyy-MM-dd HH:mm:ss')}`);
    
    const futureDate = addDays(currentDate, 5);
    const formattedDate = format(futureDate, 'MMMM do, yyyy');
    
    console.log(`Date after adding 5 days: ${formattedDate}`);
    return formattedDate;
}

module.exports = performDateOperations;