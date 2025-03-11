import React from "react";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType";
import CustomCard from "../../Components/Cards/CustomCard";
import "../../assets/CSS/DoctorsPageCSS/SpecialitiesContent.css";
import neurologistImage from "../../assets/Images/Neurologist.jpg";
import cardiologistImage from "../../assets/Images/Cardiologist.jpg";
import orthopedicImage from "../../assets/Images/Orthopedic.jpg";
import dermatologistImage from "../../assets/Images/Dermatologist.jpg";
import pediatricianImage from "../../assets/Images/Pediatrician.jpg";
import dentistImage from "../../assets/Images/Dentist.jpg";
import psychologistImage from "../../assets/Images/Psychologist.jpg";
import ENTImage from "../../assets/Images/ENT.jpg";

const specialities = [
  { image: cardiologistImage, title: "Cardiology" },
  { image: neurologistImage, title: "Neurology" },
  { image: orthopedicImage, title: "Orthopedics" },
  { image: dermatologistImage, title: "Dermatology" },
  { image: pediatricianImage, title: "Pediatrics" },
  { image: dentistImage, title: "Dentist" },
  { image: psychologistImage, title: "Psychologist" },
  { image: ENTImage, title: "ENT Specialist" },
];

const SpecialitiesContent = () => {
  return (
    <div className="specialitiesContainer">
      <ContentBaseType heading="Our Specialities" />
      <div className="row">
        {specialities.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3 col-lg-3 mb-4">
            <CustomCard image={item.image} title={item.title} buttonLabel="Consult now" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialitiesContent;
