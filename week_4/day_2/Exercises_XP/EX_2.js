const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    const position = index + 1;
    // Determine the correct ordinal suffix
    const suffix = (position > 3 && position < 21) ? "th" : 
                   (ordinal[position] ? ordinal[position] : "th");
    
    console.log(`${position}${suffix} choice is ${color}.`);
});
