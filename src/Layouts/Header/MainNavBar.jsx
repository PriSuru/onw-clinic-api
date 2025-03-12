import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { BsHeartPulse } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/authSlice";
import "../../assets/CSS/HeaderCSS/MainNavbar.css";

const MainNavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <Navbar expand="lg" className="custom-navbar shadow-sm container-fluid">
            <Link to="/" onClick={handleClose}>
                <BsHeartPulse size={30} className="custom-icon" />
            </Link>

            {/* Navbar Toggler Button */}
            <Navbar.Toggle
                aria-controls="offcanvas-navbar"
                className="border-0 custom-toggler"
                onClick={handleShow}
            />

            {/* Offcanvas Menu */}
            <Navbar.Offcanvas
                show={show}
                onHide={handleClose}
                id="offcanvas-navbar"
                aria-labelledby="offcanvas-navbar-label"
                placement="start"
                className="custom-offcanvas"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvas-navbar-label">Menu</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav className="me-auto">
                        {!isAuthenticated ? (
                            <>
                                <Link to="/" className="nav-item nav-link" onClick={handleClose}>HealthCare</Link>
                                <Link to="/findDoctors" className="nav-item nav-link" onClick={handleClose}>Find Doctors</Link>
                                <Link to="/videoConsult" className="nav-item nav-link" onClick={handleClose}>Video Consult</Link>

                                <NavDropdown title="Services" id="services-dropdown" className="nav-item">
                                    <Link to="/surgeryProcedure" className="dropdown-item" onClick={handleClose}>Surgery</Link>
                                    <Link to="/healthCheckup" className="dropdown-item" onClick={handleClose}>Health Checkup</Link>
                                </NavDropdown>

                                <NavDropdown title="Appointments" id="appointments-dropdown" className="nav-item">
                                    <Link to="/appointmentPage" className="dropdown-item" onClick={handleClose}>Schedule Appointment</Link>
                                    <Link to="/appointmentSchedulePage" className="dropdown-item" onClick={handleClose}>View Appointments</Link>
                                </NavDropdown>

                                <Link to="/contactPage" className="nav-item nav-link" onClick={handleClose}>Contact</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/bookAppointment" className="nav-item nav-link" onClick={handleClose}>My Appointment</Link>
                                <Link to="/chatDoctor" className="nav-item nav-link" onClick={handleClose}>My Reports</Link>
                                <Link to="/orderMedicines" className="nav-item nav-link" onClick={handleClose}>Online Consultation</Link>
                                <Link to="/bookTests" className="nav-item nav-link" onClick={handleClose}>FeedBack</Link>
                            </>
                        )}
                    </Nav>

                    {/* Right Side */}
                    <Nav>
                        {!isAuthenticated ? (
                            <>
                                <Link to="/loginPage" className="nav-item nav-link" onClick={handleClose}>Login</Link>
                                <Link to="/signupPage" className="nav-item nav-link" onClick={handleClose}>Sign Up</Link>

                                <NavDropdown title="Security & Help" id="security-dropdown" className="nav-item">
                                    <Link to="#" className="dropdown-item" onClick={handleClose}>Data Security</Link>
                                    <Link to="#" className="dropdown-item" onClick={handleClose}>Help</Link>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
                                <NavDropdown title="Profile" id="profile-dropdown" className="nav-item">
                                    <Link to="/profile" className="dropdown-item" onClick={handleClose}>My Profile</Link>
                                    <Link to="#" className="dropdown-item" onClick={() => {
                                        dispatch(logout());
                                        handleClose();
                                    }}>Logout</Link>
                                </NavDropdown>

                                <NavDropdown title="Security & Help" id="security-dropdown" className="nav-item">
                                    <Link to="#" className="dropdown-item" onClick={handleClose}>Data Security</Link>
                                    <Link to="#" className="dropdown-item" onClick={handleClose}>Help</Link>
                                </NavDropdown>
                            </>
                        )}
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
};

export default MainNavBar;
