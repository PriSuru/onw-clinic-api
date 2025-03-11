import React from "react";

import "../../assets/CSS/DoctorsPageCSS/DoctorsGuaranteedContent.css";

import CustomButton from "../../Components/Buttons/CustomButton";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType"
import RatingSlider from "../../Components/Slider/RatingSlider";

import v1 from "../../assets/Videos/appointment.700ce682eaec91bf93b6574cb8f09cd0.mp4";
import profile1 from "../../assets/Images/doctor1.jpeg";
import profile2 from "../../assets/Images/doctor2.jpeg";
import profile3 from "../../assets/Images/doctor3.jpeg";

const DoctorsGuaranteedContent = () => {

const reviewsforConsultDoctor = [
    { id: 1, name: "Dr. Aisha Khan", rating: 5, comment: "Excellent doctor! Very knowledgeable and friendly.", image: profile1 },
    { id: 2, name: "Dr. Rohit Sharma", rating: 4, comment: "Good experience. Doctor listened carefully.", image: profile2 },
    { id: 3, name: "Dr. Meera Joshi", rating: 2, comment: "Highly recommended! Professional and caring.", image: profile3 },
  ];
  
  return (
    <div className="guaranteedDoctorsContent">
      <div className="row guaranteedAlignItemsCenter">
        <div className="col-lg-6 guaranteedTextContent">
          <p className="guaranteedDoctors1"><ContentBaseType heading="Instant appointment with" /></p>
          <p className="guaranteedDoctors2"><b><ContentBaseType heading="doctors.Guaranteed." /></b></p>
          <ul className="bullet-list">
            <li className="guaranteedDoctorsList"><ContentBaseType title="✔ 100,000 Verified doctors" /></li>
            <li className="guaranteedDoctorsList"><ContentBaseType title="✔ 3M+ Patient recommendations" /></li>
            <li className="guaranteedDoctorsList"><ContentBaseType title="✔ 25M Patients/year" /></li>
          </ul>
          <CustomButton label="Find me the right doctor" className="guaranteedCustomButton" variant="primary" />          
          <RatingSlider reviews={reviewsforConsultDoctor} />
        </div>

        <div className="col-lg-6 guaranteedVideoContainer">
          <video className="guaranteedVideo" autoPlay muted loop>
            <source src={v1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default DoctorsGuaranteedContent;
