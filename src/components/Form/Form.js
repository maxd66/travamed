import "./Form.css";
import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

function Form() {
  //email to travamed@outlook.com
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
  });
  // const [passwordViewState, setPasswordViewState] = useState(false);
  // above state for password eye

  function handleFormChange(e) {
    e.preventDefault();
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  // For password eye click event
  // function passwordViewHandler(e) {
  //   e.preventDefault();
  //   setPasswordViewState(!passwordViewState);
  // }

  function handleFormSubmit(e) {
    e.preventDefault();
    const emailSubject = `Travamed Applicant: ${formState.firstName} ${formState.lastName}`;
    const emailBody = `
    Hi! I'm interested in applying for Travamed!
    Name: ${formState.firstName} ${formState.lastName}
    Email: ${formState.email}
    Phone Number: ${formState.phone}
    Profession: ${formState.profession}`;
    window.open(
      `mailto:travamed@outlook.com?subject=${emailSubject}&body=${emailBody}`
    );
  }
  return (
    <div>
      <form id="formContainer" onSubmit={handleFormSubmit}>
        <div id="firstInputContainer">
          <input
            id="firstName"
            name="firstName"
            className={formState.firstName ? "activeInput" : "inactiveInput"}
            onChange={handleFormChange}
            value={formState.firstName}
          />
          <label
            htmlFor="firstName"
            id="firstNameLabel"
            className={
              formState.firstName ? "activeLabel label" : "inactiveLabel label"
            }
          >
            First Name
          </label>
        </div>
        <div className="inputContainer">
          <input
            id="lastName"
            name="lastName"
            className={formState.lastName ? "activeInput" : "inactiveInput"}
            onChange={handleFormChange}
            value={formState.lastName}
          />
          <label
            htmlFor="lastName"
            id="lastNameLabel"
            className={
              formState.lastName ? "activeLabel label" : "inactiveLabel label"
            }
          >
            Last Name
          </label>
        </div>
        <div className="inputContainer">
          <input
            id="email"
            name="email"
            className={formState.email ? "activeInput" : "inactiveInput"}
            onChange={handleFormChange}
            value={formState.email}
          />
          <label
            htmlFor="email"
            id="emailLabel"
            className={
              formState.email ? "activeLabel label" : "inactiveLabel label"
            }
          >
            Email
          </label>
        </div>
        <div className="inputContainer">
          <input
            id="phone"
            name="phone"
            className={formState.phone ? "activeInput" : "inactiveInput"}
            onChange={handleFormChange}
            value={formState.phone}
          />
          <label
            htmlFor="phone"
            id="phoneLabel"
            className={
              formState.phone ? "activeLabel label" : "inactiveLabel label"
            }
          >
            Phone Number
          </label>
        </div>
        <div className="inputContainer">
          <select
            id="profession"
            name="profession"
            onChange={handleFormChange}
            value={formState.profession}
          >
            <option value="">Select Profession</option>
            <option value="Registered Nurse">Registered Nurse</option>
            <option value="Respiratory Therapist">Respiratory Therapist</option>
            <option value="Dialysis Technician">Dialysis Technician</option>
            <option value="Licensed Practical Nurse">
              Licensed Practical Nurse
            </option>
            <option value="Surgical Tech/OR Tech">Surgical Tech/OR Tech</option>
            <option value="CNA">CNA</option>
          </select>
        </div>
        {/* <div className="inputContainer resumeInputContainer">
          <input type="file" id="resume" name="resume" />
          <label id="resumeLabel" htmlFor="resume">
            Upload your resume:
          </label>
        </div> */}
        <button id="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
