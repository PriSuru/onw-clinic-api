import React, { useState } from "react";
import { CCard, CCardBody, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton } from "@coreui/react";
import "../../assets/CSS/AppointmentsCSS/AppointmentScheduleTable.css";

const AppointmentScheduleTable = () => {
    const [appointments, setAppointments] = useState([
        { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", doctor: "Dr. Smith", date: "2025-03-10", time: "10:00 AM" },
        { id: 2, name: "Jane Doe", email: "jane@example.com", phone: "987-654-3210", doctor: "Dr. Johnson", date: "2025-03-11", time: "11:00 AM" },
    ]);

    const handleDelete = (id) => {
        setAppointments(appointments.filter((appointment) => appointment.id !== id));
    };

    return (
        <div className="appointmentSchedule-container">
            <CCard className="shadow-lg">
                <CCardBody>
                    <h2 className="text-center">Appointment Schedule</h2>
                    <CTable responsive hover striped className="appointmentSchedule-table">
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell>#</CTableHeaderCell>
                                <CTableHeaderCell>Name</CTableHeaderCell>
                                <CTableHeaderCell>Email</CTableHeaderCell>
                                <CTableHeaderCell>Phone</CTableHeaderCell>
                                <CTableHeaderCell>Doctor</CTableHeaderCell>
                                <CTableHeaderCell>Date</CTableHeaderCell>
                                <CTableHeaderCell>Time</CTableHeaderCell>
                                <CTableHeaderCell>Actions</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {appointments.map((appointment, index) => (
                                <CTableRow key={appointment.id}>
                                    <CTableDataCell>{index + 1}</CTableDataCell>
                                    <CTableDataCell>{appointment.name}</CTableDataCell>
                                    <CTableDataCell>{appointment.email}</CTableDataCell>
                                    <CTableDataCell>{appointment.phone}</CTableDataCell>
                                    <CTableDataCell>{appointment.doctor}</CTableDataCell>
                                    <CTableDataCell>{appointment.date}</CTableDataCell>
                                    <CTableDataCell>{appointment.time}</CTableDataCell>
                                    <CTableDataCell>
                                        <CButton color="danger" size="sm" onClick={() => handleDelete(appointment.id)}>Delete</CButton>
                                    </CTableDataCell>
                                </CTableRow>
                            ))}
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </div>
    );
};

export default AppointmentScheduleTable;