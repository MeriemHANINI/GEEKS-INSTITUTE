function abbrevName(name) {
    let parts = name.split(' ');
    if (parts.length === 1) return name;
    return parts[0] + ' ' + parts[1][0] + '.';
  }
  
  console.log(abbrevName("Robin Singh")); // "Robin S."
  console.log(abbrevName("Alice"));       // "Alice"
  