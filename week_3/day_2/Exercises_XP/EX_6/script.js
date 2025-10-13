// exercise6.js

// Change the id attribute from navBar to socialNetworkNavigation
const navbar = document.getElementById('navBar');
navbar.setAttribute('id', 'socialNetworkNavigation');

// Create a new <li> element
const newListItem = document.createElement('li');

// Create a text node with "Logout"
const logoutText = document.createTextNode('Logout');

// Append the text node to the new list item
newListItem.appendChild(logoutText);

// Append the new list item to the unordered list
const ul = navbar.querySelector('ul');
ul.appendChild(newListItem);

// Retrieve the first and last <li> elements
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

// Display the text of each link
console.log('First link text:', firstLi.textContent);
console.log('Last link text:', lastLi.textContent);