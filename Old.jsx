import React, { useState } from "react";
import "../../assets/CSS/AppointmentsCSS/DoctorsAppointmentContent.css";
import CustomButton from "../../Components/Buttons/CustomButton";
import BookAppointmentPopupContent from "./BookAppointmentPopupContent"; // Popup Component

import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const DoctorsAppointmentContent = ({ doctors = [] }) => {
    const [doctor, setDoctor] = useState("");
    const [location, setLocation] = useState("");
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
        <div>
            {/* Search Box */}
            <div className="search-container">
                <div className="input-box firstSearchInput">
                    <FaMapMarkerAlt className="input-icon" />
                    <input
                        className="locationFind"
                        type="text"
                        placeholder="Search Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="input-box doctorFind">
                    <FaSearch className="input-icon" />
                    <input
                        type="text"
                        placeholder="Search doctors, clinics, hospitals"
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                    />
                </div>
            </div>
            <div className="bookAppointments-container">
                {doctors.map((doctor, index) => (
                    <div key={index} className="bookAppointment-card">
                        <div className="bookAppointment-card-body">
                            <div className="left">
                                <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image" />
                            </div>
                            <div className="middle">
                                <h2 className="doctor-name">{doctor.name}</h2>
                                <p className="clinic-name">{doctor.clinicName}</p>
                                <p className="address">{doctor.address}</p>
                                <p className="contact-number">{doctor.contactNumber}</p>
                                <p className="status">Open/Close: {doctor.openClose}</p>
                            </div>
                            <div className="right">
                                <p className="rate">Rating: {doctor.rating} ⭐</p>
                                <p className="location">Location: {doctor.location}</p>
                                <p className="price">Consultation Fee: ${doctor.price}</p>
                                <p className="close-on">Closed on: {doctor.closeOn}</p>
                                <p className="open-on">Open on: {doctor.openOn}</p>
                                <CustomButton
                                    label="Book Appointment"
                                    onClick={() => handleBookAppointment(doctor)}
                                    variant="primary"
                                />
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
        </div>
    );
};

const generateDoctorDetails = () => {
    return [
        {
            name: "Dr. John Doe",
            clinicName: "City Health Clinic",
            address: "123 Main Street, New York, NY",
            contactNumber: "(123) 456-7890",
            openClose: "9 AM - 6 PM",
            rating: "4.5",
            location: "New York",
            price: "50",
            closeOn: "Sunday",
            openOn: "Monday - Saturday",
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            name: "Dr. Jane Smith",
            clinicName: "Health First Clinic",
            address: "456 Elm Street, Los Angeles, CA",
            contactNumber: "(987) 654-3210",
            openClose: "8 AM - 5 PM",
            rating: "4.8",
            location: "Los Angeles",
            price: "60",
            closeOn: "Saturday",
            openOn: "Sunday - Friday",
            imageUrl: "https://via.placeholder.com/150",
        },
    ];
};

export { DoctorsAppointmentContent, generateDoctorDetails };
