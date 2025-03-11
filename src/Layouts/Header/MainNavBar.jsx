import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { BsHeartPulse } from "react-icons/bs";
import "../../assets/CSS/HeaderCSS/MainNavbar.css";

const MainNavBar = () => {
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  useEffect(() => {
    const email = sessionStorage.getItem("emailAddress");
    if (email) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    sessionStorage.removeItem("emailAddress"); // Remove email from sessionStorage
    setIsLoggedIn(false); // Update logged-out state
  };

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
            <Link to="/" className="nav-item nav-link" onClick={handleClose}>HealthCare</Link>
            <Link to="/findDoctors" className="nav-item nav-link" onClick={handleClose}>Find Doctors</Link>
            <Link to="/videoConsult" className="nav-item nav-link" onClick={handleClose}>Video Consult</Link>

            {/* Services Dropdown */}
            <NavDropdown title="Services" id="services-dropdown" className="nav-item">
              <Link to="/surgeryProcedure" className="dropdown-item" onClick={handleClose}>Surgery</Link>
              <Link to="/healthCheckup" className="dropdown-item" onClick={handleClose}>Health Checkup</Link>
            </NavDropdown>

            {/* Appointments Dropdown */}
            <NavDropdown title="Appointments" id="appointments-dropdown" className="nav-item">
              <Link to="/appointmentPage" className="dropdown-item" onClick={handleClose}>Schedule Appointment</Link>
              <Link to="/appointmentSchedulePage" className="dropdown-item" onClick={handleClose}>View Appointments</Link>
            </NavDropdown>

            <Link to="/contactPage" className="nav-item nav-link" onClick={handleClose}>Contact</Link>
          </Nav>

          {/* Right Side Links or Profile Dropdown */}
          <Nav>
            {!isLoggedIn ? (
              <>
                <Link to="/loginPage" className="nav-item nav-link" onClick={handleClose}>Login</Link>
                <Link to="/signupPage" className="nav-item nav-link" onClick={handleClose}>Sign Up</Link>
              </>
            ) : (
              <NavDropdown title="Profile" id="profile-dropdown" className="nav-item">
                <Link to="/profile" className="dropdown-item" onClick={handleClose}>My Profile</Link>
                <Link to="#" className="dropdown-item" onClick={handleLogout}>Logout</Link>
              </NavDropdown>
            )}

            {/* Security & Help Dropdown */}
            <NavDropdown title="Security & Help" id="security-dropdown" className="nav-item">
              <Link to="#" className="dropdown-item" onClick={handleClose}>Data Security</Link>
              <Link to="#" className="dropdown-item" onClick={handleClose}>Help</Link>
            </NavDropdown>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default MainNavBar;
