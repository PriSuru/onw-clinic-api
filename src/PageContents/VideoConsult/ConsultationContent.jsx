import React from "react";
import CustomButton from "../../Components/Buttons/CustomButton";
import "../../assets/CSS/VideoConsultCSS/ConsultationContent.css";
import consultationImage from "../../assets/Images/homepage-hero-image-web-v1.png";
import doctorImage1 from "../../assets/Images/doctor1.jpeg";
import doctorImage2 from "../../assets/Images/doctor2.jpeg";
import doctorImage3 from "../../assets/Images/doctor3.jpeg";
import SolutionProcessContent from "./SolutionProcessContent";
import ConsultationExperienceContent from "./ConsultationExperienceContent";
import QuestionAnswerContent from "./QuestionAnswerContent";
import HealthBlogsContent from "./HealthBlogsContent";

const ConsultationContent = () => {
    return (
        <div>
            <div className="consultation-section">
                <div className="row consultationContent">
                    {/* Left Content */}
                    <div className="col-md-6">
                        <p className="consultationmainHeading1">Skip the travel!</p>
                        <p className="consultationmainHeading2">Take Online Doctor Consultation</p>
                        <p className="sub-text">
                            Private consultation + Audio call · Starts at just ₹199
                        </p>
                        {/* Doctor Images */}
                        <p className="doctor-list">
                            <img src={doctorImage1} alt="Doctor" className="doctor-img" />
                            <img src={doctorImage2} alt="Doctor" className="doctor-img" />
                            <img src={doctorImage3} alt="Doctor" className="doctor-img" />
                            <span className="doctor-count">+176 Doctors are online</span>
                        </p>
                        {/* Custom Button */}
                        <CustomButton label="Consult Now" onClick={() => alert("Consultation Started")} variant="primary" />
                    </div>

                    {/* Right Image */}
                    <div className="col-md-6">
                        <img
                            src={consultationImage}
                            alt="Consultation"
                            className="img-fluid consultation-img"
                        />
                    </div>
                </div>
            </div>
            <SolutionProcessContent />
            {/* <ConsultationExperienceContent /> */}
            <QuestionAnswerContent />
            <HealthBlogsContent />
        </div>
    );
};

export default ConsultationContent;
