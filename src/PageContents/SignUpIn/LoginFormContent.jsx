import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DynamicForm from "../../Components/Forms/DynamicForm";
import "../../assets/CSS/SignUpInCSS/LoginFormContent.css";
import loginImage from "../../assets/Images/loginPage.jpg";

const LoginFormContent = ({ onLogin }) => { // Accept onLogin callback prop
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [formData, setFormData] = useState({
    emailAddress: "test@example.com", // Default email
    password: "password123", // Default password
  });

  const formFields = [
    { key: "emailAddress", label: "Email Address", type: "email" },
    { key: "password", label: "Password", type: "password" },
  ];

  const handleFormSubmit = (submittedData) => {
    console.log("Login Form Submitted:", submittedData);
    alert("Hello");

    // Storing email in sessionStorage upon login
    sessionStorage.setItem("emailAddress", submittedData.emailAddress);


    // Redirect to the home page
    navigate("/"); // "/" refers to the home page
  };

  return (
    <div className="loginContainer py-4">
      <div className="row justify-content-center align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={loginImage} alt="Login" className="img-fluid rounded leftContainer" />
        </div>

        {/* Right Side - Login Form */}
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-center mb-4">Login</h2>
            <div className="form-container">
              <DynamicForm 
                formFields={formFields} 
                onSubmit={handleFormSubmit} 
                initialData={formData} // Passing initial data to the form
              />
            </div>
            <div className="text-center mt-3">
              <a href="/forgot-password" className="text-primary">Forgot Password?</a>
            </div>
            <div className="text-center mt-2">
              <span>Don't have an account? </span>
              <a href="/signupPage" className="text-primary">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormContent;
