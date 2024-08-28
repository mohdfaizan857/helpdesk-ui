import React from "react";
import "../styles/Navbar.css"; // Add a separate CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="https://via.placeholder.com/30"
          alt="Logo"
          className="navbar-logo"
        />
        <span className="navbar-title">Abstract | Help Center</span>
      </div>
      <div className="navbar-actions">
        <button className="navbar-button">Submit a request</button>
      </div>
    </nav>
  );
};

export default Navbar;
