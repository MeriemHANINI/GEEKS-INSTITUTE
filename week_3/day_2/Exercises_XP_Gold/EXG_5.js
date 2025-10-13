let table = document.body.firstElementChild;
const rows = table.rows;
const size = rows.length;

// Color main diagonal (top-left to bottom-right)
for (let i = 0; i < size; i++) {
    rows[i].cells[i].classList.add('red-cell');
}

// Color secondary diagonal (top-right to bottom-left)
for (let i = 0; i < size; i++) {
    rows[i].cells[size - 1 - i].classList.add('red-cell');
}