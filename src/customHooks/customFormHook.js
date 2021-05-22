import React, { useState } from "react";
import axios from "axios";

const useForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      axios
        .post("http://localhost:4200/createUser", {
          firstname: event.target.firstname.value,
          lastname: event.target.lastname.value,
          email: event.target.email.value,
          password: event.target.password.value,
        })
        .then(
          (response) => {
            console.log(response);
            setInputs((inputs) => ({
              ...inputs,
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              confirmPassword: "",
            }));
            callback("success");
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      callback("failure");
    }
  };
  const handleEdit = (event) => {
    if (event) {
      event.preventDefault();
      axios
        .post(`http://localhost:4200/saveUser/${event.target.id.value}`, {
          firstname: event.target.firstname.value,
          lastname: event.target.lastname.value,
          email: event.target.email.value,
          password: event.target.password.value,
        })
        .then(
          (response) => {
            console.log(response);
            setInputs((inputs) => ({
              ...inputs,
              id: "",
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              confirmPassword: "",
            }));
            callback("edit success");
          },
          (error) => {
            console.log(error);
          }
        );
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
  const handlePrefill = (response) => {
    if (response) {
      setInputs((inputs) => ({
        ...inputs,
        id: response.id,
        firstname: response.firstname,
        lastname: response.lastname,
        email: response.email,
        password: response.password,
      }));
    }
  };
  return {
    handlePrefill,
    handleEdit,
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useForm;
