// --- Step 1: Function to calculate average ---
function calculateAverage(gradesList) {
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }
    let average = sum / gradesList.length;
    return average;
}

// --- Step 2: Function to check pass/fail and print result ---
function findAvg(gradesList) {
    let avg = calculateAverage(gradesList);  // call the first function
    console.log(`The average is: ${avg.toFixed(2)}`);

    if (avg >= 65) {
        console.log("Congratulations! You passed the course.");
    } else {
        console.log("Sorry, you failed and must repeat the course.");
    }
}

// --- Step 3: Test the function ---
let grades1 = [70, 80, 65, 90];
let grades2 = [50, 60, 55, 40];

findAvg(grades1);  // should pass
findAvg(grades2);  // should fail
