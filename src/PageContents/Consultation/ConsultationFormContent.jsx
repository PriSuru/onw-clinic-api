import React from 'react'
import DynamicForm from "../../Components/Forms/DynamicForm";
import "../../assets/CSS/ConsultationCSS/ConsultationFormContent.css"; // CSS File Import
import doctorImage from "../../assets/Images/consultation-doctor.jpg"; // Left side image
import ContentBaseType from '../../Components/ContentsType/ContentBaseType';

const ConsultationFormContent = () => {
    const formFields = [
        { id: "fullName", key: "text", label: "Full Name", type: "text", class: "col-6 mb-2" },
        { id: "contactNumber", key: "contactNumber", label: "Contact Number", type: "number", class: "col-6 mb-2" },
        { id: "date", key: "date", label: "Date", type: "date", class: "col-6 mb-2" },
        { id: "time", key: "time", label: "Time", type: "time", class: "col-6 mb-2" },
        {
            id: "doctorName",
            key: "select",
            label: "Doctor's Name",
            type: "select",
            options: ["Dr. John Doe", "Dr. Smith", "Dr. Emily"], class: "col-12 mb-2"
        },
        {
            id: "type",
            key: "select",
            label: "Type",
            type: "select",
            options: ["Bones", "Heart", "XrayHolder"], class: "col-6 mb-2"
        },,
        {
            id: "type",
            key: "select",
            label: "Type",
            type: "select",
            options: ["Video Call", "Chat"], class: "col-6 mb-2"
        },
        { id: "reason", key: "textarea", label: "Reason", type: "textarea", class: "col-12 mb-2" }
    ];

    const handleSubmit = (formData) => {
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="consultation-container d-flex flex-column flex-md-row align-items-center justify-content-center">
            {/* Left Side Image */}
            <div className="image-container col-md-6 d-flex align-items-center justify-content-center">
                <img src={doctorImage} alt="Doctor" className="doctor-image img-fluid rounded" />
            </div>

            {/* Right Side Form */}
            <div className="consultation-form-container col-md-6 d-flex justify-content-center">
                <div className="bg-white shadow rounded p-4">
                    <p className="text-center"><ContentBaseType heading="Book an Consultation" /></p>
                    <DynamicForm formFields={formFields} onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
}

export default ConsultationFormContent
