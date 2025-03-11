import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomeContent from './PageContents/HomePage/HomeContent';
import FindDoctorsContent from './PageContents/DoctorsPage/FindDoctorsContent';
import ConsultationContent from './PageContents/VideoConsult/ConsultationContent';
import SurgeryProceduresContent from './PageContents/Services/Surgery/SurgeryProceduresContent';
import HealthCheckupContent from './PageContents/Services/HealthCheckup/HealthCheckupContent';
import LoginFormContent  from './PageContents/SignUpIn/LoginFormContent';
import SignupFormContent from './PageContents/SignUpIn/SignupContent';
import AppointmentFormContent from './PageContents/Appointments/AppointmentFormContent';
import AppointmentScheduleTable from './PageContents/Appointments/AppointmentScheduleTable';
import ContactContent from './PageContents/ContantPage/ContactContent';

const RoutesContent = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/findDoctors" element={<FindDoctorsContent />} />
          <Route path="/videoConsult" element={<ConsultationContent />} />
          <Route path="/surgeryProcedure" element={<SurgeryProceduresContent />} />
          <Route path="/healthCheckup" element={<HealthCheckupContent />} />
          <Route path="/loginPage" element={<LoginFormContent  />} />
          <Route path="/signupPage" element={<SignupFormContent />} />
          <Route path="/appointmentPage" element={<AppointmentFormContent />} />
          <Route path="/appointmentSchedulePage" element={<AppointmentScheduleTable />} />
          <Route path="/contactPage" element={<ContactContent />} />
        </Routes>
    </div>
  )
}

export default RoutesContent
