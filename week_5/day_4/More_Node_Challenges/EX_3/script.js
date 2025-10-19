const { timeUntilNextHoliday } = require('./date.js');

const result = timeUntilNextHoliday();
if (result.error) {
    console.log(result.error);
} else {
    console.log(result.formatted);
}