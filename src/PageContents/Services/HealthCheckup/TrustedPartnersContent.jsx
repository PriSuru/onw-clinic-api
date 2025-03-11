import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useScrollAnimations from "../../../Components/Hooks/useScrollAnimations";
import "../../../assets/CSS/ServiceCSS/HealthCheckupCSS/TrustedPartnersContent.css";
import logoImage1 from "../../../assets/Images/partner1-logo.png"
import logoImage2 from "../../../assets/Images/partner2-logo.png"
import logoImage3 from "../../../assets/Images/partner3-logo.png"
import logoImage4 from "../../../assets/Images/partner4-logo.png"

const TrustedPartnersContent = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const featureCardsRef = useRef([]);

  useScrollAnimations(sectionRef, textRef, featureCardsRef);

  return (
    <div ref={sectionRef} className="trustedPartnersContainer">
      <Container>
        <p ref={textRef} className="trustedPartnersHeading">Our Trusted Partners</p>
        <Row className="g-4 justify-content-center">
          {[logoImage1, logoImage2, logoImage3, logoImage4].map((logo, index) => (
            <Col key={index} md={2} sm={4} xs={6} className="partner-logo-col">
              <img
                ref={(el) => (featureCardsRef.current[index] = el)}
                src={logo}
                alt={`Partner ${index + 1}`}
                className="partner-logo"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TrustedPartnersContent;
