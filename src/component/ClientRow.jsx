import React from "react";

const ClientRow = ({ client, index }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
