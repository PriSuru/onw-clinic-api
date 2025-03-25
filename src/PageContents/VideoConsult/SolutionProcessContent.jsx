import React from "react";
import "../../assets/CSS/VideoConsultCSS/SolutionProcessContent.css";
import solutionCard1 from "../../assets/Images/Card1.jpg";
import solutionCard2 from "../../assets/Images/Card2.jpg";
import solutionCard3 from "../../assets/Images/Card3.jpg";

const SolutionProcessContent = () => {
  return (
    <div className="solutionProcessContainer">
      <div className="row">
        <p className="solutionProcessHeading">Process and the Solution</p>

        {/* Card 1 */}
        <div className="col-lg-4">
          <div className="solution-card">
            <div className="solution-header">
              <h5 className="fw-bold">Consult Top Doctors 24x7</h5>
              <div className="solution-number">1</div>
            </div>
            <p className="solution-text">
              Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
            </p>
            <img src={solutionCard1} alt="Book a Free Consultation" className="img-fluid" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4">
          <div className="solution-card">
            <div className="solution-header">
              <h5 className="fw-bold">Convenient and Easy</h5>
              <div className="solution-number">2</div>
            </div>
            <p className="solution-text">
              Start an instant consultation within 2 minutes or do video consultation.
            </p>
            <img src={solutionCard2} alt="Estimate the Calculation" className="img-fluid" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4">
          <div className="solution-card">
            <div className="solution-header">
              <h5 className="fw-bold">100% Safe Consultations</h5>
              <div className="solution-number">3</div>
            </div>
            <p className="solution-text">
              Be assured that your online consultation will be fully private and secured.
            </p>
            <img src={solutionCard3} alt="Subsidy Calculation" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionProcessContent;
