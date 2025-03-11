import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "../../../Components/Buttons/CustomButton";
import "../../../assets/CSS/ServiceCSS/SurgeryCSS/SurgeryProceduresContent.css";
import surgeryImage from "../../../assets/Images/surgeons-woman.jpg"
import MissionToImproveContent from "./MissionToImproveContent";
import BetterEquipmentContent from "./BetterEquipmentContent";
import ExpertSurgeonsContent from "./ExpertSurgeonsContent";
import PostSurgeryCareContent from "./PostSurgeryCareContent";
import PatientCareContent from "./PatientCareContent";

const SurgeryProceduresContent = () => {
    return (
        <div>
            <div className="surgery-content">
                <Container fluid>
                    <Row className="align-items-center">
                        {/* Left Side - Image */}
                        <Col md={6} className="p-0">
                            <img
                                src={surgeryImage}
                                alt="Surgery"
                                className="img-fluid w-100 surgery-image"
                            />
                        </Col>

                        {/* Right Side - Content */}
                        <Col md={6} className="p-4">
                            <div className="surgeryProcedure-Content">
                                <div>
                                    <p className="surgeryProcedureHeading">Advanced</p>
                                    <p className="surgeryProcedureHeading">Surgery</p>
                                    <p className="surgeryProcedureHeading">Procedures</p>
                                    </div>
                                    <CustomButton
                                        label="Explore Now"
                                        onClick={() => alert("Explore button clicked!")}
                                        variant="primary"
                                    />
                            </div>
                            <div className="text-center position-relative description-container">
                                <hr className="left-line" />
                                <p className="description">
                                    Our hospital offers state-of-the-art surgical facilities with the latest
                                    technology and highly skilled surgeons. We ensure the best care and post-surgical
                                    recovery support for our patients.
                                </p>
                                <hr className="right-line" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <MissionToImproveContent />
            <BetterEquipmentContent />
            <ExpertSurgeonsContent />
            <PostSurgeryCareContent />
            <PatientCareContent />
        </div>
    );
};

export default SurgeryProceduresContent;
