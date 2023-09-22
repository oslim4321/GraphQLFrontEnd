import { gql } from "@apollo/client";



export const GET_PROJECT = gql`
    query getProject{
        projects{
            name,
            description
            clientId
            status
        }
    }
`