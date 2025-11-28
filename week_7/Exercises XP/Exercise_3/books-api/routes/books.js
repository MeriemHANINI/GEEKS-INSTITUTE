// routes/books.js
const express = require("express");
const router = express.Router();

let books = [];
let nextId = 1;

// Get all books
router.get("/", (req, res) => {
  res.json(books);
});

// Add a new book
router.post("/", (req, res) => {
  const book = {
    id: nextId++,
    title: req.body.title,
    author: req.body.author
  };
  books.push(book);
  res.status(201).json(book);
});

// Update a book
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) return res.status(404).send("Book not found");

  book.title = req.body.title ?? book.title;
  book.author = req.body.author ?? book.author;

  res.json(book);
});

// Delete a book
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(b => b.id !== id);
  res.send("Book deleted");
});

module.exports = router;
