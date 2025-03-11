import React from "react";
import CustomButton from "../../Components/Buttons/CustomButton";
import "../../assets/CSS/CardCSS/CustomCard.css";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType"

const CustomCard = ({ image, title, description, buttonLabel = "Learn More" }) => {
  return (
      <div className="custom-card">
          <img src={image} alt={title} className="card-image" />
          <div className="card-body">
              <ContentBaseType title={title} content={description} />
              <CustomButton label={buttonLabel} onClick={() => alert(`More about ${title}`)} variant="primary" />
          </div>
      </div>  
  );
};

export default CustomCard;

