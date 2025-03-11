import React from "react";
import { Row, Col } from "react-bootstrap";
import CustomButton from "../../../Components/Buttons/CustomButton";
import "../../../assets/CSS/ServiceCSS/HealthCheckupCSS/HealthCheckupBenefits.css";
import healthCheckupBenefitImage from "../../../assets/Images/health-benefits.jpg";

const HealthCheckupBenefits = () => {
    return (
        <div className="healthCheckupBenefitsContainer">
            <Row className="align-items-center">
                <Col lg={6} md={6} xs={12} className="text-center">
                    <img 
                        src={healthCheckupBenefitImage} 
                        alt="Health Benefits" 
                        className="img-fluid rounded healthCheckupBenefitImageStyle"
                    />
                </Col>
                <Col lg={6} md={6} xs={12}>
                    <p className="benefitHeading">Why Regular Health Checkups Matter?</p>
                    <p className="benefitDescription">
                        Regular health checkups help in early detection of illnesses, improving overall wellness and ensuring timely treatment.
                    </p>
                    <ul className="benefitList">
                        <li>Early detection of chronic diseases</li>
                        <li>Personalized health insights</li>
                        <li>Prevention of potential health risks</li>
                        <li>Improved quality of life</li>
                    </ul>
                    <CustomButton label="Learn More" variant="primary" className="mt-3" />
                </Col>
            </Row>
        </div>
    );
};

export default HealthCheckupBenefits;
