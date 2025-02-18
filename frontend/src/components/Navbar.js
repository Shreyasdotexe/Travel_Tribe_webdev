import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <img src="/files/logo.png" className="logo" alt="Logo" />
      </div>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/register">Register Here</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
