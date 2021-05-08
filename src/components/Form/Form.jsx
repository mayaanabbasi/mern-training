import axios from "axios";
import React, { useEffect, useState } from "react";
import UseForm from "../../customHooks/customFormHook";

const Form = () => {
  const registerComplete = (status) => {
    if (status === "success") {
      fetchUsers();
    }
  };

  const [users, setUsers] = useState([]);
  const { inputs, handleInputChange, handleSubmit } = UseForm(registerComplete);

  const fetchUsers = () => {
    axios
      .get("http://localhost:4200/getUserData")
      .then((res) => setUsers(res.data.payload.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onFormSubmit = (event) => {
    if (event.target.password.value === event.target.confirmPassword.value) {
      handleSubmit(event);
    } else {
      event.preventDefault();
      alert("Password Mismatch");
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} method="POST">
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

export default Form;
