import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="foot">
        <div className="footer-content">
          <div className="footlinks">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register Here</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="contact" id="contact">
            <h4>Contact Us</h4>
            <ul>
              <li><strong>Email:</strong> traveltribe@example.com</li>
              <li><strong>Call:</strong> +91 1234567890</li>
              <li><strong>Address:</strong> XYZ Road, India</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="end">© 2024 Travel Tribe</p>
    </footer>
  );
}

export default Footer;
