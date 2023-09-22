import { gql } from "@apollo/client";

export const GET_CLIENT = gql`
  query getClient {
    clients {
      id
      name
      email
      phone
    }
  }
`;