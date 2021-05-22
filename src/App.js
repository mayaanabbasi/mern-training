import axios from "axios";
import React, { useEffect, useState } from "react";
import UseForm from "./customHooks/customFormHook";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

import "./App.css";

function App() {
  const fetchUsers = () => {
    axios
      .get("http://localhost:4200/getUserData")
      .then((res) => setUsers(res.data.payload.data))
      .catch((err) => console.log(err));
  };

  const registerComplete = (status) => {
    console.log(status);
    if (status === "success") {
      fetchUsers();
    } else if (status === "edit success") {
      setEdit(false);
      fetchUsers();
    }
  };

  const [isEdit, setEdit] = useState(false);
  const [users, setUsers] = useState([]);
  const {
    inputs,
    handleInputChange,
    handleSubmit,
    handleEdit,
    handlePrefill,
  } = UseForm(registerComplete);

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

  const onUserEdit = (event) => {
    if (event.target.password.value === event.target.confirmPassword.value) {
      handleEdit(event);
    } else {
      event.preventDefault();
      alert("Password Mismatch");
    }
  };

  const handleOnDelete = (id) => {
    if (id) {
      axios
        .post(`http://localhost:4200/deleteUser`, {
          id: id,
        })
        .then((res) => {
          fetchUsers();
          setEdit(false);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleOnEdit = (id) => {
    if (id) {
      axios
        .post(`http://localhost:4200/editUser`, {
          id: id,
        })
        .then((res) => {
          setEdit(true);
          handlePrefill(res.data.payload.data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="App">
      <Form
        handleSubmit={onFormSubmit}
        handleEdit={onUserEdit}
        onInputChange={handleInputChange}
        inputs={inputs}
        isEdit={isEdit}
      />
      <Table data={users} onDelete={handleOnDelete} onEdit={handleOnEdit} />
    </div>
  );
}

export default App;
