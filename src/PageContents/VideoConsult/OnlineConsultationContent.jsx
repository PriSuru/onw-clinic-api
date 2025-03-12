import React, { useState } from "react";
import { CCard, CCardBody, CButton } from "@coreui/react";
import "../../assets/CSS/VideoConsultCSS/OnlineConsultationContent.css";
import DynamicTable from "../../Components/Table/DynamicTable";
import CustomButton from "../../Components/Buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType";

const OnlineConsultationContent = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  
  const [consultations, setConsultations] = useState([
    { id: 1, "Patient Name": "John Doe", Email: "john@example.com", Phone: "1234567890", Date: "2025-03-12", Time: "10:00 AM", Doctor: "Dr. Smith", Reason: "Fever", Type: "Chat" },
    { id: 2, "Patient Name": "Jane Smith", Email: "jane@example.com", Phone: "9876543210", Date: "2025-03-13", Time: "11:00 AM", Doctor: "Dr. Brown", Reason: "Headache", Type: "Video Call" }
  ]);

  const handleDelete = (id) => {
    setConsultations(consultations.filter((consultate) => consultate.id !== id));
  };

  const columns = ["SNO", "Patient Name", "Email", "Phone", "Doctor", "Reason", "Date", "Time", "Type", "Actions"];

  const dataWithActions = consultations.map((consultate, index) => ({
    SNO: index + 1,
    ...consultate,
    Actions: <CButton color="danger" size="sm" onClick={() => handleDelete(consultate.id)}>Delete</CButton>
  }));

  return (
    <div className="online-consultation-container">
      <CCard className="shadow-lg">
        <CCardBody>
          <p className="text-center"><ContentBaseType heading="Online Consultation" /></p>
          <DynamicTable columns={columns} data={dataWithActions} />
          <div className="onlineConsultationButton">
            <CustomButton label="Book Consultation" onClick={() => navigate("/consultationPage")} variant="primary" />
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default OnlineConsultationContent;
