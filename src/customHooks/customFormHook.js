import React, { useState } from "react";
import axios from "axios";

const useForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      axios
        .post("http://localhost:4200/saveUserData", {
          firstname: event.target.firstname.value,
          lastname: event.target.lastname.value,
          email: event.target.email.value,
          password: event.target.password.value,
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
      callback("Success");
    } else {
      callback("failure");
    }
  };
  const handleInputChange = (event) => {
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useForm;
