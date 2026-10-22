
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Demo only: this does not authenticate a real user.
    if (email && password) {
      alert("Demo login successful!");
      navigate("/dashboard");
    }
  }

  return (
    <section className="form-card">
      <div className="form-heading">
        <h1>Welcome Back</h1>
        <p>Login to access your dashboard.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-primary btn-full">
          Login
        </button>
      </form>

      <p className="form-bottom">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </section>
  );
}

export default Login;
