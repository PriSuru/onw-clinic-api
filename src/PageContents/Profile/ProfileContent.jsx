import React from "react";
import "../../assets/CSS/ProfileCSS/ProfileContent.css";
import DynamicForm from "../../Components/Forms/DynamicForm";
import profileImage from "../../assets/Images/profilePage.jpg";

const ProfileContent = () => {
  const formFields = [
    { key: "fullName", label: "Full Name", type: "text", class: "col-sm-6 mb-2" },
    { key: "emailAddress", label: "Email Address", type: "email", class: "emailType col-sm-6 mb-2" },
    { key: "contactNumber", label: "Contact Number", type: "number", class: "phoneNumber col-sm-6 mb-2" },
    { key: "password", label: "Password", type: "password", class: "typePassword col-sm-6 mb-2" },
    { key: "gender", label: "Gender", type: "radio", options: ["Male", "Female", "Other"], class: "col-sm-11 mb-2" },
    { key: "address", label: "Address", type: "textarea", class: "addressType col-sm-12 mb-2 mt-2" },
    { key: "city", label: "City", type: "text", class: "cityType col-sm-6 mb-2" },
    { key: "state", label: "State", type: "text", class: "col-sm-6 mb-2" },
    { key: "country", label: "Country", type: "text", class: "col-sm-6 mb-2" },
    { key: "zipCode", label: "Zip Code", type: "number", class: "col-sm-6 mb-2" },
    { key: "profilePicture", label: "Profile Picture", type: "file" },
  ];
  

  const handleSubmit = (data) => {

    alert('hey');
    console.log("Profile Updated:", data);
  };

  return (
    <div className="profileContainer py-4">
      <div className="row justify-content-center align-items-center">
        {/* Left Side - Form */}
        <div className="col-md-6 d-flex justify-content-center">
          <div className="p-4 shadow rounded profile-form">
            <h2 className="text-center mb-4">Edit Profile</h2>
            <DynamicForm formFields={formFields} onSubmit={handleSubmit} />
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={profileImage} alt="Profile" className="img-fluid rounded profileImage" />
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
