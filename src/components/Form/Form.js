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
    alert(
      `You submitted the form with the values, ${formState.fullName}, ${formState.lastName}, ${formState.email}`
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
            className={formState.firstName ? "activeInput" : "inactiveInput"}
            onChange={handleFormChange}
            value={formState.firstName}
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
        <button id="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
