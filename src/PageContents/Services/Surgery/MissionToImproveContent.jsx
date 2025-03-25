import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FullCard from "../../../Components/Cards/FullCard";
import "../../../assets/CSS/ServiceCSS/SurgeryCSS/MissionToImproveContent.css";
import missionHeadImage from "../../../assets/Images/headImage.jpg";
import missionImage1 from "../../../assets/Images/SatisfiedCustomer.jpg";
import missionImage2 from "../../../assets/Images/ProfessionalSergeon.jpg";
import missionImage3 from "../../../assets/Images/SuccessfulCases.jpg";
import missionImage4 from "../../../assets/Images/BranchinIndia.jpg";

const MissionToImproveContent = () => {
  return (
    <div className="mission-container">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={5} className="mb-4 mb-md-0">
            <p className="mission-heading">Our Mission is to Improve</p>
            <p className="mission-subheading">your Health</p>
          </Col>
          <Col md={2} className="text-center">
            <img src={missionHeadImage} alt="Mission Icon" className="mission-icon" />
          </Col>
          <Col md={5}>
            <p className="mission-description">
              We are dedicated to enhancing healthcare services by incorporating cutting-edge
              technology and highly skilled professionals to ensure quality patient care.
            </p>
          </Col>
        </Row>

        {/* Cards Section with Gap */}
        <Row className="missionToImproveCard g-4">
          {[ 
            { img: missionImage1, title: "5k+", description: "Satisfied Customer" },
            { img: missionImage2, title: "23", description: "Professional Surgeon" },
            { img: missionImage3, title: "4.5k+", description: "Successful Cases" },
            { img: missionImage4, title: "68", description: "Branch in India" },
          ].map((item, index) => (
            <Col md={6} sm={12} key={index} className="mb-4">
              <FullCard image={item.img} heading={<span style={{ fontSize: "75px", fontFamily: "Century" }}>{item.title}</span>} title={item.description} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MissionToImproveContent;
