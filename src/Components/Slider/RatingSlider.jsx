import React from "react";
import "../../assets/CSS/SliderCSS/RatingSlider.css";
import { FaStar } from "react-icons/fa";

import ContentBaseType from "../../Components/ContentsType/ContentBaseType";

const RatingSlider = ({ reviews }) => {
  return (
    <div id="ratingCarousel" className="carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="rating-card">
              <img src={review.image} alt={review.name} className="profile-img" />
              <ContentBaseType title={review.name} />
              <p className="rating-stars">
                {Array.from({ length: review.rating }, (_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </p>
              <ContentBaseType content={review.comment} />
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#ratingCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#ratingCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default RatingSlider;
