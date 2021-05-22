const Table = (props) => {
  const handleOnDelete = (id) => {
    props.onDelete(id);
  };

  const handleOnEdit = (id) => {
    props.onEdit(id)
  }
  if (props.data) {
    return (
      <table border="1" cellPadding="5px">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.firstname + " " + item.lastname}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => handleOnEdit(item.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleOnDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return null;
  }
};

export default Table;
