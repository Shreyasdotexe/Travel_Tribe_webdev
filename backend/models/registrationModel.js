const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  departure: { type: String, required: true },
  returnDate: { type: String, required: true },
  destination: { type: String, required: true },
  packageType: { type: String, required: true },
});

module.exports = mongoose.model('Registration', registrationSchema);
