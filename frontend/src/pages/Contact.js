import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5002/api/contact', formData);
      alert('Message Sent Successfully');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert('Message Failed to Send');
      console.error('Error sending message:', error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-body">
        <div className="contact-section">
          <div className="contact-form">
            <h1>
              Contact <span>Us</span>
            </h1>
            <p>We are always out there to help you! Fill out the form below and get a reply from us within 2 business days.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="What brings you here?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
