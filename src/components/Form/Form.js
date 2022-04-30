import "./Form.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

function Form() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [passwordViewState, setPasswordViewState] = useState(false);

  function handleFormChange(e) {
    e.preventDefault();
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  function passwordViewHandler(e) {
    e.preventDefault();
    setPasswordViewState(!passwordViewState);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    alert(
      `You submitted the form with the values, ${formState.fullName}, ${formState.email}, ${formState.password}`
    );
  }
  return (
    <div>
      <form id="formContainer" onSubmit={handleFormSubmit}>
        <div id="firstInputContainer">
          <input
            id="fullName"
            name="fullName"
            className={formState.fullName ? "activeInput" : "inactiveInput"}
            onChange={handleFormChange}
            value={formState.fullName}
          />
          <label
            htmlFor="name"
            id="nameLabel"
            className={
              formState.fullName ? "activeNameLabel" : "inactiveNameLabel"
            }
          >
            Full Name
          </label>
        </div>
        <div className="inputContainer">
          <label htmlFor="email" id="emailLabel">
            Email
          </label>
          <input
            id="email"
            name="email"
            onChange={handleFormChange}
            value={formState.email}
          />
        </div>
        <div className="inputContainer">
          <input
            id="password"
            name="password"
            type={passwordViewState ? "text" : "password"}
            onChange={handleFormChange}
            value={formState.password}
            placeholder="Password"
          />
          <div id="eyeIconContainer" onClick={passwordViewHandler}>
            {passwordViewState ? (
              <FontAwesomeIcon id="eyeIcon" icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon id="eyeIcon" icon={faEye} />
            )}
          </div>
        </div>
        <button id="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
