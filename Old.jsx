import React, { useState } from "react";
import DynamicForm from "../../Components/Forms/DynamicForm";
import "../../assets/CSS/SignUpInCSS/SignupFormContent.css";
import signupImage from "../../assets/Images/signup-illustration.jpg";

const SignupFormContent = () => {
  const [showDoctorOption, setShowDoctorOption] = useState(true);

  const formFields = [
    { id: "userName", label: "Full Name", type: "text" },
    { id: "userEmailAddress", label: "Email Address", type: "email" },
    { id: "userContantNumber", label: "Contact Number", type: "number" }
  ];

  const handleFormSubmit = (formData) => {
    // Form validation before sending data
    if (!formData.userName || !formData.userEmailAddress || !formData.userContantNumber) {
      console.log("Form fields are missing or invalid.");
      return; // Prevent submitting the form if any field is missing or invalid
    }
  
    const dataToSend = {
      userName: formData.userName,
      userEmailAddress: formData.userEmailAddress,
      userContantNumber: formData.userContantNumber,
    };
  
    console.log("Data to send:", dataToSend); // Log the data
  
    mutate(dataToSend);
  };
  

  return (
    <div className="signupContainer py-4">
      <div className="row justify-content-center align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={signupImage} alt="Signup" className="img-fluid rounded" />
        </div>

        {/* Right Side - Signup Form */}
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-4 bg-white shadow rounded form-container">
            <h2 className="text-center mb-4">Signup Form</h2>
            {showDoctorOption && (
              <p className="text-center loginOptionCenter">
                  <span className="doctorOption">Are you a Doctor?</span>
                  <a href="#" onClick={() => setShowDoctorOption(false)}>
                    <span className="doctorOptionSignup">Signup</span>
                  </a>
              </p>
            )}
            <DynamicForm formFields={formFields} onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupFormContent;