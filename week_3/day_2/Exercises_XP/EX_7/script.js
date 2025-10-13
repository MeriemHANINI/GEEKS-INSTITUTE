// exercise7.js

// Array of books
const allBooks = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://images.example.com/hobbit.jpg",
        alreadyRead: true
    },
    {
        title: "1984",
        author: "George Orwell",
        image: "https://images.example.com/1984.jpg",
        alreadyRead: false
    }
];

// Get the section element
const bookSection = document.querySelector('.listBooks');

// Render each book
allBooks.forEach(book => {
    // Create a div for the book
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    
    // Create book title and author
    const bookInfo = document.createElement('p');
    bookInfo.textContent = `${book.title} written by ${book.author}`;
    
    // Set color to red if already read
    if (book.alreadyRead) {
        bookInfo.classList.add('read');
    }
    
    // Create image element
    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.alt = `${book.title} cover`;
    bookImage.style.width = '100px';
    
    // Append elements to the book div
    bookDiv.appendChild(bookInfo);
    bookDiv.appendChild(bookImage);
    
    // Append book div to the section
    bookSection.appendChild(bookDiv);
});