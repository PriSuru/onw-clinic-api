import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import "../../assets/CSS/HeaderCSS/BreadcrumbNav.css";

const routeNames = {
  "/": "Home",
  "/findDoctors": "Find Doctors",
  "/videoConsult": "Video Consultation",
  "/surgeryProcedure": "Surgery Procedures",
  "/healthCheckup": "Health Checkup",
  "/loginPage": "Login",
  "/signupPage": "Sign Up",
  "/appointmentPage": "Book Appointment",
  "/appointmentSchedulePage": "Appointment Schedule",
  "/contactPage": "Contact Us",
  "/profile": "My Profile",
  "/reportView": "My Reports",
  "/consultOnline": "Online Consultation",
  "/consultationPage": "Book Consultation",
  "/feedBackPage": "FeedBack"
};

const BreadcrumbNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb-wrapper">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>
        {pathnames.map((value, index) => {
          const pathTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <Breadcrumb.Item key={pathTo} linkAs={Link} linkProps={{ to: pathTo }}>
              {routeNames[pathTo] || value.charAt(0).toUpperCase() + value.slice(1)}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNav;
