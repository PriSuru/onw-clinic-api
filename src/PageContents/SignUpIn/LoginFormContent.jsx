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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userType = sessionStorage.getItem("user_type");
    if (isAuthenticated) {
      if (userType === "doctor") {
        navigate("/doctorDashboard");
      } else if (userType === "patient") {
        navigate("/bookAppointment");
      } else {
        navigate("/staffDashboard");
      }
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // Load user data from user_data.json
    fetch("/user_data.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error loading user data:", error));
  }, []);

  const formFields = isOtpLogin
    ? otpSent
      ? [
          { key: "contactNumber", label: "Contact Number", type: "text", disabled: true, value: contactNumber, class: "col-12 mb-2" },
          { key: "otp", label: "Enter OTP", type: "text", class: "col-12 mb-2" },
        ]
      : [{ key: "contactNumber", label: "Contact Number", type: "text", class: "col-12 mb-2" }]
    : [
        { key: "email_address", label: "Email Address", type: "email", class: "col-12 mb-2" },
        { key: "password", label: "Password", type: "password", class: "col-12 mb-2" },
      ];

  const defaultFormData = isOtpLogin
    ? otpSent
      ? { contactNumber, otp: "" }
      : { contactNumber: "" }
    : { email_address: "", password: "" };

  const handleFormSubmit = (submittedData) => {
    let user = null;

    if (isOtpLogin) {
      if (!otpSent) {
        setContactNumber(submittedData.contactNumber);
        setOtpSent(true);
        return;
      } else {
        user = users.find((u) => u.email_address === submittedData.contactNumber);
      }
    } else {
      user = users.find(
        (u) =>
          u.email_address === submittedData.email_address &&
          u.password === submittedData.password
      );
    }

    if (user) {
      sessionStorage.setItem("email_address", user.email_address);
      sessionStorage.setItem("user_type", user.user_type);
      dispatch(login({ email: user.email_address, userType: user.user_type }));

      if (user.user_type === "doctor") {
        navigate("/doctorDashboard");
      } else if (user.user_type === "patient") {
        navigate("/bookAppointment");
      } else {
        navigate("/staffDashboard");
      }
    } else {
      alert("Invalid Credentials!");
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
