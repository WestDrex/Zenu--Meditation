import React from "react";

import "../Components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-header">Zenu Medi</h2>
      {/* <img
        src="../src/assets/Images/Vector 5.png"
        alt="vector1"
        className="vector5"
      /> */}
      <div className="footer-content">
        <div className="footer-column">
          <p>Services</p>
          <p>Products </p>
          <p>Blogs</p>
        </div>
        <div className="footer-column">
          <p className="account">Account</p>
          <ul>
            <li>Create Account</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>About</p>
          <p>Privacy policy</p>
          <p>Disclaimer</p>
          <p>Help</p>
          <p>FAQ</p>
        </div>
        <div>
          <p className="follow">Follow us on</p>

          <div className="footer-column footer-social">
            <img
              src="../src/assets/Images/facebook.png"
              alt="Facebook"
              className="social-icon"
            />
            <img
              src="../src/assets/Images/twitter.png"
              alt="Twitter"
              className="social-icon"
            />
            <img
              src="../src/assets/Images/insrtagram.png"
              alt="Instagram"
              className="social-icon"
            />
          </div>
          <img
            src="../src/assets/Images/Vector 11.png"
            alt="vector1"
            className="vector11"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
