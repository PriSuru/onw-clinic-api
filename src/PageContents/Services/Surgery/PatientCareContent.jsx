import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "../../../Components/Buttons/CustomButton";
import "../../../assets/CSS/ServiceCSS/SurgeryCSS/PatientCareContent.css";
import patientCareImage from "../../../assets/Images/patient-care.jpg";
import ContentBaseType from "../../../Components/ContentsType/ContentBaseType";

const PatientCareContent = () => {
    return (
        <div className="patientCareContainer">
                <Row className="align-items-center">
                    {/* Left Side - Content */}
                    <Col md={6} className="p-4 text-md-start text-center">
                        <div className="patientCare-Content">
                            <p className="patientCareHeading"><ContentBaseType heading="Compassionate Patient Care" /></p>
                        </div>
                        <p className="description">
                        <ContentBaseType title="We prioritize patient well-being with personalized care plans, 24/7 medical assistance, 
                            and a comfortable healing environment to ensure a smooth recovery." />
                        </p>
                        <CustomButton
                            label="Learn More"
                            onClick={() => alert("Learn More button clicked!")}
                            variant="primary"
                        />
                    </Col>
                    
                    {/* Right Side - Image */}
                    <Col md={6} className="p-0 text-center">
                        <img
                            src={patientCareImage}
                            alt="Patient Care"
                            className="img-fluid patient-care-image"
                        />
                    </Col>
                </Row>
                
                
        </div>
    );
};

export default PatientCareContent;