import React from "react";
import FullCard from "../../Components/Cards/FullCard";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType"
import "../../assets/CSS/DoctorsPageCSS/TestimonialContent.css";
import patientImage1 from "../../assets/Images/Patient1.jpg"
import patientImage2 from "../../assets/Images/Patient2.jpg"
import patientImage3 from "../../assets/Images/Patient3.jpg"
import patientImage4 from "../../assets/Images/Patient4.jpg"

const testimonials = [
  {
    image: patientImage1,
    title: "Great Service!",
    description: "I had an amazing experience. Highly recommend!",
    rating: "⭐⭐⭐⭐⭐",
    name: "John Doe",
  },
  {
    image: patientImage2,
    title: "Excellent Support",
    description: "The support team was very helpful and responsive.",
    rating: "⭐⭐⭐⭐",
    name: "Jane Smith",
  },
  {
    image: patientImage3,
    title: "Fantastic Experience",
    description: "Loved the seamless process and the great UI design!",
    rating: "⭐⭐⭐⭐⭐",
    name: "Michael Brown",
  },
  {
    image: patientImage4,
    title: "User Friendly",
    description: "The interface is very easy to use and intuitive.",
    rating: "⭐⭐⭐⭐",
    name: "Emily Davis",
  },
  {
    image: patientImage1,
    title: "Highly Recommended",
    description: "Would definitely use this service again!",
    rating: "⭐⭐⭐⭐⭐",
    name: "Chris Wilson",
  },
  {
    image: patientImage2,
    title: "Loved it!",
    description: "A wonderful experience from start to finish.",
    rating: "⭐⭐⭐⭐⭐",
    name: "Sophia Martinez",
  },
];

const TestimonialContent = () => {
  return (
    <div className="testimonial-container">
      <p className="testimonialHeading text-center"><ContentBaseType heading="What Our Patients Say" /></p>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-md-4 mb-4">
            <FullCard
              image={testimonial.image}
              title={testimonial.title}
              description={
                <>
                  <p>{testimonial.description}</p>
                  <p className="testimonial-rating">{testimonial.rating}</p>
                  <p className="testimonial-name">- {testimonial.name}</p>
                </>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialContent;
