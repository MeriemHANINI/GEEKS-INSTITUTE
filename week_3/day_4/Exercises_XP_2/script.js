const form = document.querySelector('form');
console.log(form);

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
console.log(fname, lname);

const inputsByName = document.getElementsByName('firstname');
console.log(inputsByName);

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevents page reload

  const firstName = fname.value.trim();
  const lastName = lname.value.trim();

  if (!firstName || !lastName) {
    alert("Please fill in both fields!");
    return;
  }

  const ul = document.querySelector('.usersAnswer');
  ul.innerHTML = ''; // clear previous results

  const li1 = document.createElement('li');
  li1.textContent = firstName;

  const li2 = document.createElement('li');
  li2.textContent = lastName;

  ul.append(li1, li2);
});
