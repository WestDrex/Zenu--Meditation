import React from "react";
import "../Components/Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <h1 className="intro">Mindful Breathing & meditation</h1>
      <div className="content-container">
        <p className="intro-content">
          Aao hum sab mil ke kaafi achhe saanse lete hai kyuki agar hum saanse
          nahi lenge to mar jaayenge, Isliye sabko saanse to leni hi chahiye.
          samjhe ki nhi...huhhh.
        </p>
        <div className="know-more">
          <span>
            <a href="#">Know more</a>
          </span>
        </div>
      </div>
    </div>
  );
}
