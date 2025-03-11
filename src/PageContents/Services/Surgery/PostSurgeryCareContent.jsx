import React from "react";
import { Row, Col } from "react-bootstrap";
import CustomCard from "../../../Components/Cards/CustomCard";
import CustomButton from "../../../Components/Buttons/CustomButton";
import "../../../assets/CSS/ServiceCSS/SurgeryCSS/PostSurgeryCareContent.css";

const PostSurgeryCareContent = () => {
    const cardData = [
        {
            title: "Follow-Up Appointments",
            description: "Schedule regular follow-ups with your surgeon to monitor your recovery progress.",
            buttonLabel: "Book an Appointment"
        },
        {
            title: "Medication Management",
            description: "Ensure you follow the prescribed medication schedule to avoid complications.",
            buttonLabel: "View Medication"
        },
        {
            title: "Healthy Diet and Hydration",
            description: "Maintain a balanced diet and stay hydrated to support your healing process.",
            buttonLabel: "Get Nutritional Tips"
        },
        {
            title: "Physical Therapy",
            description: "Follow the physical therapy plan to regain mobility and strength post-surgery.",
            buttonLabel: "Schedule Therapy"
        }
    ];

    return (
        <div className="postSurgeryCareContainer">
            <p className="postSurgeryCareHeading">Post-Surgery Care: Ensuring a Safe Recovery</p>
            <Row>
                {cardData.map((card, index) => (
                    <Col sm={12} md={6} lg={3} className="postSurgeryCareCard" key={index}>
                        <CustomCard {...card} />
                    </Col>
                ))}
            </Row>
            <Row className="text-center mt-5">
                <Col sm={12}>
                    <h3>Need Assistance?</h3>
                    <p>If you need any help or have questions about your recovery, don't hesitate to reach out!</p>
                    <CustomButton label="Contact Us" onClick={() => alert("Explore button clicked!")} variant="primary" />
                </Col>
            </Row>
        </div>
    );
};

export default PostSurgeryCareContent;
