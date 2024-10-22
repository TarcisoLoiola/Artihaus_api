const mongoose = require('mongoose');

// Define the Review schema
const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Ensures that the review has a title
    trim: true, // Trims any extra whitespace
  },
  description: {
    type: String,
    required: true, // Ensures that the review has a description
    minlength: 10, // Description must be at least 10 characters long
  },
  rating: {
    type: Number,
    required: true, // Rating is mandatory
    min: 1, // Minimum rating value is 1
    max: 5, // Maximum rating value is 5
  },
  reviewerName: {
    type: String,
    required: true, // Name of the reviewer is required
    trim: true,
  },
  reviewerEmail: {
    type: String,
    required: true,
    lowercase: true, // Automatically convert to lowercase
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], // Simple email validation
  },
  projectType: {
    type: String,
    enum: ['hardscape', 'landscape', 'indoor', 'outdoor'], // Limit the project types to specific categories
    required: true,
  },
  dateOfReview: {
    type: Date,
    default: Date.now, // Automatically sets the date of the review
  },
  serviceDate: {
    type: Date, // When the service was completed
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the user who wrote the review
    ref: 'User', // This refers to the User model
  },
  images: [
    {
      type: String, // An array of URLs or file paths for images attached to the review
    },
  ],
});

// Export the model
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
