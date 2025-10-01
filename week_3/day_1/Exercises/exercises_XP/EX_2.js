const colors = ["Blue", "Red", "Green", "Black", "White"];
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
  }
  const suffixes = ["st", "nd", "rd", "th", "th"];

  for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
  }
  function getSuffix(n) {
    if (n === 1) return "st";
    if (n === 2) return "nd";
    if (n === 3) return "rd";
    return "th";
  }
  
  for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${getSuffix(i + 1)} choice is ${colors[i]}`);
  }
      