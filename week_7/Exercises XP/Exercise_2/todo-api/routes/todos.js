// routes/todos.js
const express = require("express");
const router = express.Router();

// In-memory database
let todos = [];
let nextId = 1;

// Get all todos
router.get("/", (req, res) => {
  res.json(todos);
});

// Add a new todo
router.post("/", (req, res) => {
  const todo = {
    id: nextId++,
    title: req.body.title,
    completed: false
  };
  todos.push(todo);
  res.status(201).json(todo);
});

// Update a todo by ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (!todo) return res.status(404).send("Todo not found");

  todo.title = req.body.title ?? todo.title;
  todo.completed = req.body.completed ?? todo.completed;

  res.json(todo);
});

// Delete a todo by ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.send("Todo deleted");
});

module.exports = router;
