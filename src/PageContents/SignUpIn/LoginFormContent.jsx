import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/authSlice";
import DynamicForm from "../../Components/Forms/DynamicForm";
import "../../assets/CSS/SignUpInCSS/LoginFormContent.css";
import loginImage from "../../assets/Images/loginPage.jpg";

const LoginFormContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formFields = [
    { key: "emailAddress", label: "Email Address", type: "email" },
    { key: "password", label: "Password", type: "password" },
  ];

  const defaultFormData = {
    emailAddress: "test@example.com", // Default email
    password: "password123", // Default password
  };

  const handleFormSubmit = (submittedData) => {
    console.log("Login Form Submitted:", submittedData);
    dispatch(login(submittedData.emailAddress)); // Dispatch login action
  
    // Redirect to the home page
    navigate("/");
  };
  
  

  return (
    <div className="loginContainer py-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={loginImage} alt="Login" className="img-fluid rounded leftContainer" />
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-center mb-4">Login</h2>
            <DynamicForm formFields={formFields} onSubmit={handleFormSubmit} initialData={defaultFormData} />
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
