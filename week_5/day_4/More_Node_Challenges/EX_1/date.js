function timeUntilJanuaryFirst() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = currentYear + 1;
    const januaryFirst = new Date(nextYear, 0, 1); // January is month 0
    
    const timeDiff = januaryFirst - now;
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    return {
        days,
        hours,
        minutes,
        seconds,
        formatted: `the 1st January is in ${days} days and ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} hours`
    };
}

module.exports = { timeUntilJanuaryFirst };