// src/components/Login.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const isSuccess = true; // Replace with actual success condition

    if (isSuccess) {
      navigate('/home');
    } else {
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <AuthLayout>
      <h2 className="auth-title">Login</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <div className="auth-input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="auth-input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="auth-button">Login</button>
      </form>
      <p className="auth-switch">Don't have an account? <a href="/signup">Sign up</a></p>
    </AuthLayout>
  );
};

export default Login;
