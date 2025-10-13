function isBlank(str) {
  return str.trim() === '';
}

// Test cases
console.log(isBlank('')); // --> true
console.log(isBlank('abc')); // --> false
console.log(isBlank('   ')); // --> true (spaces only)