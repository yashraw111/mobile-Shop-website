// src/components/SignupForm.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const SignupForm = ({ onSwitchToLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === data.email);
    
    if (userExists) {
      setMessage("User already exists. Please log in.");
    } else {
      users.push(data);
      localStorage.setItem('users', JSON.stringify(users));
      setMessage("Signup successful! Please log in.");
      onSwitchToLogin();
    }
  };

  return (
    <div className="signup-form">
    <div className="container">
    <form onSubmit={handleSubmit(onSubmit)} className="container p-4 shadow rounded mt-5 col-5">
      <h2 className="mb-3 text-light">Signup</h2>
      {message && <div className="alert alert-info">{message}</div>}

      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input 
          type="email" 
          className="form-control"
          {...register('email', { required: "Email is required" })} 
        />
        {errors.email && <small className="errors">{errors.email.message}</small>}
      </div>

      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input 
        
          type="password" 
          className="form-control"
          {...register('password', { 
            required: "Password is required",
            minLength: { value: 6, message: "Password must be at least 6 characters" }
          })} 
        />
        {errors.password && <small className="errors">{errors.password.message}</small>}
      </div>

      <button type="submit" className="btn btn-primary w-100 submit-button mb-2 mt-4">Sign Up</button>
      <button type="button" className="btn btn-link text-light " >Already have an account?  </button> <NavLink to='/' className="text-light">Log In</NavLink>
    </form>
    </div>
    </div>
  );
};

export default SignupForm;
