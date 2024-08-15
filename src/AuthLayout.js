// src/components/AuthLayout.js

import React from 'react';
import './Auth.css';
// import companyLogo from '../assets/companyLogo.png'; // Add your company logo here

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-form-container">
        <div className="auth-logo">
          {/* <img src={companyLogo} alt="Company Logo" /> */}
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
