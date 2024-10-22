// index.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const reviewRoutes = require('./routes/api/reviewRoutes')
const api = require('./routes')

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON bodies
app.use(express.json());
app.use(api);

//Connect to database
// Get the MongoDB URI from the environment variable
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
  });

// Test route


// Start server
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
