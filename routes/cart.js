const express = require('express');
const router = express.Router();
const path = require('path');

// Cart Page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'cart.html'));
});

module.exports = router;
