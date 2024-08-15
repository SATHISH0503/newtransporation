// src/components/VehicleList.js
import React, { useState } from 'react';
import './VehicleList.css';
import VehicleForm from './VehicleForm';

const VehicleList = ({ vehicles, addVehicle }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddVehicleClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <div className="vehicle-list-container">
      <h2>Vehicle Details List</h2>
      <button className="add-vehicle-button" onClick={handleAddVehicleClick}>
        Add Vehicle
      </button>
      {showForm && (
        <div className="form-popup">
          <div className="form-popup-content">
            <span className="close-button" onClick={handleFormClose}>&times;</span>
            <VehicleForm addVehicle={addVehicle} closeForm={handleFormClose} />
          </div>
        </div>
      )}
      <div className="vehicle-list">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="vehicle-card">
            <h3>{vehicle.make} {vehicle.model}</h3>
            <p><strong>Year:</strong> {vehicle.year}</p>
            <p><strong>License Plate:</strong> {vehicle.licensePlate}</p>
            <p><strong>VIN:</strong> {vehicle.vin}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;
