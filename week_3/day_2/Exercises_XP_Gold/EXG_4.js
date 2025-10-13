function isOmnipresent(arr, value) {
  // Check if value exists in every subarray
  for (let subArray of arr) {
      if (!subArray.includes(value)) {
          return false;
      }
  }
  return true;
}

// Test cases
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // ➞ true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // ➞ false
console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 3)); // ➞ true