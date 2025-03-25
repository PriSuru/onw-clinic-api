import React from "react";
import "../../assets/CSS/ButtonCSS/CustomButton.css";

const CustomButton = ({ label="Submit", onClick, variant = "primary" }) => {
  return (
    <button className={`btn btn-${variant} custom-btn`} onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;
