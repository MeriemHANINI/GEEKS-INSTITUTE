const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Part 1: Display colors with their position
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Part 2: Check if array contains "Violet"
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}