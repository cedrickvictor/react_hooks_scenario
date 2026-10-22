
// eslint-disable-next-line no-unused-vars
import React from "react";

function About() {
  return (
    <section className="content-card">
      <h1>About ManagePro</h1>

      <p>
        ManagePro is a simple management system designed
        to help organizations manage their daily activities.
      </p>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>User Management</h3>
          <p>Organize user information in one place.</p>
        </div>

        <div className="feature-card">
          <h3>Dashboard</h3>
          <p>View important statistics and activities.</p>
        </div>

        <div className="feature-card">
          <h3>Easy Navigation</h3>
          <p>Move between different pages easily.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
