// 1. Change the id from navBar to socialNetworkNavigation
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

// 2. Add a new <li> with text "Logout"
const newLi = document.createElement("li");       // create <li>
const textNode = document.createTextNode("Logout"); // create text node
newLi.appendChild(textNode);                      // append text to <li>

// Append the new <li> to the <ul>
const ul = navDiv.querySelector("ul");
ul.appendChild(newLi);

// 3. Use firstElementChild and lastElementChild to retrieve <li> elements
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

// Display the text of each link
console.log("First item:", firstLi.textContent);
console.log("Last item:", lastLi.textContent);
