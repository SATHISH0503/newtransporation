// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import DiscountsPage from './DiscountsPage';

const HomePage = ({ userType }) => {
  return (
    <div className="home-page">
      <section className="services-section">
        <div className="services-container">
          {userType === 'driver' && (
            <>
              <div className="service-card">
                <Link to="/search-load" className="service-link">
                  <img src="/SearchLoad.jpg" alt="Search Load" />
                  <div className="service-content">
                    <h3>Search Load</h3>
                    <p>Find and manage loads quickly and efficiently. Our search tool helps you locate the best loads for your needs.</p>
                  </div>
                </Link>
              </div>
              <div className="service-card">
                <Link to="/add-driver" className="service-link">
                  <img src="/dvr.jpg" alt="Add Driver" />
                  <div className="service-content">
                    <h3>Driver</h3>
                    <p>Easily add and manage drivers for your fleet. Keep track of their details and availability in one place.</p>
                  </div>
                </Link>
              </div>
              <div className="service-card">
                <Link to="/add-vehicle" className="service-link">
                  <img src="/6228752.jpg" alt="Add Vehicle" />
                  <div className="service-content">
                    <h3>Vehicle</h3>
                    <p>Add new vehicles to your fleet and manage their details efficiently. Ensure all vehicles are up to date.</p>
                  </div>
                </Link>
              </div>
              <div className="service-card">
                <Link to="/order-load" className="service-link">
                  <img src="/3857477.jpg" alt="Order Load" />
                  <div className="service-content">
                    <h3>View Order Load</h3>
                    <p>Place and manage load orders with ease. Track the status of your orders and make adjustments as needed.</p>
                  </div>
                </Link>
              </div>
            </>
          )}
          {userType === 'customer' && (
            <>
              <div className="service-card">
                <Link to="/create-load" className="service-link">
                  <img src="/SearchLoad.jpg" alt="Create Load" />
                  <div className="service-content">
                    <h3>Create Load</h3>
                    <p>Create new load orders and manage them effectively. Ensure all details are correct for smooth processing.</p>
                  </div>
                </Link>
              </div>
              <div className="service-card">
                <Link to="/view-order-load" className="service-link">
                  <img src="/3857477.jpg" alt="View Order Load" />
                  <div className="service-content">
                    <h3>View  Load</h3>
                    <p>Track and manage your load orders with ease. Stay updated on the status and make any necessary adjustments.</p>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
      <DiscountsPage userType={userType} />
    </div>
  );
};

export default HomePage;
