import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = ({ user, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">My Logo</div>
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/services" className="nav-item">Services</Link>
        <Link to="/about" className="nav-item">About Us</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <div className="user-section">
        {user ? (
          <div className="user-profile" onClick={toggleDropdown}>
            <span className="user-name">{user.name}</span>
            <div className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
              <button className="dropdown-item" onClick={onLogout}>Logout</button>
              <Link to="/profile" className="dropdown-item">Profile</Link>
            </div>
          </div>
        ) : (
          <Link to="/login" className="nav-item">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
