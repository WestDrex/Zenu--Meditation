import React from "react";
import "../Components/Offers.css";

const ImageGallery = () => {
  return (
    <section>
      <div className="image-gallery-container">
        {/* <img src="../src/assets/Images/OM.png" className="background1"></img> */}
        <h1 className="header">What we have to offer</h1>

        <div className="image-row">
          <div className="image-column">
            <img
              src="../src/assets/Images/1.png"
              alt="Image 1"
              className="gallery-image"
            />
            <p className="image-caption1">Meditation</p>
          </div>
          <div className="image-column">
            <img
              src="../src/assets/Images/2.png"
              alt="Image 2"
              className="gallery-image"
            />
            <p className="image-caption2">Tratak meditation</p>
          </div>
          <div className="image-column">
            <img
              src="../src/assets/Images/3.png"
              alt="Image 3"
              className="gallery-image"
            />
            <p className="image-caption3">Healings</p>
          </div>
        </div>

        <div className="image-row">
          <div className="image-column">
            <img
              src="../src/assets/Images/4.png"
              alt="Image 4"
              className="gallery-image"
            />
            <p className="image-caption4">Peace</p>
          </div>
          <div className="image-column">
            <img
              src="../src/assets/Images/5.png"
              alt="Image 5"
              className="gallery-image"
            />
            <p className="image-caption5">Yoga</p>
          </div>
          <div className="image-column">
            <img
              src="../src/assets/Images/6.png"
              alt="Image 6"
              className="gallery-image"
            />
            <p className="image-caption6">Rieke jod</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
