import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeContent from "./PageContents/HomePage/HomeContent";
import FindDoctorsContent from "./PageContents/DoctorsPage/FindDoctorsContent";
import ConsultationContent from "./PageContents/VideoConsult/ConsultationContent";
import SurgeryProceduresContent from "./PageContents/Services/Surgery/SurgeryProceduresContent";
import HealthCheckupContent from "./PageContents/Services/HealthCheckup/HealthCheckupContent";
import LoginFormContent from "./PageContents/SignUpIn/LoginFormContent";
import SignupFormContent from "./PageContents/SignUpIn/SignupContent";
import AppointmentFormContent from "./PageContents/Appointments/AppointmentFormContent";
import ContactContent from "./PageContents/ContantPage/ContactContent";
import ProfileContent from "./PageContents/Profile/ProfileContent";
import MyReportContent from "./PageContents/Report/MyReportContent";
import OnlineConsultationContent from "./PageContents/Consultation/OnlineConsultationContent";
import ConsultationFormContent from "./PageContents/Consultation/ConsultationFormContent";
import FeedbackContent from "./PageContents/FeedBack/FeedbackContent";
import { DoctorsAppointmentContent, generateDoctorDetails } from "./PageContents/Appointments/DoctorsAppointmentContent";
import AppointmentScheduleTable from "./PageContents/Appointments/AppointmentScheduleTable";

// Function to check if user is logged in
const isAuthenticated = () => {
  return sessionStorage.getItem("token") !== null; // Adjust this based on how you store authentication data
};

const RoutesContent = () => {
  return (
    <div>
      <Routes>
        {/* Conditionally render HomeContent or DoctorsAppointmentContent */}
        <Route
          path="/"
          element={
            isAuthenticated() ? (
              <DoctorsAppointmentContent doctors={generateDoctorDetails()} />
            ) : (
              <HomeContent />
            )
          }
        />
        <Route path="/findDoctors" element={<FindDoctorsContent />} />
        <Route path="/videoConsult" element={<ConsultationContent />} />
        <Route path="/surgeryProcedure" element={<SurgeryProceduresContent />} />
        <Route path="/healthCheckup" element={<HealthCheckupContent />} />
        <Route path="/loginPage" element={<LoginFormContent />} />
        <Route path="/signupPage" element={<SignupFormContent />} />

        <Route path="/appointmentPage" element={<AppointmentFormContent />} />
        <Route path="/appointmentSchedulePage" element={<AppointmentScheduleTable />} />
        <Route path="/bookAppointment" element={<DoctorsAppointmentContent doctors={generateDoctorDetails()} />} />

        <Route path="/contactPage" element={<ContactContent />} />
        <Route path="/profile" element={<ProfileContent />} />
        <Route path="/reportView" element={<MyReportContent />} />
        <Route path="/consultOnline" element={<OnlineConsultationContent />} />
        <Route path="/consultationPage" element={<ConsultationFormContent />} />
        <Route path="/feedBackPage" element={<FeedbackContent />} />
      </Routes>
    </div>
  );
};

export default RoutesContent;