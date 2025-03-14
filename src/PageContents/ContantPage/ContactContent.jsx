import React from "react";
import DynamicForm from "../../Components/Forms/DynamicForm";
import "../../assets/CSS/ContantPageCSS/ContactContent.css";

const ContactContent = () => {
  const formFields = [
    { id: "fullName", key: "text", label: "Full Name", type: "text", class: "col-6 mb-2" },
    { id: "contactNumber", key: "contactNumber", label: "Contact Number", type: "number", class: "col-6 mb-2" },
    { id: "emailAddress", key: "emailAddress", label: "Email Address", type: "email", class: "col-12 mb-2" },
    { id: "subject", key: "text", label: "Subject", type: "text", class: "col-12 mb-2" },
    { id: "message", key: "textarea", label: "Message", type: "textarea", class: "col-12 mb-2" }
  ];

  const handleSubmit = (formData) => {
    console.log("Contact Form Submitted:", formData);
  };

  return (
    <div className="contact-container d-flex flex-column flex-md-row align-items-center justify-content-center p-4">
      {/* Left Side - Info */}
      <div className="contact-info col-md-6 text-center mb-4 mb-md-0">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          We'd love to hear from you! Please fill out the form and we will get back to you as soon as possible.
        </p>
      </div>

      {/* Right Side - Form */}
      <div className="form-container col-md-6 d-flex justify-content-center">
        <div className="bg-white shadow rounded p-4 w-100">
          <DynamicForm formFields={formFields} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
