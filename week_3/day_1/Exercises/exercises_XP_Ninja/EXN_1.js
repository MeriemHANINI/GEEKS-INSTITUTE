// --- Step 1: Create the first person object ---
let person1 = {
    fullName: "Alice Johnson",
    mass: 68,      // in kg
    height: 1.65,  // in meters
    // Method to calculate BMI
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    }
};

// --- Step 2: Create the second person object ---
let person2 = {
    fullName: "Bob Smith",
    mass: 85,      // in kg
    height: 1.75,  // in meters
    // Method to calculate BMI
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    }
};

// --- Step 3: Function to compare BMIs ---
function compareBMI(p1, p2) {
    let bmi1 = p1.calculateBMI();
    let bmi2 = p2.calculateBMI();

    if (bmi1 > bmi2) {
        console.log(`${p1.fullName} has a higher BMI (${bmi1.toFixed(2)}) than ${p2.fullName} (${bmi2.toFixed(2)})`);
    } else if (bmi2 > bmi1) {
        console.log(`${p2.fullName} has a higher BMI (${bmi2.toFixed(2)}) than ${p1.fullName} (${bmi1.toFixed(2)})`);
    } else {
        console.log(`${p1.fullName} and ${p2.fullName} have the same BMI (${bmi1.toFixed(2)})`);
    }
}

// --- Step 4: Call the function to compare ---
compareBMI(person1, person2);
