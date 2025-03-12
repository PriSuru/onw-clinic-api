import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/authSlice";
import DynamicForm from "../../Components/Forms/DynamicForm";
import "../../assets/CSS/SignUpInCSS/LoginFormContent.css";
import loginImage from "../../assets/Images/loginPage.jpg";

const LoginFormContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOtpLogin, setIsOtpLogin] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // OTP sent state

  const formFields = isOtpLogin
    ? otpSent
      ? [
          { key: "contactNumber", label: "Contact Number", type: "text", disabled: true },
          { key: "otp", label: "Enter OTP", type: "text" },
        ]
      : [{ key: "contactNumber", label: "Contact Number", type: "text" }]
    : [
        { key: "emailAddress", label: "Email Address", type: "email" },
        { key: "password", label: "Password", type: "password" },
      ];

  const defaultFormData = isOtpLogin
    ? otpSent
      ? { contactNumber: "", otp: "" }
      : { contactNumber: "" }
    : { emailAddress: "test@example.com", password: "password123" };

    const handleFormSubmit = (submittedData) => {
      console.log("Login Form Submitted:", submittedData);
    
      if (isOtpLogin) {
        if (!otpSent) {
          alert(`OTP sent to ${submittedData.contactNumber}`);
          setOtpSent(true); // OTP sent, now show OTP input
        } else {
          alert(`Verifying OTP: ${submittedData.otp}`);
          // Verify OTP logic here (Assume OTP is correct)
          dispatch(login(submittedData.contactNumber)); // Dispatch login
          navigate("/"); // Redirect after login
        }
      } else {
        dispatch(login(submittedData.emailAddress));
        navigate("/");
      }
    };
    

  return (
    <div className="loginContainer py-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={loginImage} alt="Login" className="img-fluid rounded leftContainer" />
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-center mb-4">{isOtpLogin ? "Login with OTP" : "Login"}</h2>
            <DynamicForm formFields={formFields} onSubmit={handleFormSubmit} initialData={defaultFormData} />
            <p className="text-center mt-2">
              <button
                className="btn btn-link text-primary"
                onClick={() => {
                  setIsOtpLogin((prev) => !prev);
                  setOtpSent(false); // Reset OTP state
                }}
              >
                {isOtpLogin ? "Login with Email & Password" : "Login with OTP"}
              </button>
            </p>
            {!isOtpLogin && (
              <div className="text-center mt-3">
                <a href="/forgot-password" className="text-primary">
                  Forgot Password?
                </a>
              </div>
            )}
            <div className="text-center mt-2">
              <span>Don't have an account? </span>
              <a href="/signupPage" className="text-primary">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormContent;
