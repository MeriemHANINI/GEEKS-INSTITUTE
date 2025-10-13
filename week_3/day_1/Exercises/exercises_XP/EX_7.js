const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Sort the names alphabetically
names.sort();

// Get first letter of each name and join them
let secretSociety = "";
for (let i = 0; i < names.length; i++) {
    secretSociety += names[i][0]; // Get first character of each name
}

console.log("Secret society name:", secretSociety); // "ABJKPS"