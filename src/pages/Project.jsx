import { useQuery } from "@apollo/client";
import React from "react";
import Spinner from "../component/Spinner";
import { GET_PROJECT } from "../component/Query/ProjectQuery";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  console.log(id);
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  if (loading) return <Spinner />;
  if (error) return <p>Camt get this Data</p>;

  console.log(data);
  return <div>Project</div>;
};

export default Project;
