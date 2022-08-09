import "./Form.css";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
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
  const [submissionStatus, setSubmissionStatus] = useState("stage0");
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

  const form = useRef();

  // For password eye click event
  // function passwordViewHandler(e) {
  //   e.preventDefault();
  //   setPasswordViewState(!passwordViewState);
  // }

  function handleFormSubmit(e) {
    e.preventDefault();
    setSubmissionStatus("stage1");
    // const emailSubject = `Travamed Applicant: ${formState.firstName} ${formState.lastName}`;
    // const emailBody = `
    // Hi! I'm interested in applying for Travamed!
    // Name: ${formState.firstName} ${formState.lastName}
    // Email: ${formState.email}
    // Phone Number: ${formState.phone}
    // Profession: ${formState.profession}`;
    // window.open(
    //   `mailto:travamed@outlook.com?subject=${emailSubject}&body=${emailBody}`
    // );
    // window.Email.send({
    //   Host: "smtp.elasticemail.com",
    //   Username: "travamed@outlook.com",
    //   Password: "271A7C9571F59F2C5DBC39029FB801C15CA9",
    //   To: "travamed@outlook.com",
    //   From: formState.email,
    //   Subject: emailSubject,
    //   Body: emailBody,
    // }).then((message) => {
    //   alert(message);
    // });
    emailjs
      .sendForm(
        "service_icxphob",
        "template_wimlfe5",
        form.current,
        "0ia41DaQtlt7unw4R"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmissionStatus("stage2");
        },
        (error) => {
          console.log(error.text);
          alert(
            "Oops! Something went wrong with your submission. If it continues to fail, feel free to contact us directly at travamed@outlook.com"
          );
        }
      );
  }
  return (
    <div>
      <form id="formContainer" ref={form} onSubmit={handleFormSubmit}>
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
            className={formState.profession !== "" ? "activeInput" : ""}
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
        <button
          id="submit-button"
          type="submit"
          className={
            submissionStatus === "stage0"
              ? "submit-button"
              : "disabled-submit-button"
          }
          disabled={submissionStatus !== "stage0"}
        >
          {submissionStatus === "stage0"
            ? "Submit"
            : submissionStatus === "stage1"
            ? "Submitting"
            : "Success!"}
        </button>
      </form>
    </div>
  );
}

export default Form;
