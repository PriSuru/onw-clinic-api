import React, { useState } from "react";
import { CCard, CCardBody, CButton } from "@coreui/react";
import dayjs from "dayjs";
import Select from "react-select";
import "../../assets/CSS/AppointmentsCSS/AppointmentScheduleTable.css";
import CustomButton from "../../Components/Buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import DynamicTable from "../../Components/Table/DynamicTable";
import ContentBaseType from "../../Components/ContentsType/ContentBaseType";

const AppointmentScheduleTable = () => {
    const navigate = useNavigate();
    
    const [appointments, setAppointments] = useState([
        { id: 1, "Patient Name": "John Doe", Email: "john@example.com", Phone: 1234567890, Doctor: "Dr. Smith", Date: "2025-03-10", Time: "10:00 AM" },
        { id: 2, "Patient Name": "Alice Brown", Email: "alice@example.com", Phone: 9876543210, Doctor: "Dr. Johnson", Date: "2025-03-11", Time: "11:00 AM" },
        { id: 3, "Patient Name": "Robert Wilson", Email: "robert@example.com", Phone: 8765432109, Doctor: "Dr. Williams", Date: "2025-03-12", Time: "02:00 PM" },
        { id: 4, "Patient Name": "Sophia Martinez", Email: "sophia@example.com", Phone: 7654321098, Doctor: "Dr. Brown", Date: "2025-03-13", Time: "03:30 PM" },
        { id: 5, "Patient Name": "Daniel Lee", Email: "daniel@example.com", Phone: 6543210987, Doctor: "Dr. Taylor", Date: "2025-03-14", Time: "01:00 PM" },
        { id: 6, "Patient Name": "Olivia Harris", Email: "olivia@example.com", Phone: 5432109876, Doctor: "Dr. Anderson", Date: "2025-03-15", Time: "10:30 AM" },
        { id: 7, "Patient Name": "James White", Email: "james@example.com", Phone: 4321098765, Doctor: "Dr. Thomas", Date: "2025-03-16", Time: "09:45 AM" },
        { id: 8, "Patient Name": "Emma Garcia", Email: "emma@example.com", Phone: 3210987654, Doctor: "Dr. Martinez", Date: "2025-03-17", Time: "12:15 PM" },
        { id: 9, "Patient Name": "Michael Lopez", Email: "michael@example.com", Phone: 2109876543, Doctor: "Dr. Wilson", Date: "2025-03-18", Time: "11:45 AM" },
        { id: 10, "Patient Name": "Charlotte Davis", Email: "charlotte@example.com", Phone: 1098765432, Doctor: "Dr. Moore", Date: "2025-03-19", Time: "02:45 PM" },
        { id: 11, "Patient Name": "William Clark", Email: "william@example.com", Phone: 9876054321, Doctor: "Dr. Jackson", Date: "2025-03-20", Time: "04:00 PM" },
        { id: 12, "Patient Name": "Ava Hernandez", Email: "ava@example.com", Phone: 8765943210, Doctor: "Dr. White", Date: "2025-03-21", Time: "10:15 AM" },
        { id: 13, "Patient Name": "Ethan Rodriguez", Email: "ethan@example.com", Phone: 7654832109, Doctor: "Dr. Harris", Date: "2025-03-22", Time: "01:30 PM" },
        { id: 14, "Patient Name": "Isabella Walker", Email: "isabella@example.com", Phone: 6543721098, Doctor: "Dr. Lee", Date: "2025-03-23", Time: "03:00 PM" },
        { id: 15, "Patient Name": "Mason Hall", Email: "mason@example.com", Phone: 5432610987, Doctor: "Dr. Perez", Date: "2025-03-24", Time: "12:30 PM" },
        { id: 16, "Patient Name": "Mia Allen", Email: "mia@example.com", Phone: 4321509876, Doctor: "Dr. Roberts", Date: "2025-03-25", Time: "02:00 PM" },
        { id: 17, "Patient Name": "Benjamin Young", Email: "benjamin@example.com", Phone: 3210498765, Doctor: "Dr. King", Date: "2025-03-26", Time: "10:45 AM" },
        { id: 18, "Patient Name": "Amelia Scott", Email: "amelia@example.com", Phone: 2109387654, Doctor: "Dr. Wright", Date: "2025-03-27", Time: "09:00 AM" },
        { id: 19, "Patient Name": "Alexander Green", Email: "alexander@example.com", Phone: 1098276543, Doctor: "Dr. Torres", Date: "2025-03-28", Time: "01:15 PM" },
        { id: 20, "Patient Name": "Harper Adams", Email: "harper@example.com", Phone: 9877165432, Doctor: "Dr. Ramirez", Date: "2025-03-29", Time: "11:30 AM" },
        { id: 21, "Patient Name": "Alice Brown", Email: "alice@example.com", Phone: 9988776655, Doctor: "Dr. Wilson", Date: "2025-03-12", Time: "02:00 PM" },
        { id: 22, "Patient Name": "Robert Green", Email: "robert@example.com", Phone: 8877665544, Doctor: "Dr. Clark", Date: "2025-03-13", Time: "03:30 PM" },
        { id: 23, "Patient Name": "Emily Davis", Email: "emily@example.com", Phone: 7766554433, Doctor: "Dr. Adams", Date: "2025-03-14", Time: "10:45 AM" },
        { id: 24, "Patient Name": "Michael Scott", Email: "michael@example.com", Phone: 6655443322, Doctor: "Dr. Baker", Date: "2025-03-15", Time: "01:15 PM" },
        { id: 25, "Patient Name": "Sophia White", Email: "sophia@example.com", Phone: 5544332211, Doctor: "Dr. Carter", Date: "2025-03-16", Time: "04:00 PM" },
    ]);
    
    const allColumns = [
        { label: "Patient Name", value: "Patient Name" },
        { label: "Email", value: "Email" },
        { label: "Phone", value: "Phone" },
        { label: "Doctor", value: "Doctor" },
        { label: "Date & Time", value: "Date & Time" }
    ];
    
    const [selectedColumns, setSelectedColumns] = useState(allColumns);
    
    const handleDelete = (id) => {
        setAppointments(appointments.filter((appointment) => appointment.id !== id));
    };
    
    const dataWithActions = appointments.map((appointment) => ({
        "Patient Name": appointment["Patient Name"],
        Email: appointment.Email,
        Phone: appointment.Phone,
        Doctor: appointment.Doctor,
        "Date & Time": `${dayjs(appointment.Date).format("DD-MMM-YYYY")} - ${dayjs(appointment.Time, "hh:mm A").format("hh:mm A")}`,
        Actions: (
            <CButton key={`delete-${appointment.id}`} color="danger" size="sm" onClick={() => handleDelete(appointment.id)}>
                Delete
            </CButton>
        )
    }));

    return (
        <div className="tableScheduleAppointment">
            <div className="appointmentSchedule-container">
                <CCard className="ccard">
                    <CCardBody>
                        <p className="text-center">
                            <ContentBaseType heading="Appointment Schedule" />
                        </p>
                        
                        <div className="filter-dropdown">
                            <Select
                                isMulti
                                options={allColumns}
                                value={selectedColumns}
                                onChange={setSelectedColumns}
                                className="column-filter"
                                placeholder="Select Columns"
                            />
                        </div>
                        
                        <DynamicTable 
                            columns={[...selectedColumns.map(col => col.value), "Actions"]} 
                            data={dataWithActions} 
                        />
                        
                        <div className="scheduleAppointmentButton">
                            <CustomButton label="Book Appointment" onClick={() => navigate("/bookAppointment")} variant="primary" />
                        </div>
                    </CCardBody>
                </CCard>
            </div>
        </div>
    );
};

export default AppointmentScheduleTable;
