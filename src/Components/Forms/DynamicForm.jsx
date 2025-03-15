import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  CForm, CFormFloating, CFormInput, CFormSelect, CFormTextarea,
  CButton, CFormLabel, CFormFeedback, CFormCheck
} from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from "../Buttons/CustomButton";
import "../../assets/CSS/FormCSS/DynamicForm.css"

const DynamicForm = ({ formFields, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [warnings, setWarnings] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      date: "",
      time: "",
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = "";
    let warningMessage = "";

    if (!value.trim() && value !== false) {
      errorMessage = "This field is required.";
    } else if (name === "emailAddress" && !/\S+@\S+\.\S+/.test(value)) {
      errorMessage = "Enter a valid email.";
    } else if (name === "contactNumber" && !/^\d{10}$/.test(value)) {
      errorMessage = "Enter a valid 10-digit number.";
    } else if (name !== "emailAddress" && name !== "contactNumber" && value.trim().length < 3) {
      warningMessage = "⚠️ Text should be at least 3 characters long.";
    }

    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    setWarnings((prev) => ({ ...prev, [name]: warningMessage }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(errors).some((error) => error)) {
      onSubmit(formData);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const getValidationState = (name) => {
    if (!formData[name]) return "";
    return errors[name] ? "is-invalid" : "is-valid";
  };

  const renderField = (field) => {
    const validationClass = getValidationState(field.key);

    switch (field.type) {
      case "text":
      case "email":
      case "number":
      case "date":
      case "time":
        return (
          <CFormFloating>
            <CFormInput
              type={field.type}
              name={field.key}
              placeholder={field.label}
              value={formData[field.key] || ""}
              onChange={handleChange}
              className={validationClass}
            />
            <CFormLabel htmlFor={field.key}>{field.label}</CFormLabel>
            {warnings[field.key] && <p className="text-warning mt-1" style={{ fontSize: "14px" }}>{warnings[field.key]}</p>}
            {errors[field.key] && <CFormFeedback invalid>{errors[field.key]}</CFormFeedback>}
          </CFormFloating>
        );

      case "password":
        return (
          <CFormFloating className="mb-3 position-relative">
            <CFormInput
              type={showPassword ? "text" : "password"}
              name={field.key}
              placeholder={field.label}
              onChange={handleChange}
              className={validationClass}
            />
            <CFormLabel htmlFor={field.key}>{field.label}</CFormLabel>
            <span className="position-absolute top-50 end-0 translate-middle-y me-3" style={{ cursor: "pointer" }} onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors[field.key] && <CFormFeedback invalid>{errors[field.key]}</CFormFeedback>}
          </CFormFloating>
        );

        case "select":
          return (
            <CFormFloating>
              <CFormSelect
                name={field.key}
                value={formData[field.key] || ""} // Ensure each select field has its own value
                onChange={handleChange}
                className={validationClass}
              >
                <option value="">Select {field.label}</option>
                {field.options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </CFormSelect>
              <CFormLabel htmlFor={field.key}>{field.label}</CFormLabel>
              {errors[field.key] && <CFormFeedback invalid>{errors[field.key]}</CFormFeedback>}
            </CFormFloating>
          );        

      case "checkbox":
        return (
          <CFormCheck
            type="checkbox"
            name={field.key}
            label={field.label}
            checked={formData[field.key] || false}
            onChange={handleChange}
          />
        );

        // case "radio":
        //   return (
        //     <div className="d-flex align-items-center gap-3">
        //       {field.options.map((option, index) => (
        //         <CFormCheck
        //           key={index}
        //           type="radio"
        //           name={field.key}
        //           label={option}
        //           value={option}
        //           checked={formData[field.key] === option}
        //           onChange={handleChange}
        //         />
        //       ))}
        //     </div>
        //   );        

      case "file":
        return (
          <div className="mb-3">
            <CFormLabel htmlFor={field.key}>{field.label}</CFormLabel>
            <CFormInput type="file" name={field.key} onChange={handleChange} className={validationClass} />
          </div>
        );

      case "textarea":
        return (
          <CFormFloating>
            <CFormTextarea
              name={field.key}
              placeholder={field.label}
              value={formData[field.key] || ""}
              onChange={handleChange}
              className={validationClass}
            />
            <CFormLabel htmlFor={field.key}>{field.label}</CFormLabel>
          </CFormFloating>
        );

      default:
        return null;
    }
  };

  return (
    <CForm onSubmit={handleSubmit} className="dynamic-form container">
      <div className="d-flex flex-wrap row">
        {formFields.map((field) => (
          <div key={field.id} className={field.class}>{renderField(field)}</div>
        ))}
      </div>
      {/* <CButton type="submit" color="primary" className="w-100">Submit</CButton> */}
      <CustomButton label="submit" variant="primary" />
    </CForm>
  );
};

export default DynamicForm;
