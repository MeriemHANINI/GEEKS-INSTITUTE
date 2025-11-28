// app.js
const express = require("express");
const app = express();

// Import router
const router = require("./routes/index");

// Mount router
app.use("/", router);

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
