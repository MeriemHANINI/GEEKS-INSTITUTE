const people = ["Greg", "Mary", "Devon", "James"];
people.shift();  
people[people.indexOf("James")] = "Jason";  
people.push("Meriem");  
console.log(people.indexOf("Mary"));  
const newPeople = people.slice(1, people.length - 1);  
console.log(newPeople);  
console.log(people.indexOf("Foo"));  
const last = people[people.length - 1];  
console.log(last);  
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
  }
  for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
      break;  
    }
  }
    

