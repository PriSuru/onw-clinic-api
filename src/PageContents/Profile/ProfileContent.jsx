import React from "react";
import "../../assets/CSS/ProfileCSS/ProfileContent.css";
import DynamicForm from "../../Components/Forms/DynamicForm";
import profileImage from "../../assets/Images/profilePage.jpg";

const ProfileContent = () => {
  const formFields = [
    { key: "fullName", label: "Full Name", type: "text" },
    { key: "emailAddress", label: "Email Address", type: "email" },
    { key: "contactNumber", label: "Contact Number", type: "number" },
    { key: "password", label: "Password", type: "password" },
    { key: "address", label: "Address", type: "textarea" },
    { key: "city", label: "City", type: "text" },
    { key: "state", label: "State", type: "text" },
    { key: "country", label: "Country", type: "text" },
    { key: "zipCode", label: "Zip Code", type: "number" },
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
          <div className="p-4 bg-white shadow rounded profile-form">
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
