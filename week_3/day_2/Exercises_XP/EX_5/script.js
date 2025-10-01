// 1. Retrieve the div and console.log it
const containerDiv = document.getElementById("container");
console.log(containerDiv);

// 2. Change "Pete" to "Richard"
const allLis = document.querySelectorAll("ul.list li");
allLis.forEach(li => {
    if (li.textContent === "Pete") {
        li.textContent = "Richard";
        li.style.border = "1px solid black"; // add border as requested later
    }
});

// 3. Delete the second <li> of the second <ul>
const secondUl = document.querySelectorAll("ul.list")[1];
secondUl.removeChild(secondUl.children[1]); // deletes "Sarah"

// 4. Change the first <li> of each <ul> to your name
const myName = "Meriem";
document.querySelectorAll("ul.list").forEach(ul => {
    ul.children[0].textContent = myName;
});

// 5. Add class student_list to both <ul>'s
document.querySelectorAll("ul.list").forEach(ul => {
    ul.classList.add("student_list");
});

// Add classes university and attendance to the first <ul>
const firstUl = document.querySelector("ul.list");
firstUl.classList.add("university", "attendance");

// 6. Style the div
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

// 7. Do not display <li> that contains "Dan"
allLis.forEach(li => {
    if (li.textContent === "Dan") {
        li.style.display = "none";
    }
});

// 8. Change font size of the whole body
document.body.style.fontSize = "18px";

// 9. Bonus: Alert if background color is light blue
if (containerDiv.style.backgroundColor === "lightblue") {
    // Get users from div text content
    const usersText = containerDiv.textContent.replace("Users: ", "");
    const users = usersText.split(", ").slice(0,2); // first two users in div
    alert(`Hello ${users[0]} and ${users[1]}`);
}
