import "./Form.css";
import React, { useState } from "react";

function Form() {
  const [formState, setFormState] = useState({ fullName: "" });

  function handleFormChange(e) {
    e.preventDefault();
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("you submitted the form");
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name" id="nameLabel">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          onChange={handleFormChange}
          value={formState.fullName}
        />
        <button id="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
