
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "David Smith", email: "david@example.com", role: "Editor" },
    { id: 3, name: "Mary James", email: "mary@example.com", role: "User" },
    { id: 4, name: "John Peter", email: "john@example.com", role: "User" }
  ];

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2>ManagePro</h2>

        <Link to="/dashboard" className="sidebar-link active">
          Dashboard
        </Link>

        {/* <Link to="/about" className="sidebar-link">
          About
        </Link>

        <Link to="/contact" className="sidebar-link">
          Contact
        </Link>

        <Link to="/login" className="sidebar-link">
          Logout
        </Link> */}
      </aside>

      <section className="dashboard-main">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here is your system overview.</p>
          </div>

          <Link to="/register" className="btn btn-primary">
            + Add User
          </Link>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <p>Total Users</p>
            <h2>124</h2>
            <span>Registered accounts</span>
          </div>

          <div className="stat-card">
            <p>Active Users</p>
            <h2>98</h2>
            <span>Currently active</span>
          </div>

          <div className="stat-card">
            <p>Pending Tasks</p>
            <h2>12</h2>
            <span>Awaiting completion</span>
          </div>

          <div className="stat-card">
            <p>Reports</p>
            <h2>35</h2>
            <span>Reports generated</span>
          </div>
        </div>

        <div className="table-card">
          <h2>Recent Users</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <span className="status-badge">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
