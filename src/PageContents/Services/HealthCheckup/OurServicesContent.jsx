import React from "react";
import FullCard from "../../../Components/Cards/FullCard";
import "../../../assets/CSS/ServiceCSS/HealthCheckupCSS/OurServicesContent.css";
import { FaHeartbeat, FaStethoscope, FaPills } from "react-icons/fa";

const OurServicesContent = () => {
  const services = [
    {
      title: "Health Checkups",
      description: "Comprehensive checkup packages to monitor your health.",
      icon: <FaHeartbeat size={50} color="#28a745" />,
    },
    {
      title: "Consultation",
      description: "Get expert consultations from experienced doctors.",
      icon: <FaStethoscope size={50} color="#007bff" />,
    },
    {
      title: "Medication",
      description: "Access to a wide range of prescribed medications.",
      icon: <FaPills size={50} color="#f39c12" />,
    },
  ];

  return (
    <div className="ourServicesContainer">
      <p className="ourServicesTitle">Our Services</p>
      <div className="ourServicesCards">
        {services.map((card, index) => (
          <div key={index} className="ourServicesCardWrapper">
            <div className="ourServicesIconWrapper">{card.icon}</div>
            <FullCard
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesContent;
