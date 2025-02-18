import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Packages() {
  return (
    <div>
      <Navbar />
      <div className="package-page">
        <div className="package-header">
          <h2>Our Exclusive Packages</h2>
          <p>Choose from a wide range of travel experiences designed for you!</p>
        </div>
        <div className="package-content">
          {/* Bronze Package */}
          <div className="package-box">
            <div className="image-container">
              <img src="/files/images/p1.jpg" alt="Bronze Package" />
            </div>
            <h3>Bronze</h3>
            <p className="price">Rs. 9,999/-</p>
            <ul className="details">
              <li>2 Star Hotel</li>
              <li>5 Nights Stay</li>
              <li>Free Photo Session</li>
              <li>Friendly Tour Guide</li>
              <li>24/7 Customer Help Center</li>
            </ul>
          </div>

          {/* Silver Package */}
          <div className="package-box">
            <div className="image-container">
              <img src="/files/images/p2.jpg" alt="Silver Package" />
            </div>
            <h3>Silver</h3>
            <p className="price">Rs. 19,999/-</p>
            <ul className="details">
              <li>3 Star Hotel</li>
              <li>7 Nights Stay</li>
              <li>Free Photo Session</li>
              <li>Friendly Tour Guide</li>
              <li>24/7 Customer Help Center</li>
            </ul>
          </div>

          {/* Gold Package */}
          <div className="package-box">
            <div className="image-container">
              <img src="/files/images/p3.jpg" alt="Gold Package" />
            </div>
            <h3>Gold</h3>
            <p className="price">Rs. 29,999/-</p>
            <ul className="details">
              <li>4 Star Hotel</li>
              <li>10 Nights Stay</li>
              <li>Breakfast and Dinner</li>
              <li>Free Photo Session</li>
              <li>Friendly Tour Guide</li>
              <li>24/7 Customer Help Center</li>
            </ul>
          </div>

          {/* Platinum Package */}
          <div className="package-box">
            <div className="image-container">
              <img src="/files/images/p4.jpg" alt="Platinum Package" />
            </div>
            <h3>Platinum</h3>
            <p className="price">Rs. 39,999/-</p>
            <ul className="details">
              <li>5 Star Hotel</li>
              <li>14 Nights Stay</li>
              <li>All Meals Included</li>
              <li>Bonfire</li>
              <li>Free Photo Session</li>
              <li>Friendly Tour Guide</li>
              <li>24/7 Customer Help Center</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Packages;
