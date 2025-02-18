const ContactUs = require('../models/contactModel');

const submitContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    console.log(req.body); // Log the incoming request for debugging
    const contactMessage = new ContactUs({
      name,
      email,
      subject,
      message,
    });

    await contactMessage.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact form:', error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { submitContactForm };
