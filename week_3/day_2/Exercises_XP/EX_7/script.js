// 1. Créer un tableau de livres
const allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
        alreadyRead: false
    }
];

// 2. Sélectionner la section
const section = document.querySelector('.listBooks');

// 3. Parcourir le tableau et créer le DOM
allBooks.forEach(book => {
    // Créer un div pour chaque livre
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    // Créer le titre et l'auteur
    const bookInfo = document.createElement('p');
    bookInfo.textContent = `${book.title} written by ${book.author}`;

    // Changer la couleur si déjà lu
    if (book.alreadyRead) {
        bookInfo.style.color = 'red';
    }

    // Créer l'image
    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.alt = `${book.title} cover`;

    // Ajouter les éléments au div
    bookDiv.appendChild(bookInfo);
    bookDiv.appendChild(bookImage);

    // Ajouter le div à la section
    section.appendChild(bookDiv);
});
