import React, { useState } from 'react';
import './App.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>Logo</span>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Ankit</li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
      </div>
    </nav>
  );
};

export default Navbar;
