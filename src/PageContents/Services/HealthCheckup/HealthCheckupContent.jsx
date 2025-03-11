import React from "react";
import { Row, Col } from "react-bootstrap";
import CustomButton from "../../../Components/Buttons/CustomButton";
import FullCard from "../../../Components/Cards/FullCard";
import "../../../assets/CSS/ServiceCSS/HealthCheckupCSS/HealthCheckupContent.css";
import healthCheckupImage from "../../../assets/Images/familyHealthCheckup.jpg";
import healthCheckupCardImage1 from "../../../assets/Images/lab-test.png";
import healthCheckupCardImage2 from "../../../assets/Images/health-check.png";
import healthCheckupCardImage3 from "../../../assets/Images/xray.png";
import WhyChooseUsContent from "./WhyChooseUsContent";
import OurServicesContent from "./OurServicesContent";
import PricingPackagesContent from "./PricingPackagesContent";
import TrustedPartnersContent from "./TrustedPartnersContent";
import HealthCheckupBenefits from "./HealthCheckupBenefits";

const HealthCheckupContent = () => {
    const cardData = [
        { title: "Book Lab Tests", imgSrc: healthCheckupCardImage1 },
        { title: "Popular Health Checks", imgSrc: healthCheckupCardImage2 },
        { title: "X-rays Scans & MRI", imgSrc: healthCheckupCardImage3 },
    ];

    return (
        <div>
            <div className="healthCheckupContainer">
                <div className="healthCheckupFirstContainer">
                    <Row className="healthCheckupImage">
                        <Col lg={6} md={6} xs={12}>
                            <p className="healthCheckupHeading">Family body</p>
                            <p className="healthCheckupHeading checkupHeading">checkup package</p>
                            <p className="healthCheckupHeading price">Now at ₹199</p>
                            <ul className="healthCheckupList">
                                <li>✔ Full body checkup with cancer</li>
                                <li>✔ Free home sample pickup</li>
                            </ul>
                            <CustomButton label="Book Now" variant="primary" className="mt-3" />
                        </Col>
                        <Col lg={6} md={6} xs={12} className="text-center mt-4 mt-md-0">
                            <img src={healthCheckupImage} alt="Health Checkup" className="img-fluid rounded healthCheckupImageStyle" />
                        </Col>
                    </Row>
                </div>

                <div className="healthCheckupSecondContainer">
                    <Row>
                        {cardData.map((card, index) => (
                            <Col key={index} lg={4} md={6} sm={6} xs={12} className="mb-3">
                                <FullCard title={card.title} image={card.imgSrc} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
            <WhyChooseUsContent />
            <PricingPackagesContent />
            <OurServicesContent />
            <TrustedPartnersContent />
            <HealthCheckupBenefits />
        </div>
    );
};

export default HealthCheckupContent;
