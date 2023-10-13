import React, { useState, useEffect } from 'react';
import '../CSS/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
      <div className="hamburger-icon" onClick={toggleNavbar}>
        {isOpen ? (
          <FontAwesomeIcon icon={faTimes} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="lg" />
        )}
      </div>

      <div className={`overlay-navbar ${isOpen ? 'active' : ''} custom-overlay`}>
        <div className="overlay-content">
          <div className="logo">
            <img src="https://i.pinimg.com/originals/c5/07/c2/c507c28cfe9ca6eb06a594a2a11e80e7.png" alt="Logo" />
          </div>

          <div className="content">
            <div className="links-and-icons">
              <ul className="navbar-nav">
                <li className="nav-item"><a href="/home" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="/products" className="nav-link">Products</a></li>
                <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
                <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
              </ul>

              <div className="icons">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faSearch} size="lg" className="black-icon" />
                </div>
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faUser} size="lg" className="black-icon" />
                </div>
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faShoppingCart} size="lg" className="black-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        {/* Your website content goes here */}
      </div>
    </div>
  );
}

export default Header;
