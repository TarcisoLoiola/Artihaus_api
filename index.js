// index.js
const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes/reviewRoutes')

// Middleware to parse JSON bodies
app.use(express.json());
app.use(routes)

// Test route


// Start server
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
