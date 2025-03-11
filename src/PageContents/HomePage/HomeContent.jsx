import React, { useState } from "react";
import { FaShieldAlt, FaTruck, FaFileMedical, FaUserMd, FaSearch, FaMapMarkerAlt } from "react-icons/fa";

import img1 from "../../assets/Images/homeSlider1.png";
import img2 from "../../assets/Images/homeSlider2.jpg";
import img3 from "../../assets/Images/homeSlider3.jpg";

import "../../assets/CSS/HomePageCSS/HomeContent.css";

import CustomSlider from "../../Components/Slider/CustomSlider";
import SmallCard from "../../Components/Cards/SmallCard";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType";
import HealthcareApp from "./HealthcareApp";
import HealthTipsContent from "./HealthTipsContent";
import WellnessProgramsContent from "./WellnessProgramsContent";
import Testimonials from "./Testimonials";

const images = [img1, img2, img3];

const HomeContent = () => {
  const [doctor, setDoctor] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div>
    <div className="search-container">
      <div className="input-box firstSearchInput">
        <FaMapMarkerAlt className="input-icon" />
        <input
          className="locationFind"
          type="text"
          placeholder="Search Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="input-box doctorFind">
        <FaSearch className="input-icon" />
        <input
          type="text"
          placeholder="Search doctors, clinics, hospitals"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />
      </div>
    </div>


      <div className="home-container">
        <div className="home-overlay">
          <p className="home-heading"><ContentBaseType heading="Welcome to Our Clinic" /></p>
          <p className="home-text"><ContentBaseType content="Find the best products at unbeatable prices." /></p>
          <div className="small-card-container">
            <SmallCard content="100% Safe & Hygienic" icon={<FaShieldAlt />} />
            <SmallCard content="Home Sample Pick Up" icon={<FaTruck />} />
            <SmallCard content="View Reports Online" icon={<FaFileMedical />} />
            <SmallCard content="Free Doctor Consultation" icon={<FaUserMd />} />
          </div>
          {/* <CustomButton className="custom-btn" label="Learn More" /> */}
        </div>

        {/* Slider ko responsive banane ke liye */}
        <div className="slider-wrapper">
          <CustomSlider images={images} />
        </div>
      </div>
      <WellnessProgramsContent />
      <HealthTipsContent />
      <Testimonials />
      <HealthcareApp />
    </div>
  );
};

export default HomeContent;
