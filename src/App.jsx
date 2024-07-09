import React, { useState } from "react";

import "./index.css";

import Home from "./Components/Home.jsx";

import ImageWriteupPage from "./Components/Services.jsx";
import ImageGallery from "./Components/Offers.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {
  return (
    <div className="App">
      <Home />
      <ImageGallery />

      <ImageWriteupPage />
      <Footer />
    </div>
  );
}
