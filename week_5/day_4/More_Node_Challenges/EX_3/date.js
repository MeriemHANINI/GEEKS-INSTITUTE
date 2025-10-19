function timeUntilNextHoliday() {
    const now = new Date();
    
    // Hardcoded holidays for the current year
    const holidays = [
        { name: "New Year's Day", date: new Date(now.getFullYear(), 0, 1) },
        { name: "Valentine's Day", date: new Date(now.getFullYear(), 1, 14) },
        { name: "Independence Day", date: new Date(now.getFullYear(), 6, 4) },
        { name: "Halloween", date: new Date(now.getFullYear(), 9, 31) },
        { name: "Christmas", date: new Date(now.getFullYear(), 11, 25) },
        { name: "New Year's Day Next Year", date: new Date(now.getFullYear() + 1, 0, 1) }
    ];
    
    // Find the next holiday
    let nextHoliday = null;
    for (const holiday of holidays) {
        if (holiday.date > now) {
            nextHoliday = holiday;
            break;
        }
    }
    
    if (!nextHoliday) {
        return { error: "No upcoming holidays found" };
    }
    
    const timeDiff = nextHoliday.date - now;
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    return {
        holidayName: nextHoliday.name,
        days,
        hours,
        minutes,
        seconds,
        formatted: `The next holiday (${nextHoliday.name}) is in ${days} days and ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} hours`
    };
}

module.exports = { timeUntilNextHoliday };