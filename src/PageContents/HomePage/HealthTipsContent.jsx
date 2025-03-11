import React from "react";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType";
import CustomCard from "../../Components/Cards/CustomCard";
import "../../assets/CSS/HomePageCSS/HealthTipsContent.css";
import img1 from "../../assets/Images/drinking-water-filter.jpg";
import img2 from "../../assets/Images/How-To-Eat-Balanced-Diet.jpg";
import img3 from "../../assets/Images/Untitled-design-10.jpg";
import img4 from "../../assets/Images/819d4389-c178-4e3d-8c3e-a48569c538d0.jpg";
import img5 from "../../assets/Images/images.jpeg";
import img6 from "../../assets/Images/Avoid Junk Food.jpeg";

const healthTips = [
    { image: img1, title: "Stay Hydrated", description: "Drink at least 8 glasses of water every day to stay healthy." },
    { image: img2, title: "Eat Healthy", description: "Include fruits and vegetables in your daily diet." },
    { image: img3, title: "Regular Exercise", description: "Engage in physical activities for at least 30 minutes daily." },
    { image: img4, title: "Proper Sleep", description: "Ensure 7-8 hours of sleep for better mental health." },
    { image: img5, title: "Mental Well-being", description: "Practice meditation and deep breathing exercises." },
    { image: img6, title: "Avoid Junk Food", description: "Limit processed and sugary foods for a healthy body." },
];

const HealthTipsContent = () => {
    return (
        <div className="health-tips-container">

            <p className="healthTipsHeading"><ContentBaseType heading="Health Tips for a Better Life" /></p>
            <p className="healthTipsTitle"><ContentBaseType content="Simple habits for a healthier and happier lifestyle." /></p>

            <div className="row g-4 justify-content-center healthTipsTitle">
                {healthTips.map((tip, index) => (
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                        <CustomCard image={tip.image} title={tip.title} description={tip.description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthTipsContent;
