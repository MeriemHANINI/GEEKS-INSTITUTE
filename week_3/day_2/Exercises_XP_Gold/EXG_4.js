function isOmnipresent(arr, value) {
    for (let sub of arr) {
      if (!sub.includes(value)) return false;
    }
    return true;
  }
  
  console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // true
  console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // false
  