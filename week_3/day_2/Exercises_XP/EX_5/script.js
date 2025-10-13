// exercise5.js

// Retrieve the div and console.log it
const container = document.getElementById('container');
console.log(container);

// Change the name "Pete" to "Richard"
const lists = document.querySelectorAll('.list');
lists[0].children[1].textContent = 'Richard';

// Delete the second <li> of the second <ul>
lists[1].removeChild(lists[1].children[1]);

// Change the name of the first <li> of each <ul> to your name
lists.forEach(list => {
    list.children[0].textContent = 'YourName'; // Replace with your actual name
});

// Add a class called student_list to both of the <ul>'s
lists.forEach(list => {
    list.classList.add('student_list');
});

// Add the classes university and attendance to the first <ul>
lists[0].classList.add('university', 'attendance');

// Add a "light blue" background color and some padding to the <div>
container.style.backgroundColor = 'lightblue';
container.style.padding = '10px';

// Do not display the <li> that contains the text node "Dan"
lists[1].children[2].style.display = 'none';

// Add a border to the <li> that contains the text node "Richard"
lists[0].children[1].style.border = '1px solid black';

// Change the font size of the whole body
document.body.style.fontSize = '18px';

// Bonus: If the background color of the div is "light blue", alert "Hello x and y"
if (container.style.backgroundColor === 'lightblue') {
    const firstUser = lists[0].children[0].textContent;
    const secondUser = lists[0].children[1].textContent;
    alert(`Hello ${firstUser} and ${secondUser}`);
}