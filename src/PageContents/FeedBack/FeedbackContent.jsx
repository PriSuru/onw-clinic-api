import React from "react";
import DynamicForm from "../../Components/Forms/DynamicForm";
import "../../assets/CSS/FeedBackCSS/FeedbackContent.css";

const FeedbackContent = () => {
  const formFields = [
    { key: "fullName", label: "Full Name", type: "text" },
    { key: "emailAddress", label: "Email Address", type: "email" },
    { key: "contactNumber", label: "Contact Number", type: "number" },
    { key: "feedback", label: "Your Feedback", type: "textarea" },
  ];

  const handleSubmit = (formData) => {
    console.log("Feedback Submitted:", formData);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-content">
        <h2>Give Your Feedback</h2>
        <p>We would love to hear your thoughts!</p>
        <DynamicForm formFields={formFields} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default FeedbackContent;
