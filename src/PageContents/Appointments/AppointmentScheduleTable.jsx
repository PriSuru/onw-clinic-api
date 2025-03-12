import React, { useState } from "react";
import { CCard, CCardBody, CButton } from "@coreui/react";
import "../../assets/CSS/AppointmentsCSS/AppointmentScheduleTable.css";
import CustomButton from "../../Components/Buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import DynamicTable from "../../Components/Table/DynamicTable";
import ContentBaseType from '../../Components/ContentsType/ContentBaseType';

const AppointmentScheduleTable = () => {
    const navigate = useNavigate();
    
    const [appointments, setAppointments] = useState([
        { id: 1, "Patient Name": "John Doe", Email: "john@example.com", Phone: "123-456-7890", Doctor: "Dr. Smith", Date: "2025-03-10", Time: "10:00 AM" },
        { id: 2, "Patient Name": "Jane Doe", Email: "jane@example.com", Phone: "987-654-3210", Doctor: "Dr. Johnson", Date: "2025-03-11", Time: "11:00 AM" },
    ]);

    const handleDelete = (id) => {
        setAppointments(appointments.filter((appointment) => appointment.id !== id));
    };

    const columns = ["SNO", "Patient Name", "Email", "Phone", "Doctor", "Date", "Time", "Actions"];
    
    const dataWithActions = appointments.map((appointment, index) => ({
        SNO: index + 1, // Adding Serial Number
        ...appointment,
        Actions: <CButton color="danger" size="sm" onClick={() => handleDelete(appointment.id)}>Delete</CButton>
    }));

    return (
        <div className="tableScheduleAppointment">
            <div className="appointmentSchedule-container">
                <CCard className="shadow-lg">
                    <CCardBody>
                        <p className="text-center"><ContentBaseType heading="Appointment Schedule" /></p>
                        <DynamicTable columns={columns} data={dataWithActions} />
                        <div className="scheduleAppointmentButton">
                            <CustomButton label="Book Appointment" onClick={() => navigate("/appointmentPage")} variant="primary" />
                        </div>
                    </CCardBody>
                </CCard>
            </div>
        </div>
    );
};

export default AppointmentScheduleTable;
