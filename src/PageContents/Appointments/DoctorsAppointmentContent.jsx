import React, { useState } from "react";
import "../../assets/CSS/AppointmentsCSS/DoctorsAppointmentContent.css";
import CustomButton from "../../Components/Buttons/CustomButton";
import DynamicForm from "../../Components/Forms/DynamicForm";

const DoctorsAppointmentContent = ({ doctors = [] }) => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const availableTimeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

    const currentDate = new Date();
    const currentTime = currentDate.getHours() * 60 + currentDate.getMinutes();

    const convertTimeToMinutes = (time) => {
        const [hour, minute] = time.match(/\d+/g).map(Number);
        const isPM = time.includes("PM");
        return (hour % 12 + (isPM ? 12 : 0)) * 60 + minute;
    };

    const generateWeekDates = () => {
        let dates = [];
        for (let i = 0; i < 7; i++) {
            let nextDate = new Date();
            nextDate.setDate(currentDate.getDate() + i);
            dates.push(nextDate.toISOString().split("T")[0]);
        }
        return dates;
    };

    const handleBookAppointment = (doctor) => {
        if (selectedDoctor === doctor) {
            setSelectedDoctor(null);
            setSelectedDate(null);
            setSelectedTime(null);
            setUploadedFiles([]);
        } else {
            setSelectedDoctor(doctor);
            setSelectedDate(null);
            setSelectedTime(null);
            setUploadedFiles([]);
        }
    };

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files).map(file => file.name);
        setUploadedFiles([...uploadedFiles, ...files]);
    };

    const formFields = [
        { 
            id: "complaint_text", 
            key: "text_area", 
            label: "Complaints", 
            type: "textarea", 
            class: "complaint-text-area mt-4 mb-4" 
        },
        {
            id: "uploaded_files",
            key: "file_selection",
            label: "Uploaded Files",
            type: "listbox",
            options: uploadedFiles,
            class: "file-listbox mb-1"
        }
    ];
    
    const formFields1 = [
        {
            id: "payment_method",
            key: "payment_method",
            label: "Payment",
            type: "select",
            options: ["Google Pay", "PhonePay", "PayPal"], class: "col-sm-12 mt-2"
        }
    ];

    return (
        <div className="bookAppointments-container">
            {doctors.map((doctor, index) => (
                <div key={index} className="bookAppointment-card">
                    <div className="bookAppointment-card-body">
                        <div className="left">
                            <img src={doctor.imageUrl} alt={doctor.doctorName} className="doctor-image" />
                        </div>
                        <div className="middle">
                            <h2 className="doctor-name">{doctor.doctorName}</h2>
                            <p className="clinic-name">{doctor.clinicName}</p>
                            <p className="address">{doctor.address}</p>
                            <p className="contact-number">{doctor.contactNumber}</p>
                            <p className="rate">Experience: {doctor.experience}</p>
                            <p className="price">Consultation Fee: ${doctor.price}</p>
                            <p className="location">Location: {doctor.location}</p>
                        </div>
                        <div className="right">
                            <div className="button-container">
                                <CustomButton 
                                    label={selectedDoctor === doctor ? "Hide Slots" : "Book Appointment"} 
                                    variant="primary" 
                                    onClick={() => handleBookAppointment(doctor)} 
                                />
                            </div>
                        </div>
                    </div>

                    {selectedDoctor === doctor && (
                        <div className="appointment-section">
                            <h3>Select a Date</h3>
                            <div className="date-slider">
                                {generateWeekDates().map((date) => (
                                    <button 
                                        key={date} 
                                        className={`date-option ${selectedDate === date ? "selected" : ""}`} 
                                        onClick={() => setSelectedDate(date)}
                                    >
                                        {new Date(date).toDateString()}
                                    </button>
                                ))}
                            </div>

                            {selectedDate && (
                                <div className="time-slots">
                                    <h3>Select a Time</h3>
                                    {availableTimeSlots.map((time) => {
                                        const isPastTime =
                                            selectedDate === currentDate.toISOString().split("T")[0] && 
                                            convertTimeToMinutes(time) <= currentTime;

                                        return (
                                            <button 
                                                key={time} 
                                                className={`time-slot ${selectedTime === time ? "selected" : ""} ${isPastTime ? "disabled" : ""}`} 
                                                onClick={() => !isPastTime && setSelectedTime(time)}
                                                disabled={isPastTime}
                                            >
                                                {time}
                                            </button>
                                        );
                                    })}
                                </div>
                            )}

                            {selectedDate && selectedTime && (
                                <div>
                                    <DynamicForm formFields={formFields} />
                                    <input type="file" multiple onChange={handleFileUpload} className="file-upload file_upload_input" />
                                    <DynamicForm formFields={formFields1} />
                                    <button className="confirm-appointment" onClick={() => console.log("Appointment Confirmed", selectedDoctor.doctorName, selectedDate, selectedTime, uploadedFiles)}>
                                        Confirm Appointment
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
// 🔹 Generate Dummy Doctor Data
const generateDoctorDetails = () => {
    return [
        {
            doctorName: "Dr. John Doe",
            clinicName: "City Health Clinic",
            address: "123 Main Street, New York, NY",
            contactNumber: "(123) 456-7890",
            experience: "22 years experience overall",
            location: "New York",
            price: "50",
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            doctorName: "Dr. Jane Smith",
            clinicName: "Health First Clinic",
            address: "456 Elm Street, Los Angeles, CA",
            contactNumber: "(987) 654-3210",
            experience: "40 years experience overall",
            location: "Los Angeles",
            price: "60",
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            doctorName: "Dr. Emily Carter",
            clinicName: "Wellness Care Hospital",
            address: "789 Oak Avenue, Chicago, IL",
            contactNumber: "(555) 123-4567",
            experience: "18 years experience overall",
            location: "Chicago",
            price: "55",
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            doctorName: "Dr. Michael Brown",
            clinicName: "Sunrise Medical Center",
            address: "321 Maple Drive, Houston, TX",
            contactNumber: "(444) 987-6543",
            experience: "25 years experience overall",
            location: "Houston",
            price: "65",
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            doctorName: "Dr. Sophia Williams",
            clinicName: "Advanced Health Clinic",
            address: "987 Birch Road, San Francisco, CA",
            contactNumber: "(333) 222-1111",
            experience: "30 years experience overall",
            location: "San Francisco",
            price: "70",
            imageUrl: "https://via.placeholder.com/150",
        },
    ];
};

export { DoctorsAppointmentContent, generateDoctorDetails };
