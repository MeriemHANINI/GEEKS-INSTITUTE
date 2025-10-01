function createCalendar(year, month) {
    const weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
    const table = document.createElement("table");

    // Header row
    const headerRow = document.createElement("tr");
    weekdays.forEach(day => {
        const th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    const firstDay = new Date(year, month - 1, 1).getDay(); // Sunday = 0
    const lastDate = new Date(year, month, 0).getDate();

    let currentRow = document.createElement("tr");
    let dayCounter = 1;

    // Adjust for Monday first (0 = Monday)
    let emptyCells = (firstDay === 0) ? 6 : firstDay - 1;

    // Fill empty cells at start
    for (let i = 0; i < emptyCells; i++) {
        currentRow.appendChild(document.createElement("td"));
    }

    // Fill days
    for (let i = emptyCells; dayCounter <= lastDate; i++) {
        const td = document.createElement("td");
        td.textContent = dayCounter;
        currentRow.appendChild(td);
        if (i % 7 === 6) { // End of week
            table.appendChild(currentRow);
            currentRow = document.createElement("tr");
        }
        dayCounter++;
    }

    // Append last row if incomplete
    if (currentRow.children.length > 0) {
        table.appendChild(currentRow);
    }

    document.body.appendChild(table);
}

// Example: September 2012
createCalendar(2012, 9);
