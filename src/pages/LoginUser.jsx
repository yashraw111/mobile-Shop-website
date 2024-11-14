import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [message, setMessage] = useState("");

  const redirect = useNavigate();
  
  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      setMessage("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      reset();  // Clear form fields after successful login
      redirect("/HomePage");
    } else {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div className="Login-page">
    <div className="container">

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container p-4 shadow   mt-5 col-5"
    >
      <h2 className="mb-3 text-light">Login</h2>
      {message && <div className="alert alert-info">{message}</div>}

      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          {...register("email", { required: "Email is required" })}
          />
        {errors.email && (
          <small className="errors">{errors.email.message}</small>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input
          type="password"
          className="form-control"
          {...register("password", { required: "Password is required" })}
          />
        {errors.password && (
          <small className="errors">{errors.password.message}</small>
        )}
      </div>

      <button type="submit" className="btn btn-primary w-100 submit-button">
        Log In
      </button>

      <div className="mt-3 text-center">
        <span className="">Don't have an account? </span>
        <NavLink to="/sign" className="btn text-light text-decoration-underline ">Sign Up</NavLink>
      </div>
      
      <div className="text-center">
        <NavLink to="/ForgotPass" className="btn text-light nav-link text-decoration-underline">Forgot Password?</NavLink>
      </div>
    </form>
        </div>
        </div>
  );
};

export default LoginForm;
