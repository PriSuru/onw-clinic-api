import React from "react";
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../../assets/CSS/HeaderCSS/Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        {/* Left Side - Contact Info */}
        <div className="topbar-left">
          <a href="mailto:support@example.com" className="contact-item">
          {/* <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="contact-item"> */}
            <FaEnvelope />
          <p className="contactItemText">support@example.com</p>
          </a>
          <a href="tel:+917566007436" className="contact-item">
            <FaPhone className="flip-icon" />
          <p className="contactItemText">+91 7566007436</p>
          </a>
        </div>

        {/* Right Side - Social Media Icons */}
        <div className="topbar-right">
          <a href="#" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="#" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
