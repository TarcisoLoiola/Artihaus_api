// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();

// Sample in-memory reviews (you can later replace this with database calls)
const reviews = [];

// Create a new review
router.post('/', (req, res) => {
  const newReview = req.body;
  reviews.push(newReview);
  res.status(201).json({ message: 'Review created', review: newReview });
});

// Get all reviews
router.get('/', (req, res) => {
  res.json(reviews);
});

// Get a single review by ID
router.get('/:id', (req, res) => {
  const reviewId = req.params.id;
  const review = reviews.find((r) => r.id === reviewId);
  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ message: 'Review not found' });
  }
});

// Update a review by ID
router.put('/:id', (req, res) => {
  const reviewId = req.params.id;
  const updatedReview = req.body;
  const reviewIndex = reviews.findIndex((r) => r.id === reviewId);
  if (reviewIndex !== -1) {
    reviews[reviewIndex] = updatedReview;
    res.json({ message: 'Review updated', review: updatedReview });
  } else {
    res.status(404).json({ message: 'Review not found' });
  }
});

// Delete a review by ID
router.delete('/:id', (req, res) => {
  const reviewId = req.params.id;
  const reviewIndex = reviews.findIndex((r) => r.id === reviewId);
  if (reviewIndex !== -1) {
    reviews.splice(reviewIndex, 1);
    res.json({ message: 'Review deleted' });
  } else {
    res.status(404).json({ message: 'Review not found' });
  }
});

module.exports = router;
