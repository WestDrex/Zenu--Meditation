import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
    </div>
  );
}
