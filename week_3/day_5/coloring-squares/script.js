const grid = document.getElementById('grid');
const colorPicker = document.getElementById('colorPicker');

let currentColor = colorPicker.value;
let isDrawing = false;

// Update selected color
colorPicker.addEventListener('input', e => {
  currentColor = e.target.value;
});

// Create the grid
function createGrid(size = 16) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
  }
}

createGrid();

// Drawing events
grid.addEventListener('mousedown', () => {
  isDrawing = true;
});

grid.addEventListener('mouseup', () => {
  isDrawing = false;
});

grid.addEventListener('mouseover', e => {
  if (isDrawing && e.target.classList.contains('square')) {
    e.target.style.backgroundColor = currentColor;
  }
});

grid.addEventListener('click', e => {
  if (e.target.classList.contains('square')) {
    e.target.style.backgroundColor = currentColor;
  }
});
