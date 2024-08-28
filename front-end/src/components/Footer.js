import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Abstract</h2>
            <ul>
              <li>Branches</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Resources</h2>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Community</h2>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Company</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright 2022</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
