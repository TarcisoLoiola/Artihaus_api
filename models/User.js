const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Ensures that the 'name' field is mandatory
    trim: true, // Trims whitespace from the input
    minlength: 2, // Name must be at least 2 characters long
  },
  email: {
    type: String,
    required: true,
    unique: true, // Email must be unique across all users
    lowercase: true, // Automatically converts email to lowercase
    trim: true, // Trims whitespace
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], // Simple regex for email validation
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Minimum password length
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // Restricts the value of 'role' to either 'user' or 'admin'
    default: 'user', // Sets a default value
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the current date when the document is created
  },
  profileImage: {
    type: String, // Could store a URL or file path to the user's profile image
  },
  isActive: {
    type: Boolean,
    default: true, // Assumes users are active by default
  },
});

// Export the model
const User = mongoose.model('User', userSchema);

module.exports = User;

