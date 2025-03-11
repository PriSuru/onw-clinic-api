import React from "react";
import CustomCard from "../../Components/Cards/CustomCard";
import "../../assets/CSS/VideoConsultCSS/HealthBlogsContent.css";
import healthBlogImage1 from "../../assets/Images/HealthBlog1.jpg";
import healthBlogImage2 from "../../assets/Images/HealthBlog2.jpg";
import healthBlogImage3 from "../../assets/Images/HealthBlog3.jpg";

const blogs = [
  {
    id: 1,
    title: "5 Tips for a Healthy Lifestyle",
    description: "Simple steps to improve your overall well-being.",
    image: healthBlogImage1,
  },
  {
    id: 2,
    title: "Importance of Mental Health",
    description: "How to take care of your mental well-being every day.",
    image: healthBlogImage2,
  },
  {
    id: 3,
    title: "Superfoods for Better Immunity",
    description: "Boost your immune system with these nutritious foods.",
    image: healthBlogImage3,
  },
];

const HealthBlogsContent = () => {
  return (
    <div>
      <div className="health-blogs">
        <div className="healthBlogcontainer">
          <div className="text-center mb-5">
            <p className="healthBlogHeading">Health Blogs & Articles</p>
            <p className="healthBlogTitle">
              Stay informed with our latest health tips and wellness articles.
            </p>
          </div>
          <div className="row g-4 justify-content-center healthBlogTitle">
                {blogs.map((tip, index) => (
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                        <CustomCard image={tip.image} title={tip.title} description={tip.description} buttonLabel="Read More" />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default HealthBlogsContent;
