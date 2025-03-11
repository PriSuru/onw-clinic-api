import React, { useState, useEffect } from "react";
import Select from "react-select";

import CustomButton from "../../Components/Buttons/CustomButton";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType";

import "../../assets/CSS/HomePageCSS/HealthcareApp.css";

import playStore from "../../assets/Images/google-play.png";
import appStore from "../../assets/Images/app-store.png";
import mobileImage from "../../assets/Images/mobile-mockup.png";

const countryCodes = [
    { value: "+91", label: "India (+91)" },
    { value: "+1", label: "USA (+1)" },
    { value: "+44", label: "UK (+44)" },
    { value: "+61", label: "Australia (+61)" },
    { value: "+81", label: "Japan (+81)" },
    { value: "+49", label: "Germany (+49)" },
    { value: "+33", label: "France (+33)" },
    { value: "+39", label: "Italy (+39)" },
    { value: "+7", label: "Russia (+7)" },
];

const HealthcareApp = () => {
    const [selectedOption, setSelectedOption] = useState("email");
    const [inputValue, setInputValue] = useState("");
    const [phoneCode, setPhoneCode] = useState(countryCodes[0]);

    useEffect(() => {
        setInputValue("");
    }, [selectedOption]);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleShareAppLink = () => {
        alert(`App link sent to ${inputValue}`);
    };

    return (
        <div className="app-container container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-5 text-center healthCareAppLeft">
                    <img className="app-image img-fluid" src={mobileImage} alt="HealthCare App" />
                </div>
                <div className="col-12 col-md-6 healthCareAppRight">
                    <p className="app-title text-center text-md-start">Get the HealthCare app</p>
                    <p className="text-center text-md-start mt-3">
                        <ContentBaseType content="Download App from" />
                    </p>
                    <div className="store-icons d-flex justify-content-center justify-content-md-start">
                        <img src={playStore} alt="Google Play Store" className="store-badge" />
                        <img src={appStore} alt="App Store" className="store-badge" />
                    </div>
                    <p className="text-center text-md-start">
                        <ContentBaseType content="Or in case of facing any difficulty we will send you a link" />
                    </p>
                    <div className="radio-group d-flex justify-content-center justify-content-md-start">
                        <label className="form-check-label me-3">
                            <input
                                type="radio"
                                name="appOption"
                                value="email"
                                checked={selectedOption === "email"}
                                onChange={handleOptionChange}
                                className="form-check-input me-1"
                            />
                            Email
                        </label>
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="appOption"
                                value="phone"
                                checked={selectedOption === "phone"}
                                onChange={handleOptionChange}
                                className="form-check-input me-1"
                            />
                            Phone
                        </label>
                    </div>
                    {selectedOption === "email" && (
                        <div className="input-group mt-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            <CustomButton label="Share App Link" onClick={handleShareAppLink} variant="danger" />
                        </div>
                    )}
                    {selectedOption === "phone" && (
                        <div className="input-group mt-3">
                            <Select
                                options={countryCodes}
                                className="react-select-container"
                                classNamePrefix="react-select"
                                value={phoneCode}
                                onChange={setPhoneCode}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your phone number"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            <CustomButton label="Share App Link" onClick={handleShareAppLink} variant="danger" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HealthcareApp;
