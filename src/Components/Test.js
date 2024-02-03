import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Main.css';
import { Link, useNavigate } from 'react-router-dom';
import carlogo from './Assets/carlogo.jpg';
import About from './About';
import Contact from './Contact';

const Main = () => {
  const [cars, setCars] = useState([]);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cars');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchData();
  }, []);

  const handleMainPageClick = () => {
    setShowAbout(false);
    setShowContact(false);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowContact(false);
  };

  const handleContactClick = () => {
    setShowContact(true);
    setShowAbout(false);
  };

  const handleLogout = () => {
    window.location.reload();
  };

  const handleSeeDetails = (carId) => {
    navigate(/details/${carId});
  };
  
  return (
    <div className="outercontainer">
      <div className="logo">
        <img src={carlogo} alt="" className="carlogoimage" />
      </div>
      <div className="topRightLinks">
        <div className="mainpageoption" onClick={handleMainPageClick}>
          <div className="nav-link">Main-page</div>
        </div>
        <div className="aboutus" onClick={handleAboutClick}>
          <div className="nav-link">About us</div>
        </div>
        <div className="contact" onClick={handleContactClick}>
          <div className="nav-link">Contact</div>
        </div>
        <div className="loginsignupbutton">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="heading">CarsEcom</div>
      <div className="searchbar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="container">
        {showAbout && <About />}
        {showContact && <Contact />}
        {!showAbout && !showContact && (
          <>
            {cars.map((car) => (
              <div key={car.id} className={car${car.id}}>
                <h3>{car.brand}</h3>
                <img src={car.image} alt="" className={car${car.id}-image} />
                <div className={car${car.id}info}>
                  <p>{car.brand}</p>
                  <p>{car.type}</p>
                  <p>{car.model}</p>
                  <p>{car.price}</p>
                  <button onClick={() => handleSeeDetails(car.id)}>See Details</button>
                  <button>Buy</button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Main;