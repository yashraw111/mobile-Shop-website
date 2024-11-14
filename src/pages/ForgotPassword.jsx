import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === data.email);
    
    if (user) {
      setMessage(`Your password is: ${user.password}`);
    } else {
      setMessage("Email not found");
    }
  };

  return (
    <div className="forgot-form ">
      <div className="container">
    <form onSubmit={handleSubmit(onSubmit)} className="container p-4 shadow rounded mt-5 col-5">
      <h2 className="mb-3 text-light">Forgot Password</h2>
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

      <button type="submit" className="btn btn-primary w-100 submit-button">Retrieve Password</button>
      <button type="button" className="btn btn-link mt-2 " > <NavLink className="text-light" to='/'>Back to Login</NavLink></button>
    </form>
    </div>
    </div>
  );
};

export default ForgotPassword;
