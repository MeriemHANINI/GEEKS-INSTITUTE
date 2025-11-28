const express = require('express');
const app = express();
const port = 3000;

// Import routes
const indexRouter = require('./routes/index');

// Use routes
app.use('/', indexRouter);

// Start server
app.listen(port, () => {
  console.log(`Exercise 1 server running at http://localhost:${port}`);
});