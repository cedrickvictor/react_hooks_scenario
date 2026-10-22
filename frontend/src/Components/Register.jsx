
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration successful! (Demo only)");

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  }

  return (
    <section className="form-card">
      <div className="form-heading">
        <h1>Create Account</h1>
        <p>Register to access the management system.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          minLength={6}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          minLength={6}
          required
        />

        <button type="submit" className="btn btn-primary btn-full">
          Register
        </button>
      </form>

      <p className="form-bottom">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </section>
  );
}

export default Register;
