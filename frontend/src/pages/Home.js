import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      {/* Banner Section */}
      <div className="banner">
        <video src="/files/bgvid.mp4" type="video/mp4" autoPlay muted loop></video>
        <div className="content">
          <Navbar />
          <div className="title">
            <h1>TRAVEL-TRIBE</h1>
            <p>Plan your trip with us and travel around the world with the most affordable packages!</p>
            <Link to="/register" className="button">Register Now!</Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="container">
        <div className="text">
          <h2>We have the best services available for you!</h2>
        </div>
        <div className="rowitems">
          {[
            { img: "/files/images/1a.jpg", title: "Flight Services", description: "Arrival and Departure" },
            { img: "/files/images/2a.jpg", title: "Food Services", description: "Catering" },
            { img: "/files/images/3a.jpg", title: "Travel Services", description: "Pick-up/drop" },
            { img: "/files/images/4a.jpg", title: "Hotel Services", description: "Check-in/out" }
          ].map((service, index) => (
            <div className="container-box" key={index}>
              <div className="container-image">
                <img src={service.img} alt={service.title} />
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations" id="locations">
        <div className="package-title">
          <h2>Locations</h2>
        </div>
        <div className="location-content">
          {[
            { id: "kashmir", img: "/files/images/l1.jpg", country: "India", city: "Kashmir" },
            { id: "istanbul", img: "/files/images/l2.jpg", country: "Turkey", city: "Istanbul" },
            { id: "paris", img: "/files/images/l3.jpg", country: "France", city: "Paris" },
            { id: "bali", img: "/files/images/l4.jpg", country: "Indonesia", city: "Bali" },
            { id: "dubai", img: "/files/images/l5.jpg", country: "United Arab Emirates", city: "Dubai" },
            { id: "geneva", img: "/files/images/l6.jpg", country: "Switzerland", city: "Geneva" },
            { id: "port-blair", img: "/files/images/l7.jpg", country: "Andaman & Nicobar", city: "Port Blair" },
            { id: "rome", img: "/files/images/l8.jpg", country: "Italy", city: "Rome" }
          ].map((location) => (
            <Link to={`/locations?location=${location.id}`} key={location.id}>
              <div className="col-content">
                <img src={location.img} alt={location.city} />
                <h5>{location.country}</h5>
                <p>{location.city}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="package" id="package">
        <div className="package-title">
          <h2>Packages</h2>
        </div>
        <div className="package-content">
          {[
            { img: "/files/images/p1.jpg", price: "Rs.9,999/-", title: "Bronze", details: ["2 Star Hotel", "5 Nights Stay", "Free Photo Session", "Friendly Tour Guide", "24/7 Customer Help Center"] },
            { img: "/files/images/p2.jpg", price: "Rs.19,999/-", title: "Silver", details: ["3 Star Hotel", "7 Nights Stay", "Free Photo Session", "Friendly Tour Guide", "24/7 Customer Help Center"] },
            { img: "/files/images/p3.jpg", price: "Rs.29,999/-", title: "Gold", details: ["4 Star Hotel", "10 Nights Stay", "Breakfast and Dinner", "Free Photo Session", "Friendly Tour Guide", "24/7 Customer Help Center"] },
            { img: "/files/images/p4.jpg", price: "Rs.39,999/-", title: "Platinum", details: ["5 Star Hotel", "14 Nights Stay", "All Meals", "Bonfire", "Free Photo Session", "Friendly Tour Guide", "24/7 Customer Help Center"] }
          ].map((packageData, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={packageData.img} alt={`${packageData.title} Package`} />
                <h3>{packageData.price}</h3>
              </div>
              <div className="dest-content">
                <h4>{packageData.title}</h4>
                <ul className="pac-details">
                  {packageData.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
