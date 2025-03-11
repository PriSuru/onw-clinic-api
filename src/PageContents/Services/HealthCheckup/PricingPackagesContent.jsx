import React from "react";
import { Row, Col } from "react-bootstrap";
import CustomCard from "../../../Components/Cards/CustomCard";
import "../../../assets/CSS/ServiceCSS/HealthCheckupCSS/PricingPackagesContent.css";

const pricingData = [
  {
    title: "Basic Package",
    price: "₹199",
    description: "Includes basic health checkup.",
    features: ["Full Body Checkup", "Cancer Screening", "Basic Reports"],
    image: "/images/basic.png",
  },
  {
    title: "Standard Package",
    price: "₹499",
    description: "Includes additional tests and reports.",
    features: [
      "Full Body Checkup",
      "Cancer Screening",
      "Blood Tests",
      "Detailed Reports",
    ],
    image: "/images/standard.png",
  },
  {
    title: "Premium Package",
    price: "₹999",
    description: "Includes advanced tests and health consultations.",
    features: [
      "Full Body Checkup",
      "Blood Tests",
      "X-ray",
      "Doctor Consultation",
    ],
    image: "/images/premium.png",
  },
];

const PricingPackagesContent = () => {
  return (
    <div className="PricingPackagesContainer">
        <p className="PricingPackagesTitle">Pricing Packages</p>
        <Row className="pricingPackagesCards">
          {pricingData.map((packageData, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <CustomCard
                image={packageData.image}
                title={packageData.title}
                description={`${packageData.description}\n\nFeatures:\n- ${packageData.features.join("\n- ")}`}
                buttonLabel="Book Now"
              />
            </Col>
          ))}
        </Row>
    </div>
  );
};

export default PricingPackagesContent;
