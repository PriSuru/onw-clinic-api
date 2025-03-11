import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "../../../Components/Buttons/CustomButton";
import "../../../assets/CSS/ServiceCSS/SurgeryCSS/BetterEquipmentContent.css";
import equipmentImage from "../../../assets/Images/equipment.jpeg";

const BetterEquipmentContent = () => {
  return (
    <div className="better-equipment-container">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Heading, Content, Button */}
          <Col md={6}>
            <p className="better-equipment-heading">
              Better Equipment for a Better Future
            </p>
            <p className="better-equipment-description">
              We offer state-of-the-art equipment designed to improve performance,
              safety, and productivity. Experience the next level of technology and
              innovation with our advanced equipment solutions.
            </p>
            <div className="better-equipment-button-container">
              <CustomButton label="How Does It Work" onClick={() => alert("Explore button clicked!")} variant="primary" className="better-equipment-button" />
            </div>
          </Col>

          {/* Right Column - Image */}
          <Col md={6}>
            <img src={equipmentImage} alt="Better Equipment" className="equipment-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BetterEquipmentContent;
