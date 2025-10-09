// 1️ Retrieve the h1 and log it
const h1 = document.querySelector('h1');
console.log(h1);

// 2️ Remove the last paragraph
const article = document.querySelector('article');
article.removeChild(article.lastElementChild);

// 3️ Change h2 background color when clicked
const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
  h2.style.backgroundColor = 'red';
});

// 4️ Hide h3 when clicked
const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
  h3.style.display = 'none';
});

// 5️ Button to make all paragraphs bold
const button = document.getElementById('bold-btn');
button.addEventListener('click', () => {
  document.querySelectorAll('p').forEach(p => p.style.fontWeight = 'bold');
});

// BONUS 1️ Random font size for h1 on hover
h1.addEventListener('mouseover', () => {
  const randomSize = Math.floor(Math.random() * 100) + 'px';
  h1.style.fontSize = randomSize;
});

// BONUS 2️ Fade out the 2nd paragraph on hover
const secondP = document.querySelectorAll('p')[1];
secondP.addEventListener('mouseover', () => {
  secondP.style.transition = 'opacity 1s';
  secondP.style.opacity = 0;
});
