const Form = (props) => {
  return (
    <div>
      <form
        onSubmit={props.isEdit ? props.handleEdit : props.handleSubmit}
        method="POST"
      >
        {props.isEdit && props.inputs.id ? (
          <div>
            <input type="hidden" name="id" value={props.inputs.id} />
          </div>
        ) : null}
        <div>
          <label>Firstname: </label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter Firstname"
            onChange={props.onInputChange}
            value={props.inputs.firstname}
          />
        </div>
        <div>
          <label>Lastname: </label>
          <input
            type="text"
            name="lastname"
            placeholder="Enter Lastname"
            onChange={props.onInputChange}
            value={props.inputs.lastname}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={props.onInputChange}
            value={props.inputs.email}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={props.onInputChange}
            value={props.inputs.password}
          />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={props.onInputChange}
            value={props.inputs.confirmPassword}
          />
        </div>
        <div>
          {props.isEdit ? (
            <button type="submit">Edit</button>
          ) : (
            <button type="submit">Register</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
