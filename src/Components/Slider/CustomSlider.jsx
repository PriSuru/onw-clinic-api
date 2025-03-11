import React, { useState, useEffect } from "react";
import "../../assets/CSS/SliderCSS/CustomSlider.css";

const CustomSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider-container">
      <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
      <div className="slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "slide active" : "slide"}
            // className={index === currentIndex ? "slide" : "slideCustom"}
          />
        ))}
      </div>
      <button className="next-btn" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default CustomSlider;