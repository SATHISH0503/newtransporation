// src/components/Signup.js

import React from 'react';
import AuthLayout from './AuthLayout';
import './Auth.css';

const Signup = () => {
  return (
    <AuthLayout>
      <h2 className="auth-title">Sign Up</h2>
      <form className="auth-form">
        <div className="auth-input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="auth-input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <div className="auth-input-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" required />
        </div>
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      <p className="auth-switch">Already have an account? <a href="/login">Login</a></p>
    </AuthLayout>
  );
};

export default Signup;
