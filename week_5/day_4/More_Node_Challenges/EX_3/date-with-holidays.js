const Holidays = require('date-holidays');

function timeUntilNextHoliday(country = 'US', state = '') {
    const hd = new Holidays(country, state);
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Get holidays for current and next year
    const holidays = hd.getHolidays(currentYear).concat(hd.getHolidays(currentYear + 1));
    
    // Find the next holiday
    let nextHoliday = null;
    for (const holiday of holidays) {
        const holidayDate = new Date(holiday.date);
        if (holidayDate > now) {
            nextHoliday = holiday;
            break;
        }
    }
    
    if (!nextHoliday) {
        return { error: "No upcoming holidays found" };
    }
    
    const holidayDate = new Date(nextHoliday.date);
    const timeDiff = holidayDate - now;
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    return {
        holidayName: nextHoliday.name,
        holidayDate: nextHoliday.date,
        days,
        hours,
        minutes,
        seconds,
        formatted: `The next holiday (${nextHoliday.name}) is in ${days} days and ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} hours`
    };
}

module.exports = { timeUntilNextHoliday };