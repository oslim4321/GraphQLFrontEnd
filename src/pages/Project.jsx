import { useQuery } from "@apollo/client";
import React from "react";
import Spinner from "../component/Spinner";
import { GET_PROJECT } from "../component/Query/ProjectQuery";
import { Link, useParams } from "react-router-dom";
import ClientInfo from "../component/ClientInfo";

const Project = () => {
  const { id } = useParams();
  console.log(id);
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  if (loading) return <Spinner />;
  if (error) return <p>Camt get this Data</p>;

  // console.log(data);
  const { project } = data;
  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-md-75 card p-5">
          <Link
            to={"/"}
            className="btn btn-light btn-sm w-25 d-inline ms-auto fw-bolder"
          >
            Go Back
          </Link>
          <h1>{project.name}</h1>
          <p>{project.description}</p>

          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{project.status}</p>
          <ClientInfo client={project.client} />
        </div>
      )}
    </>
  );
};

export default Project;
