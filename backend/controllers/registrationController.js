const Registration = require('../models/registrationModel');

const registerUser = async (req, res) => {
  try {
    const { name, email, phone, age, gender, departure, returnDate, destination, packageType } = req.body;

    // Validate departure and return dates
    const today = new Date().toISOString().split('T')[0];
    if (departure < today) {
      return res.status(400).json({ message: 'Departure date cannot be in the past' });
    }
    if (returnDate < departure) {
      return res.status(400).json({ message: 'Return date must be after the departure date' });
    }

    // Check if user is already registered
    const userExists = await Registration.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already registered' });
    }

    const registration = new Registration({
      name,
      email,
      phone,
      age,
      gender,
      departure,
      returnDate,
      destination,
      packageType,
    });

    const savedUser = await registration.save();
    res.status(201).json({ message: 'User registered successfully', registration: savedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser };
