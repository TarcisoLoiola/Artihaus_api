const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Patio', 'Retaining Wall', 'Walkway', 'Outdoor Kitchen', 'Fire Pit', 'Driveway', 'Water Features']
  },
  serviceImage: {
    type: String, // URL or path to the image
    required: true
  },
  serviceImages: [{
    type: String // Array of image URLs or paths for multiple images
  }],
  description: {
    type: String,
    required: true,
    trim: true
  },
  pricing: {
    type: String // You can make this a Number if needed
  },
  materialsUsed: [{
    type: String // e.g., ["Brick", "Concrete", "Stone"]
  }],
  duration: {
    type: String // e.g., "2-4 weeks"
  },
  serviceArea: {
    type: String // e.g., "Atlanta, GA"
  },
  customerReviews: [{
    customerName: String,
    reviewText: String,
    rating: Number
  }],
  features: [{
    type: String // e.g., ["Custom design", "Low maintenance", "Eco-friendly"]
  }]
}, {
  timestamps: true
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
