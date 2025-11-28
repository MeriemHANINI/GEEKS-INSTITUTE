const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Homepage!',
    timestamp: new Date().toISOString()
  });
});

// About route
router.get('/about', (req, res) => {
  res.json({
    message: 'About Us Page',
    description: 'This is a simple Express.js application demonstrating routes.',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;