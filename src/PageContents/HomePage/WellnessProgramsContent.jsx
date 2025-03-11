import React from "react";
import FullCard from "../../Components/Cards/FullCard";
import CustomButton from "../../Components/Buttons/CustomButton";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType"; 

import "../../assets/CSS/HomePageCSS/WellnessProgramsContent.css";


import img1 from "../../assets/Images/YogaSessions.jpg";
import img2 from "../../assets/Images/MeditationClasses.jpg";
import img3 from "../../assets/Images/NutritionPlans.jpg";
import img4 from "../../assets/Images/FitnessTraining.jpg";
import img5 from "../../assets/Images/MentalWellness.jpg";
import img6 from "../../assets/Images/SleepTherapy.jpg";

const WellnessProgramsContent = () => {
  const programs = [
    { image: img1, title: "Yoga Sessions", description: "Daily guided yoga sessions to improve flexibility and mindfulness." },
    { image: img2, title: "Meditation Classes", description: "Learn to meditate and manage stress effectively with expert guidance." },
    { image: img3, title: "Nutrition Plans", description: "Personalized diet plans for a healthy lifestyle and balanced nutrition." },
    { image: img4, title: "Fitness Training", description: "Professional training sessions for strength and endurance building." },
    { image: img5, title: "Mental Wellness", description: "Workshops and activities focused on mental health awareness." },
    { image: img6, title: "Sleep Therapy", description: "Programs to improve sleep quality and promote relaxation." },
  ];

  return (
    <div className="wellness-container">
      <p className="wellnessProgramHeading"><ContentBaseType heading="Our Services" /></p>
      <p className="wellnessProgramTitle"><ContentBaseType content="Empowering you with a healthier lifestyle through personalized programs." /></p>

      {/* Bootstrap Responsive Row */}
      <div className="row g-4 justify-content-center">
        {programs.map((tip, index) => (
          <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
            <FullCard image={tip.image} title={tip.title} description={tip.description} />
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="d-flex justify-content-center mt-4">
        <CustomButton className="wellnessCustomButton" label="Explore More Programs" />
      </div>
    </div>
  );
};

export default WellnessProgramsContent;
