import React, { useState } from "react";

import "../Components/Services.css";

const ImageWithWriteup = ({ imageSrc, text, title }) => {
  return (
    <div className="main-container">
      {/* <img src={picSrc} className="background-image" /> */}
      <div className="writeup-section">
        <img src={imageSrc} alt="Content" className="writeup-image" />
      </div>
      <div className="writeup-content">
        <p className="writeup-title">{title}</p>
        <p className="writeup-text">{text}</p>
        <a href="#" className="book-now">
          Book now
        </a>
      </div>
    </div>
  );
};

const ImageWriteupPage = () => {
  return (
    // <section>
    <div className="container">
      <h2>Our featured services</h2>

      {/* <div className="content-container"> */}
      <ImageWithWriteup
        imageSrc="../src/assets/Images/tratak.png"
        picSrc="../src/assets/Images/YAM.png"
        title="Tratak Meditation"
        text="Trataka,a technique used in a meditation practice, is one of the six purification techniques, called shatkarmas, of Hatha yoga. Trataka is a Sanskrit word, which means to gaze. As such, this meditation technique involves starting at a single point of focus. This is typically the flame of a candle, but other objects that may be used include a dot on the wall, an object of worship, a deity, flower, mountain, rising sun or moon. However, a flame is believed to work best. Meditating in this way is believed to energize the ajna (third eye) chakra, which is associated with intuition and wisdom, as well as psychic abilities. Traditionally, it's said that the practice allows the past, present and future to be perceived with equal clarity."
      />
      <ImageWithWriteup
        imageSrc="../src/assets/Images/bowl.png"
        picSrc="../src/assets/Images/YAM.png"
        title="Singing Bowl Meditation"
        text="The singing bowl is a metal bowl, struck by a mallet, often used in spiritual or religious settings to invoke meditation or relaxation through the resounding vibrations and pleasant sounds it emanates when played. They can also be used in sound therapy to induce healing and treat various illnesses. The sounds the singing bowls produce are said to create a kind of energy that may center the frequencies of the body, mind and soul. Playing these bowls has also been said to cause the left and right sides of the brain to synchronize together, creating a peace and calm during meditation."
        reverse
      />
      <ImageWithWriteup
        imageSrc="../src/assets/Images/medi.png"
        picSrc="../src/assets/Images/YAM.png"
        title="Desi Meditation"
        text="Trataka,a technique used in a meditation practice, is one of the six purification techniques, called shatkarmas, of Hatha yoga. Trataka is a Sanskrit word, which means to gaze. As such, this meditation technique involves starting at a single point of focus. This is typically the flame of a candle, but other objects that may be used include a dot on the wall, an object of worship, a deity, flower, mountain, rising sun or moon. However, a flame is believed to work best. Meditating in this way is believed to energize the ajna (third eye) chakra, which is associated with intuition and wisdom, as well as psychic abilities. Traditionally, it's said that the practice allows the past, present and future to be perceived with equal clarity."
      />
      <div className="explore">
        <a href="#" className="para-explore">
          Explore other services
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ImageWriteupPage;
