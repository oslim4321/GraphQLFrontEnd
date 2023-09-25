import React from "react";

const ClientInfo = ({ client }) => {
  return (
    <div className="mt-5">
      <h2 className="mt-4">Client Information</h2>
      <ul className="list-group">
        <li className="list-group-item">{client.name}</li>
        <li className="list-group-item">{client.email}</li>
        <li className="list-group-item">{client.phone}</li>
      </ul>
    </div>
  );
};

export default ClientInfo;
