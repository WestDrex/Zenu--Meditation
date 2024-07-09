import React, { useState } from "react";
import "../Components/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Zenu Medi</h2>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#blogs">Blogs</a>
        </li>
        <li>
          <a href="#signup">Sign Up</a>
        </li>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line2"></div>
          <div className="line"></div>
        </div>
      </ul>
    </nav>
  );
}
