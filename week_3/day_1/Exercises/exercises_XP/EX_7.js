const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secretName = names
  .map(name => name[0])   // prendre la 1ère lettre
  .sort()                 // trier alphabétiquement
  .join("");              // joindre en une seule string

console.log(secretName);  // Résultat : ABJKPS
