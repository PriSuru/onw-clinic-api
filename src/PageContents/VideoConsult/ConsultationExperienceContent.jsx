import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../assets/CSS/VideoConsultCSS/ConsultationExperienceContent.css";

const ConsultationExperienceContent = () => {
  const testimonials = [
    { id: 1, profileImage: "https://via.placeholder.com/100", name: "Anamika Bajpai", comment: "Excellent experience consulting on Practo. Highly recommended!" },
    { id: 2, profileImage: "https://via.placeholder.com/100", name: "Maitreyi Purohit", comment: "I got answers to all my medical queries. Definitely recommend Practo." },
    { id: 3, profileImage: "https://via.placeholder.com/100", name: "Mr. Bismoy Murasing", comment: "The consultation was great. Happy with the experience!" },
    { id: 4, profileImage: "https://via.placeholder.com/100", name: "Neha Sharma", comment: "Quick and efficient consultation. Practo is amazing!" },
    { id: 5, profileImage: "https://via.placeholder.com/100", name: "Rahul Verma", comment: "Very helpful doctors. Solved my issue instantly." },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <div className="consultationExperienceContainer">
      <h2 className="consultationExperienceHeading">Consultation Experience</h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        showDots
        containerClass="carousel-container"
        customTransition="transform 500ms ease-in-out"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {testimonials.map((item) => (
          <div key={item.id} className="consultationExperienceCarouselItem">
            <img src={item.profileImage} alt={item.name} />
            <h6>{item.name}</h6>
            <p>{item.comment}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ConsultationExperienceContent;
