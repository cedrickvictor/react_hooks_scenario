
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Demo message submitted!");
    setMessage("");
  }

  return (
    <section className="form-card">
      <h1>Contact Us</h1>
      <p>Send us a message using the form below.</p>

      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <label>Message</label>
        <textarea
          placeholder="Write your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
