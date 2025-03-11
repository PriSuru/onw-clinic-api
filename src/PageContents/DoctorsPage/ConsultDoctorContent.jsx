import React from 'react';

import "../../assets/CSS/DoctorsPageCSS/ConsultDoctorContent.css";

import CustomButton from "../../Components/Buttons/CustomButton";
import RatingSlider from "../../Components/Slider/RatingSlider";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType"

import v2 from "../../assets/Videos/consult.099446892618434cc8a038d7844c4380.mp4";
import profile1 from "../../assets/Images/doctor1.jpeg";
import profile2 from "../../assets/Images/doctor2.jpeg";
import profile3 from "../../assets/Images/doctor3.jpeg";

const ConsultDoctorContent = () => {
  const reviewsforConsultDoctor = [
    { id: 1, name: "Dr. Aisha Khan", rating: 5, comment: "Excellent doctor! Very knowledgeable and friendly.", image: profile1 },
    { id: 2, name: "Dr. Rohit Sharma", rating: 4, comment: "Good experience. Doctor listened carefully.", image: profile2 },
    { id: 3, name: "Dr. Meera Joshi", rating: 2, comment: "Highly recommended! Professional and caring.", image: profile3 },
  ];

  return (
    <div className="consultDoctorsContent">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12 text-center consultVideoContainer">
          <video className="consultVideo" autoPlay muted loop>
            <source src={v2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
 
        <div className="col-lg-6 col-md-6 col-sm-12 consultTextContent">
          <p className="consultDoctorsHeading1"><ContentBaseType heading="Skip the waiting room." /></p>
          <p className="consultDoctorsHeading2"><b><ContentBaseType heading="Consult with a doctor." /></b></p>
          <ul className="bullet-list">
            <li className="consultDoctorsList"><ContentBaseType title="✔ Fees starting at ₹99" /></li>
            <li className="consultDoctorsList"><ContentBaseType title="✔ Verified doctors respond in 5 minutes" /></li>
            <li className="consultDoctorsList"><ContentBaseType title="✔ 100% Private and confidential" /></li>
          </ul>
          <div className="consultActionContainer">
            <CustomButton label="Find me the right doctor" className="consultCustomButton" variant="primary" />
            <span className="blinkingDot"></span>
            <span className="onlineDoctors">83401 doctors online</span>
          </div>
          <RatingSlider reviews={reviewsforConsultDoctor} />
        </div>
      </div>
    </div>
  );
}

export default ConsultDoctorContent;
