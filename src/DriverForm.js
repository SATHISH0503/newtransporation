// src/components/DriverForm.js
import React, { useState } from 'react';
import './DriverForm.css';

const DriverForm = ({ addDriver, closeForm }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    licenseNumber: '',
    contact: ''
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
    addDriver(formData);
    closeForm();
  };

  return (
    <div className="driver-form-container">
      <h2>Add Driver</h2>
      <form className="driver-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="licenseNumber">License Number</label>
          <input type="text" id="licenseNumber" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default DriverForm;
