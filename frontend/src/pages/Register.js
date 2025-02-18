import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    departure: '',
    returnDate: '',
    destination: '',
    packageType: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for dates
    const today = new Date().toISOString().split('T')[0];
    if (formData.departure < today) {
      alert('Departure date cannot be in the past');
      return;
    }

    if (formData.returnDate < formData.departure) {
      alert('Return date must be after the departure date');
      return;
    }

    try {
      await axios.post('http://localhost:5002/api/registrations/register', formData);
      alert('Registration Successful');
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        departure: '',
        returnDate: '',
        destination: '',
        packageType: '',
        terms: false
      });
    } catch (error) {
      alert(error.response?.data?.message || 'Registration Failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-body">
        <div className="registration">
          <div className="register-form">
            <h1>Register <span>Here</span></h1>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
              <input type="text" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
              <h4>Gender</h4>
              <label><input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male</label>
              <label><input type="radio" name="gender" value="Female" onChange={handleChange} required /> Female</label>
              <h4>Departure</h4>
              <input type="date" name="departure" value={formData.departure} onChange={handleChange} required />
              <h4>Return</h4>
              <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} required />

              <h4>Travel Destination</h4>
              <select name="destination" value={formData.destination} onChange={handleChange} required>
                <option value="">Select Destination</option>
                <option value="Kashmir">Kashmir</option>
                <option value="Istanbul">Istanbul</option>
                <option value="Paris">Paris</option>
                <option value="Bali">Bali</option>
                <option value="Dubai">Dubai</option>
                <option value="Geneva">Geneva</option>
                <option value="Port Blair">Port Blair</option>
                <option value="Rome">Rome</option>
              </select>

              <h4>Package</h4>
              <select name="packageType" value={formData.packageType} onChange={handleChange} required>
                <option value="">Select Package</option>
                <option value="Bronze">Bronze</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
              </select>

              <label>
                <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required /> I accept the Terms & Conditions
              </label>
              <button type="submit" className="submitbtn">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
