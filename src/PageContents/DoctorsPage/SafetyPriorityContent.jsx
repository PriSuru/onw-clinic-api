import React from "react";
import "../../assets/CSS/DoctorsPageCSS/SafetyPriorityContent.css";
import safetyImage from "../../assets/Images/safety-image.jpg"; // Apni image ka path yahan set karein
import CustomButton from "../../Components/Buttons/CustomButton";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType"

const SafetyPriorityContent = () => {
  return (
    <div className="safetySafetyContainer">
      <div className="safetyContentLeft">
        {/* <p className="safetyHeading">Safety of your data is our<span><b> top priority.</b></span></p> */}
        <div className="safetyContentHeading">
        <p className="safetyHeading1"><ContentBaseType heading="Safety of your data is our" /></p>
        <p className="safetyHeading2"><b><ContentBaseType heading="top priority." /></b></p>
        </div>
        <ul>
          <li className="safetyPriorityList"><ContentBaseType title="✔ Multi-level security checks" /></li>
          <li className="safetyPriorityList"><ContentBaseType title="✔ Multiple data backups" /></li>
          <li className="safetyPriorityList"><ContentBaseType title="✔ Stringent data privacy policies" /></li>
        </ul>
        <CustomButton label="Learn More" className="safetyCustomButton" variant="primary" onClick={() => alert("Searching...")} />
      </div>
      <div className="safetyContentRight">
        <img src={safetyImage} alt="Safety" />
      </div>
    </div>
  );
};

export default SafetyPriorityContent;