import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import DynamicForm from "../../Components/Forms/DynamicForm";
import CustomButton from "../../Components/Buttons/CustomButton";
import "../../assets/CSS/AppointmentsCSS/BookAppointmentPopup.css";

const BookAppointmentPopupContent = ({ show, handleClose, doctor }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: doctor?.doctorName || "",
  });
  
  useEffect(() => {
    const storedEmail = sessionStorage.getItem("emailAddress");
    if (storedEmail) {
      setFormData((prev) => ({ ...prev, patientName: storedEmail }));
    }
  }, [doctor]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const formFields = [
    { id: 1, key: "patientName", label: "Patient Name", type: "text", class: "col-md-6 mb-2", readOnly: true, value: formData.patientName },
    { id: 2, key: "doctorName", label: "Doctor Name", type: "text", class: "col-md-6 mb-2", readOnly: true, value: formData.doctorName },
    { id: 3, key: "appointmentDate", label: "Appointment Date", type: "date", class: "col-md-6 mb-2", onChange: handleDateChange },
  ];

  if (selectedDate) {
    formFields.push({ id: 4, key: "appointmentTime", label: "Appointment Time", type: "time", class: "col-md-6 mb-2" });
  }

  formFields.push(
    { id: 5, key: "complaints", label: "Complaints", type: "textarea", class: "col-md-12 mb-2" },
    { id: 6, key: "shareDocuments", label: "Share Documents", type: "file", class: "col-md-12 mb-2" },
    { id: 7, key: "paymentMode", label: "Payment Mode", type: "select", class: "col-md-12 mb-2", options: ["Cash", "Card", "UPI"] }
  );

  const handleSubmit = (formData) => {
    console.log("Appointment Data:", formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Book Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DynamicForm formFields={formFields} onSubmit={handleSubmit} />
        <div className="d-flex justify-content-between mt-3">
          <CustomButton label="Cancel" onClick={handleClose} variant="secondary" />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BookAppointmentPopupContent;
