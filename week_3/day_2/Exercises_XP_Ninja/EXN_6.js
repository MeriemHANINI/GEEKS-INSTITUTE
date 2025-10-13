function createCalendar(year, month) {
    // Create table element
    const table = document.createElement('table');
    
    // Create header row with weekday names
    const headerRow = document.createElement('tr');
    const weekdays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    
    weekdays.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    
    // Get first day of month and number of days in month
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    
    // Calculate day of week (0 = Sunday, 1 = Monday, etc.)
    let startDay = firstDay.getDay();
    // Convert to Monday as first day (0 = Monday, 6 = Sunday)
    startDay = startDay === 0 ? 6 : startDay - 1;
    
    // Create calendar rows
    let currentRow = document.createElement('tr');
    let dayCount = 1;
    
    // Add empty cells for days before the first day of month
    for (let i = 0; i < startDay; i++) {
        const emptyCell = document.createElement('td');
        emptyCell.textContent = '.';
        currentRow.appendChild(emptyCell);
    }
    
    // Add days of the month
    for (let i = startDay; i < 7; i++) {
        if (dayCount <= daysInMonth) {
            const dayCell = document.createElement('td');
            dayCell.textContent = dayCount;
            currentRow.appendChild(dayCell);
            dayCount++;
        } else {
            const emptyCell = document.createElement('td');
            emptyCell.textContent = '.';
            currentRow.appendChild(emptyCell);
        }
    }
    table.appendChild(currentRow);
    
    // Continue with remaining weeks
    while (dayCount <= daysInMonth) {
        currentRow = document.createElement('tr');
        
        for (let i = 0; i < 7 && dayCount <= daysInMonth; i++) {
            const dayCell = document.createElement('td');
            dayCell.textContent = dayCount;
            currentRow.appendChild(dayCell);
            dayCount++;
        }
        
        // Fill remaining cells in last row with dots if needed
        while (currentRow.children.length < 7) {
            const emptyCell = document.createElement('td');
            emptyCell.textContent = '.';
            currentRow.appendChild(emptyCell);
        }
        
        table.appendChild(currentRow);
    }
    
    // Add calendar to the page
    document.body.appendChild(table);
    
    return table;
}

// Test - call this function when you want to create a calendar
// createCalendar(2012, 9); // September 2012