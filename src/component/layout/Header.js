import React, { useState, useEffect } from 'react';
import '../CSS/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the new icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(localStorage.getItem('navbarOpen') === 'true' || false);

  useEffect(() => {
    localStorage.setItem('navbarOpen', isOpen);
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`header ${isOpen ? 'active' : ''}`}>
      {/* Hamburger Icon to Open Navbar */}
      <div className="hamburger-icon" onClick={toggleNavbar}>
        {isOpen ? (
          <FontAwesomeIcon icon={faTimes} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="lg" />
        )}
      </div>

      {/* Overlay Navbar */}
      <div
        className={`overlay-navbar ${isOpen ? 'active' : ''}`}
        style={{
          width: '100%',
          height: isOpen ? '100%' : '0', // Adjust height here
          top: isOpen ? '0' : '-100%', // Adjust top property here
          backgroundColor: 'rgb(255, 245, 245)',
        }}
      >
        <div className="overlay-content">
          {/* Logo */}
          <div className="logo">
            <img src="https://i.pinimg.com/originals/c5/07/c2/c507c28cfe9ca6eb06a594a2a11e80e7.png" alt="Logo" />
          </div>
          {/* Navigation Links */}
          <ul className="navbar-nav">
            <li className="nav-item"><a href="/home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/products" className="nav-link">Products</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
            <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
          </ul>
          {/* Icons */}
          <div className="icons">
            {/* Search Icon */}
            <FontAwesomeIcon icon={faSearch} size="lg" className="black-icon" />

            {/* Profile Icon */}
            <FontAwesomeIcon icon={faUser} size="lg" className="black-icon" />

            {/* Cart Icon */}
            <FontAwesomeIcon icon={faShoppingCart} size="lg" className="black-icon" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        {/* Your website content goes here */}
      </div>
    </div>
  );
}

export default Header;
