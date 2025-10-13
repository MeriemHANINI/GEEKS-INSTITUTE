function swapCase(str) {
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
      const char = str[i];
      
      if (char === char.toUpperCase()) {
          result += char.toLowerCase();
      } else {
          result += char.toUpperCase();
      }
  }
  
  return result;
}

// Test case
console.log(swapCase('The Quick Brown Fox')); // --> 'tHE qUICK bROWN fOX'