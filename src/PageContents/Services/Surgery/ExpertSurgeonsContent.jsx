import React from "react";
import { Row, Col } from "react-bootstrap";
import FullCard from "../../../Components/Cards/FullCard";
import "../../../assets/CSS/ServiceCSS/SurgeryCSS/ExpertSurgeonsContent.css";
import expertSurgeonImage1 from "../../../assets/Images/surgeon1.jpg";
import expertSurgeonImage2 from "../../../assets/Images/surgeon2.jpg";
import expertSurgeonImage3 from "../../../assets/Images/surgeon3.jpg";

const ExpertSurgeonsContent = () => {
    const surgeons = [
        {
            id: 1,
            name: "Dr. Rajesh Sharma",
            specialization: "Cardiac Surgeon",
            experience: "15+ years of experience",
            image: expertSurgeonImage1,
        },
        {
            id: 2,
            name: "Dr. Anil Verma",
            specialization: "Neurosurgeon",
            experience: "12+ years of experience",
            image: expertSurgeonImage2,
        },
        {
            id: 3,
            name: "Dr. Priya Mehta",
            specialization: "Orthopedic Surgeon",
            experience: "18+ years of experience",
            image: expertSurgeonImage3,
        },
    ];

    return (
        <div className="expertSurgeonsContainer">
            <p className="expertSurgeonsHeading">Meet Our Expert Surgeons</p>
            <Row>
                {surgeons.map((surgeon) => (
                    <Col sm={12} md={6} lg={4} key={surgeon.id}>
                        <FullCard 
                            image={surgeon.image} 
                            title={surgeon.name} 
                            description={surgeon.specialization} 
                            content={surgeon.experience} 
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ExpertSurgeonsContent;
