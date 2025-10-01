// Step 1: Prompt user for words
let input = prompt("Enter words separated by commas:");

// Step 2: Convert input into array and trim spaces
let words = input.split(",").map(word => word.trim());

// Step 3: Find the length of the longest word
let maxLength = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].length > maxLength) {
    maxLength = words[i].length;
  }
}

// Step 4: Create top border
let border = "*".repeat(maxLength + 4);
console.log(border);

// Step 5: Print each word in the frame
for (let i = 0; i < words.length; i++) {
  let padding = " ".repeat(maxLength - words[i].length);
  console.log(`* ${words[i]}${padding} *`);
}

// Step 6: Print bottom border
console.log(border);
