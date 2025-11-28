// app.js
const express = require("express");
const app = express();

app.use(express.json());

// Import router
const todoRoutes = require("./routes/todos");

// Mount router
app.use("/todos", todoRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
