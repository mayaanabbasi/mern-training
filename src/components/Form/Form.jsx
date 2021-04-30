import React from "react";
import UseForm from "../../customHooks/customFormHook";

const form = () => {
  const registerComplete = () => {
    console.log(
      "Name:",
      inputs.firstname + " " + inputs.lastname,
      "Email:",
      inputs.email,
      "Password:",
      inputs.password
    );
  };
  const { inputs, handleInputChange, handleSubmit } = UseForm(registerComplete);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Firstname: </label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter Firstname"
            onChange={handleInputChange}
            value={inputs.firstname}
          />
        </div>
        <div>
          <label>Lastname: </label>
          <input
            type="text"
            name="lastname"
            placeholder="Enter Lastname"
            onChange={handleInputChange}
            value={inputs.lastname}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleInputChange}
            value={inputs.email}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleInputChange}
            value={inputs.password}
          />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleInputChange}
            value={inputs.confirmPassword}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default form;
