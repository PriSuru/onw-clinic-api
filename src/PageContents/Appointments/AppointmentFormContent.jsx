import React from "react";
import DynamicForm from "../../Components/Forms/DynamicForm";
import "../../assets/CSS/AppointmentsCSS/AppointmentFormContent.css"; // CSS File Import
import doctorImage from "../../assets/Images/appointment-doctor.jpg"; // Left side image

const AppointmentFormContent = () => {
    const formFields = [
        { id: "fullName", label: "Full Name", type: "text" },
        { id: "lastName", label: "Last Name", type: "text" },
        { id: "contactNumber", label: "Contact Number", type: "number" },
        { id: "date", label: "Date", type: "date" },
        { id: "time", label: "Time", type: "time" },
        {
            id: "doctorName",
            label: "Doctor's Name",
            type: "select",
            options: ["Dr. John Doe", "Dr. Smith", "Dr. Emily"],
        },
        {
            id: "type",
            label: "Type",
            type: "select",
            options: ["Bones", "Heart", "XrayHolder"],
        },
        { id: "reason", label: "Reason", type: "textarea" }
    ];

    const handleSubmit = (formData) => {
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="appointment-container d-flex flex-column flex-md-row align-items-center justify-content-center">
            {/* Left Side Image */}
            <div className="image-container col-md-6 d-flex align-items-center justify-content-center">
                <img src={doctorImage} alt="Doctor" className="doctor-image img-fluid rounded" />
            </div>

            {/* Right Side Form */}
            <div className="form-container col-md-6 d-flex justify-content-center">
                <div className="bg-white shadow rounded p-4">
                    <h2 className="appointment-title text-center">Book an Appointment</h2>
                    <DynamicForm formFields={formFields} onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default AppointmentFormContent;
