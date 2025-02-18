const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Name is required
    email: { type: String, required: true }, // Email is required
    subject: { type: String, required: true }, // Subject is required
    message: { type: String, required: true }, // Message is required
  },
  {
    timestamps: true, // Add createdAt and updatedAt timestamps
  }
);

module.exports = mongoose.model('ContactUs', contactUsSchema);
