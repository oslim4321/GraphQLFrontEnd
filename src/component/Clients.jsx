import { gql, useQuery } from "@apollo/client";
import React from "react";
import ClientRow from "./ClientRow";

const GET_CLIENT = gql`
  query getClient {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something Went Wrong</p>;
  const { clients } = data;
  console.log(clients, "clients");
  return (
    <div>
      {!loading && !error && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {clients.map((elem, i) => (
              <ClientRow key={elem._id} client={elem} index={i} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Clients;
