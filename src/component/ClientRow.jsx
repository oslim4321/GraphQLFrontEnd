import { useMutation } from "@apollo/client";
import React from "react";
import { DELETE_CLIENT } from "./mutations/ClientMutation";
import { GET_CLIENT } from "./Query/ClientQuery";
import { GET_PROJECTS } from "./Query/ProjectQuery";

const ClientRow = ({ client, index }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // this will refetch the data every time we delete client
    refetchQueries: [{ query: GET_CLIENT }, { query: GET_PROJECTS }],
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENT });
    //   cache.writeQuery({
    //     query: GET_CLIENT,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });
  // DELETE_CLIENT
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger" onClick={deleteClient}>
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
