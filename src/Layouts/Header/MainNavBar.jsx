import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { BsHeartPulse } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/authSlice";
import "../../assets/CSS/HeaderCSS/MainNavbar.css";

const MainNavBar = () => {
    const [show, setShow] = useState(false);
    const [menuData, setMenuData] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        sessionStorage.clear(); // Clear session data
        navigate("/loginPage"); // Redirect to login page
    };

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const userType = sessionStorage.getItem("user_type"); // Get user role

    // Fetch menu data from JSON file in public folder
    useEffect(() => {
        fetch("/menuData.json") // Ensure file is placed in 'public' folder
            .then((response) => response.json())
            .then((data) => {
                setMenuData(data);
                console.log("Menu Data Loaded:", data); // Debugging
            })
            .catch((error) => console.error("Error fetching menu data:", error));
    }, []);

    if (!menuData) {
        return null; // Show nothing until data is loaded
    }

    // Select correct menu based on authentication and user type
    const currentMenu = isAuthenticated
        ? menuData.authenticated[userType] || menuData.unauthenticated // Fallback for invalid user type
        : menuData.unauthenticated;

    console.log("User Type:", userType);
    console.log("Current Menu:", currentMenu);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        {/* Main Menu Items */}
                        {currentMenu.mainMenu.map((item, index) => (
                            <Link key={index} to={item.path} className="nav-item nav-link" onClick={handleClose}>
                                {item.name}
                            </Link>
                        ))}

                        {/* Services Dropdown */}
                        {currentMenu.services && (
                            <NavDropdown title="Services" id="services-dropdown" className="nav-item">
                                {currentMenu.services.map((item, index) => (
                                    <Link key={index} to={item.path} className="dropdown-item" onClick={handleClose}>
                                        {item.name}
                                    </Link>
                                ))}
                            </NavDropdown>
                        )}

                        {/* Appointments Dropdown */}
                        {currentMenu.appointments && (
                            <NavDropdown title="Appointments" id="appointments-dropdown" className="nav-item">
                                {currentMenu.appointments.map((item, index) => (
                                    <Link key={index} to={item.path} className="dropdown-item" onClick={handleClose}>
                                        {item.name}
                                    </Link>
                                ))}
                            </NavDropdown>
                        )}

                        {/* Contact Us */}
                        {currentMenu.contact && (
                            <Link to={currentMenu.contact.path} className="nav-item nav-link" onClick={handleClose}>
                                {currentMenu.contact.name}
                            </Link>
                        )}
                    </Nav>

                    {/* Right Side */}
                    <Nav>
                        {/* Right Menu Items (Login & Sign Up for Unauthenticated Users) */}
                        {currentMenu.rightMenu &&
                            currentMenu.rightMenu.map((item, index) => (
                                <Link key={index} to={item.path} className="nav-item nav-link" onClick={handleClose}>
                                    {item.name}
                                </Link>
                            ))}

                        {/* Profile Dropdown (for authenticated users) */}
                        {isAuthenticated && (
                            <NavDropdown title="Profile" id="profile-dropdown" className="nav-item">
                                {currentMenu.profile.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path === "/" ? "/loginPage" : item.path}
                                        className="dropdown-item"
                                        onClick={() => {
                                            if (item.name === "Logout") {
                                                handleLogout();
                                            } else {
                                                handleClose();
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </NavDropdown>
                        )}

                        {/* Security & Help Dropdown */}
                        <NavDropdown title="Security & Help" id="security-dropdown" className="nav-item">
                            {currentMenu.securityHelp.map((item, index) => (
                                <Link key={index} to={item.path} className="dropdown-item" onClick={handleClose}>
                                    {item.name}
                                </Link>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
};

export default MainNavBar;
