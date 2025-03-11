import React, { useState } from "react";
import DynamicForm from "../../Components/Forms/DynamicForm";
import "../../assets/CSS/SignUpInCSS/SignupFormContent.css";
import signupImage from "../../assets/Images/signup-illustration.jpg";
import { useCreateData } from "../../ApiService/apiHooks"; // Assuming you've set up the hook for API calls

const SignupFormContent = () => {
  const [showDoctorOption, setShowDoctorOption] = useState(true);
  const { mutate: createUser } = useCreateData("users", "users"); // useMutation hook to create data

  const formFields = [
    { key: "fullName", label: "Full Name", type: "text" },
    { key: "emailAddress", label: "Email Address", type: "email" },
    { key: "contactNumber", label: "Contact Number", type: "number" }
  ];

  // Handle form data and submit to the API
  const handleFormSubmit = (formData) => {
    // Format data for the API
    const userData = {
      userName: formData.fullName,
      userEmailAddress: formData.emailAddress,
      userContantNumber: formData.contactNumber
    };

    // Call the API to create a user
    createUser(userData, {
      onSuccess: () => {
        console.log("User created successfully!");
        // You can add success logic, like redirecting or showing a success message
      },
      onError: (error) => {
        console.error("Error creating user:", error);
      }
    });
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
