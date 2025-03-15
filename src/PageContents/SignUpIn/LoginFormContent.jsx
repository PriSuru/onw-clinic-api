import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/authSlice";
import DynamicForm from "../../Components/Forms/DynamicForm";
import "../../assets/CSS/SignUpInCSS/LoginFormContent.css";
import loginImage from "../../assets/Images/loginPage.jpg";

const LoginFormContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isOtpLogin, setIsOtpLogin] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [contactNumber, setContactNumber] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/bookAppointment");
    }
  }, [isAuthenticated, navigate]);

  const formFields = isOtpLogin
    ? otpSent
      ? [
          { key: "contactNumber", label: "Contact Number", type: "text", disabled: true, value: contactNumber, class: "col-12 mb-2" },
          { key: "otp", label: "Enter OTP", type: "text", class: "col-12 mb-2" },
        ]
      : [{ key: "contactNumber", label: "Contact Number", type: "text", class: "col-12 mb-2" }]
    : [
        { key: "emailAddress", label: "Email Address", type: "email", class: "col-12 mb-2" },
        { key: "password", label: "Password", type: "password", class: "col-12 mb-2" },
      ];

  const defaultFormData = isOtpLogin
    ? otpSent
      ? { contactNumber, otp: "" }
      : { contactNumber: "" }
    : { emailAddress: "test@example.com", password: "password123" };

  const handleFormSubmit = (submittedData) => {
    if (isOtpLogin) {
      if (!otpSent) {
        setContactNumber(submittedData.contactNumber);
        setOtpSent(true);
      } else {
        dispatch(login(submittedData.contactNumber));
      }
    } else {
      dispatch(login(submittedData.emailAddress));
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
            {isOtpLogin && otpSent && (
              <p className="text-success text-center mt-2">OTP sent to {contactNumber}</p>
            )}
            <p className="text-center mt-2">
              <button
                className="btn btn-link text-primary"
                onClick={() => {
                  setIsOtpLogin((prev) => !prev);
                  setOtpSent(false);
                  setContactNumber("");
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
