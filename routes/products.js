const express = require('express');
const router = express.Router();
const path = require('path');

// Products Page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'products.html'));
});

module.exports = router;
