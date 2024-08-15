// src/pages/SearchLoadPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './SearchLoadPage.css';

const SearchLoadPage = () => {
  return (
    <div className="search-load-page">
      <header className="page-header">
        <h1>Explore Loads</h1>
        <p>Find and manage your loads with ease. Click on the sections below to explore more.</p>
      </header>
      <div className="flex-container">
        <div className="flex-item">
          <Link to="/full-loads" className="item-link">
            <img src="https://via.placeholder.com/300x200?text=Full+Loads" alt="Full Loads" />
            <div className="item-overlay">
              <h2>Full Loads</h2>
              <p>Explore a variety of full load options that fit your needs.</p>
            </div>
          </Link>
        </div>
        <div className="flex-item">
          <Link to="/partial-loads" className="item-link">
            <img src="https://via.placeholder.com/300x200?text=Partial+Loads" alt="Partial Loads" />
            <div className="item-overlay">
              <h2>Partial Loads</h2>
              <p>Find partial load options and optimize your shipping costs.</p>
            </div>
          </Link>
        </div>
        <div className="flex-item">
          <Link to="/special-requests" className="item-link">
            <img src="https://via.placeholder.com/300x200?text=Special+Requests" alt="Special Requests" />
            <div className="item-overlay">
              <h2>Special Requests</h2>
              <p>Submit special requests for unique or custom load requirements.</p>
            </div>
          </Link>
        </div>
        <div className="flex-item">
          <Link to="/urgent-loads" className="item-link">
            <img src="https://via.placeholder.com/300x200?text=Urgent+Loads" alt="Urgent Loads" />
            <div className="item-overlay">
              <h2>Urgent Loads</h2>
              <p>Find and prioritize urgent loads that need immediate attention.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchLoadPage;
