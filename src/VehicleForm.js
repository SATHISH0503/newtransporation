// src/components/VehicleForm.js
import React, { useState } from 'react';
import './VehicleForm.css';

const VehicleForm = ({ addVehicle, closeForm }) => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    licensePlate: '',
    vin: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVehicle(formData);
    closeForm();
  };

  return (
    <div className="vehicle-form-container">
      <h2>Add Vehicle</h2>
      <form className="vehicle-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="make">Make</label>
          <input type="text" id="make" name="make" value={formData.make} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input type="text" id="model" name="model" value={formData.model} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input type="number" id="year" name="year" value={formData.year} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="licensePlate">License Plate</label>
          <input type="text" id="licensePlate" name="licensePlate" value={formData.licensePlate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="vin">VIN</label>
          <input type="text" id="vin" name="vin" value={formData.vin} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default VehicleForm;
