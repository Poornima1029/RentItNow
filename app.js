const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS, Images)
app.use(express.static('public'));

// Set up EJS for templating (optional, or you can use pure HTML)
app.set('view engine', 'ejs');

// Routes
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
