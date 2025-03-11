import React from 'react';
import RatingSlider from "../../Components/Slider/RatingSlider";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType";

import profile1 from "../../assets/Images/doctor1.jpeg";
import profile2 from "../../assets/Images/doctor2.jpeg";
import profile3 from "../../assets/Images/doctor3.jpeg";

import "../../assets/CSS/HomePageCSS/Testimonials.css";

const Testimonials = () => {
  const testimonalReviews = [
    { id: 1, name: "Dr. Aisha Khan", rating: 5, comment: "Excellent doctor! Very knowledgeable and friendly.", image: profile1 },
    { id: 2, name: "Dr. Rohit Sharma", rating: 4, comment: "Good experience. Doctor listened carefully.", image: profile2 },
    { id: 3, name: "Dr. Meera Joshi", rating: 2, comment: "Highly recommended! Professional and caring.", image: profile3 },
  ];

  return (
    <div className="container testimonials-container">
      <div className="row justify-content-center">
        <div className="text-center">
          <p className="testimonialsHeading"><ContentBaseType heading="What People Say About Us"/></p>
        </div>
        <div className="col-lg-8 col-md-10 col-sm-12">
          <RatingSlider reviews={testimonalReviews} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
