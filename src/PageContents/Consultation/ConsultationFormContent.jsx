import React from 'react';
import DynamicForm from "../../Components/Forms/DynamicForm";
import "../../assets/CSS/ConsultationCSS/ConsultationFormContent.css"; // CSS File Import
import doctorImage from "../../assets/Images/consultation-doctor.jpg"; // Left side image
import ContentBaseType from '../../Components/ContentsType/ContentBaseType';

const ConsultationFormContent = () => {
    const formFields = [
        { id: "fullName", key: "fullName", label: "Full Name", type: "text", class: "col-sm-6 mb-2" },
        { id: "contactNumber", key: "contactNumber", label: "Contact Number", type: "number", class: "col-sm-6 mb-2" },
        { id: "date", key: "date", label: "Date", type: "date", class: "col-sm-6 mb-2" },
        { id: "time", key: "time", label: "Time", type: "time", class: "col-sm-6 mb-2" },
        {
            id: "specialization",
            key: "specialization",
            label: "Specialization",
            type: "select",
            options: ["Bones", "Heart", "XrayHolder"], class: "col-sm-12 mb-2"
        },
        {
            id: "doctorName",
            key: "doctorName",
            label: "Doctor's Name",
            type: "select",
            options: ["Dr. John Doe", "Dr. Smith", "Dr. Emily"], class: "col-sm-6 mb-2"
        },
        {
            id: "consultationType",
            key: "consultationType",
            label: "Consultation Type",
            type: "select",
            options: ["Video Call", "Chat"], class: "col-sm-6 mb-2"
        },
        { id: "reason", key: "reason", label: "Reason", type: "textarea", class: "col-sm-12 mb-2" }
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
                <div className="shadow rounded p-4">
                    <p className="text-center"><ContentBaseType heading="Book a Consultation" /></p>
                    <DynamicForm formFields={formFields} onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
}

export default ConsultationFormContent;
