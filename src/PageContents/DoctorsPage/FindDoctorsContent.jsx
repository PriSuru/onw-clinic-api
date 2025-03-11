import React from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

import CustomButton from "../../Components/Buttons/CustomButton";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType"

import doctorBg from "../../assets/Images/6655c1187122ce54047d4809_teriiuijj.png";
import "../../assets/CSS/DoctorsPageCSS/FindDoctorsContent.css";
import SafetyPriorityContent from "./SafetyPriorityContent";
import DoctorsGuaranteedContent from "./DoctorsGuaranteedContent";
import ConsultDoctorContent from "./ConsultDoctorContent";
import SpecialitiesContent from "./SpecialitiesContent";
import TestimonialContent from "./TestimonialContent";

const FindDoctorsContent = () => {
  return (
    <div>
    <div
      className="find-doctors-container"
      style={{ backgroundImage: `url(${doctorBg})` }}
    >
      <div className="docterOverlay">
        <p className="docterHeading"><ContentBaseType heading="Find Your Doctor" /></p>
        <p className="docterSubTitle">
          <ContentBaseType content="Book an appointment with the best doctors near you." />
        </p>

        {/* Input Fields and Button Row */}
        <div className="docterSearchRow">
          <div className="docterInputContainer">
            <FaMapMarkerAlt className="docterInputIcon" />
            <input type="text" placeholder="Enter Location" className="docterInputField" />
          </div>
          
          <div className="docterInputContainer">
            <FaSearch className="docterInputIcon" />
            <input type="text" placeholder="Enter Doctor Name" className="docterInputField" />
          </div>

          <CustomButton label="Search" variant="primary" onClick={() => alert("Searching...")} />
        </div>
      </div>
    </div>
    <SafetyPriorityContent />
    <DoctorsGuaranteedContent />
    <ConsultDoctorContent />
    <SpecialitiesContent />
    <TestimonialContent />
    </div>
  );
};

export default FindDoctorsContent;
