import React from "react";
import "../styles/Navbar.css"; // Add a separate CSS file for Navbar styling
import { CgAbstract } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/create-card");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="circle">
          <CgAbstract color="black" fontSize="26px" />
        </div>
        <span className="navbar-title">Abstract | Help Center</span>
      </div>
      <div className="navbar-actions">
        <button onClick={handleSubmit} className="navbar-button">
          Submit a request
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
