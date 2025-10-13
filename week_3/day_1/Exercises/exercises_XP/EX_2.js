// Create array of favorite colors
const colors = ["blue", "red", "green", "purple", "orange"];

// Loop through and console.log choices
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Bonus with suffixes
const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}