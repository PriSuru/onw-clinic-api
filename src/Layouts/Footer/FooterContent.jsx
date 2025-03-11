import React from "react";
import "../../assets/CSS/FooterCSS/FooterContent.css";

const FooterContent = () => {
  return (
    <footer className="footer text-dark py-4">
      <div className="container">
        {/* Top Section */}
        <div className="row mb-4 align-items-center">
          <div className="">
            <p className="footerHead">HEALTH CARE</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="row border-bottom pb-4 mb-4 footerContent">
          {[
            {
              title: "Know Us",
              links: [
                "About Us",
                "Contact Us",
                "Press Coverage",
                "Careers",
                "Business Partnership",
                "Become a Health Partner",
                "Corporate Governance",
              ],
            },
            {
              title: "Our Policies",
              links: [
                "Privacy Policy",
                "Terms and Conditions",
                "Editorial Policy",
                "Return Policy",
                "IP Policy",
                "Grievance Redressal Policy",
                "Fake Jobs and Fraud Disclaimer",
              ],
            },
            {
              title: "Our Services",
              links: [
                "Order Medicines",
                "Book Lab Tests",
                "Consult a Doctor",
                "Ayurveda Articles",
                "Hindi Articles",
                "Care Plan",
              ],
            },
            {
              title: "Learn More",
              links: ["Partner with us", "Apps for you"],
            },
          ].map((section, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <h5>{section.title}</h5>
              <ul className="list-unstyled">
                {section.links.map((link, i) => (
                  <li className="mb-2" key={i}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-4">
          <small>
            &copy; {new Date().getFullYear()} By continuing past this page, you
            agree to our Terms of Service, Cookie Policy, Privacy Policy, and
            Content Policies. All trademarks are properties of their
            respective owners. 2008-{new Date().getFullYear()} © NetClinic Pvt. Ltd. All
            rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
