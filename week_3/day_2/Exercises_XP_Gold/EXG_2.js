function abbrevName(fullName) {
  const names = fullName.split(' ');
  if (names.length < 2) return fullName;
  
  const firstName = names[0];
  const lastNameInitial = names[names.length - 1].charAt(0) + '.';
  
  return `${firstName} ${lastNameInitial}`;
}

// Test cases
console.log(abbrevName("Robin Singh")); // --> "Robin S."
console.log(abbrevName("John Michael Doe")); // --> "John D."