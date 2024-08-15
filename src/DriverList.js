// src/components/DriverList.js
import React, { useState } from 'react';
import './DriverList.css';
import DriverForm from './DriverForm';

const DriverList = ({ drivers, addDriver }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddDriverClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <div className="driver-list-container">
      <h2>Driver Details List</h2>
      <button className="add-driver-button" onClick={handleAddDriverClick}>
        Add Driver
      </button>
      {showForm && (
        <div className="form-popup">
          <div className="form-popup-content">
            <span className="close-button" onClick={handleFormClose}>&times;</span>
            <DriverForm addDriver={addDriver} closeForm={handleFormClose} />
          </div>
        </div>
      )}
      <div className="driver-list">
        {drivers.map((driver, index) => (
          <div key={index} className="driver-card">
            <h3>{driver.firstName} {driver.lastName}</h3>
            <p><strong>License Number:</strong> {driver.licenseNumber}</p>
            <p><strong>Contact:</strong> {driver.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverList;
