import React, { useState } from "react";
import "../../assets/CSS/AppointmentsCSS/DoctorsAppointmentContent.css";
import CustomButton from "../../Components/Buttons/CustomButton";
import BookAppointmentPopupContent from "./BookAppointmentPopupContent"; // Popup Component

const DoctorsAppointmentContent = ({ doctors = [] }) => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleBookAppointment = (doctor) => {
        setSelectedDoctor(doctor);
        setShowPopup(true);
    };

    const closePopup = () => {
        setSelectedDoctor(null);
        setShowPopup(false);
    };
    
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
                                    label="Book Appointment"
                                    onClick={() => handleBookAppointment(doctor)}
                                    variant="primary"
                                />
                            </div>
                            <div className="button-container">
                                <CustomButton
                                    label="View Details"
                                    onClick={() => console.log("Viewing details of", doctor.doctorName)}
                                    variant="secondary"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Popup for Booking Appointment */}
            {showPopup && selectedDoctor && (
                <BookAppointmentPopupContent
                    show={showPopup}
                    handleClose={closePopup}
                    doctor={selectedDoctor}
                />
            )}
        </div>
    );
};

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
