

import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>Manage Your Business Easily</h1>

        <p>
          Manage users, monitor activities, and organize
          your daily operations from one simple dashboard.
        </p>

        <div className="hero-buttons">
          <Link to="/dashboard" className="btn btn-primary">
            Open Dashboard
          </Link>

          <Link to="/register" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
