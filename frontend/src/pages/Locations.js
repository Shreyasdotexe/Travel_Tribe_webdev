import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Locations() {
  const query = new URLSearchParams(useLocation().search);
  const locationId = query.get('location');

  const locationsData = {
    kashmir: {
      name: 'Kashmir',
      description:
        'Heaven on Earth, one of the most beautiful travel destinations to visit in North India. The scenic landscapes, icy glaciers, pristine lakes, and lofty mountains make Kashmir a must-visit destination. Every season has its own charm, offering something unique all year round.',
      stars: 5,
      imgSrc: '/files/images/l1.jpg',
    },
    istanbul: {
      name: 'Istanbul',
      description:
        'Istanbul, with its unique historical and cultural riches, offers a mesmerizing blend of ancient and modern worlds. Spread over two continents, this vibrant city is admired for its charming nature, vibrant atmosphere, and multicultural heritage.',
      stars: 4.5,
      imgSrc: '/files/images/t2.jpg',
    },
    paris: {
      name: 'Paris',
      description:
        'Paris, known as the "City of Lights," is one of the most iconic and romantic cities in the world. From the Eiffel Tower to its charming boulevards and world-famous cuisine, Paris is a destination for every traveler seeking beauty and elegance.',
      stars: 4.5,
      imgSrc: '/files/images/t3.jpg',
    },
    bali: {
      name: 'Bali',
      description:
        'Bali is a tropical paradise, known for its lush landscapes, beautiful beaches, and spiritual retreats. From private villas to luxury resorts, Bali offers a wide variety of accommodations. Its rich culture and natural wonders attract millions of tourists every year.',
      stars: 4.5,
      imgSrc: '/files/images/t4.jpg',
    },
    dubai: {
      name: 'Dubai',
      description:
        'Dubai is a city of luxury and modern marvels. Known for its skyscrapers, including the Burj Khalifa, and opulent lifestyle, Dubai is a destination that offers everything from world-class shopping to cultural experiences in a cosmopolitan setting.',
      stars: 5,
      imgSrc: '/files/images/t5.jpg',
    },
    geneva: {
      name: 'Geneva',
      description:
        'Geneva is a charming lakeside city in Switzerland known for its breathtaking scenery, luxury, and international importance. From serene lakes and mountains to cultural attractions, Geneva is a must-visit for travelers seeking both nature and elegance.',
      stars: 4,
      imgSrc: '/files/images/t6.jpg',
    },
    portBlair: {
      name: 'Port Blair',
      description:
        'Port Blair, the capital of the Andaman & Nicobar Islands, is an exotic travel destination. Known for its beautiful beaches, coral reefs, and historical significance, Port Blair offers a perfect getaway for those looking to explore nature and history together.',
      stars: 4.5,
      imgSrc: '/files/images/t7.jpg',
    },
    rome: {
      name: 'Rome',
      description:
        'Rome, the Eternal City, is home to some of the world’s most famous landmarks, such as the Colosseum and Vatican City. Its ancient ruins, art, and architecture continue to inspire visitors. Rome is a city of history, art, and gastronomy like no other.',
      stars: 5,
      imgSrc: '/files/images/t8.jpg',
    },
  };

  const location = locationsData[locationId];

  if (!location) {
    return (
      <div className="no-location">
        <Navbar />
        <div className="location-body">
          <h2>No location found for: {locationId}</h2>
        </div>
        <Footer />
      </div>
    );
  }

  const renderStars = (count) => {
    const fullStars = Math.floor(count);
    const halfStar = count % 1 !== 0;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <i className="bx bxs-star" key={i}></i>
        ))}
        {halfStar && <i className="bx bxs-star-half"></i>}
      </>
    );
  };

  return (
    <div className="location-page">
      <Navbar />
      <div className="location-body">
        <div className="location-section">
          <div className="location-heading">
            <h1>{location.name}</h1>
          </div>
          <div className="stars">{renderStars(location.stars)}</div>
          <p>{location.description}</p>
          <div className="location-img">
            <img src={location.imgSrc} alt={location.name} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Locations;
