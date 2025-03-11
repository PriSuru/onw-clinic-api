import React from "react";
import "../../assets/CSS/CardCSS/SmallCard.css";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType"; // Adjust the import path as needed

const SmallCard = ({ icon, content }) => {
  return (
    <div className="small-card text-center p-2 shadow-sm">
      <div className="text-primary fs-4">{icon}</div>
      <b><ContentBaseType content={content} /></b>
    </div>
  );
};

export default SmallCard;
