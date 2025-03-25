import React from "react";
import "../../assets/CSS/CardCSS/fullcard.css";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType"

const FullCard = ({ image, title, description, heading }) => {
  return (
    <div className="full-card">
      <img src={image} alt={title} className="fullCard-image" />
      <div className="fullCard-body">
        <ContentBaseType heading={heading} title={title} content={description} />
      </div>
    </div>
  );
};

export default FullCard;
