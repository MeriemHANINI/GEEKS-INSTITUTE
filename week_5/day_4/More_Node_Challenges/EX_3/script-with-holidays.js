const { timeUntilNextHoliday } = require('./date-with-holidays.js');

const result = timeUntilNextHoliday('US');
if (result.error) {
    console.log(result.error);
} else {
    console.log(result.formatted);
}