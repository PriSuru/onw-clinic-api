import React from "react";
import FullCard from "../../../Components/Cards/FullCard";
import "../../../assets/CSS/ServiceCSS/HealthCheckupCSS/whyChooseUs.css";
import { FaThumbsUp, FaStar, FaHeadset } from "react-icons/fa";

const WhyChooseUsContent = () => {
  const cardData = [
    {
      title: "Quality Services",
      description: "We provide top-notch services with 100% customer satisfaction.",
      // description: "We provide top-notch services with 100% customer.",
      icon: <FaThumbsUp size={50} color="#007bff" />,
    },
    {
      title: "Best Rated",
      description: "Highly rated by our customers for exceptional support & quality.",
      // description: "Highly rated by our customers for exceptional support.",
      icon: <FaStar size={50} color="#f39c12" />,
    },
    {
      title: "24/7 Support",
      description: "Our team is available round the clock to assist you anytime.",
      icon: <FaHeadset size={50} color="#28a745" />,
    },
  ];

  return (
    <div className="whyChooseUsContainer">
      <h2 className="whyChooseUsTitle">Why Choose Us?</h2>
      <div className="whyChooseUsCards">
        {cardData.map((card, index) => (
          <div key={index} className="whyChooseUsCardWrapper">
            <div className="whyChooseUsIconWrapper">{card.icon}</div>
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

export default WhyChooseUsContent;
