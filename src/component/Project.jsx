import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROJECT } from "./Query/ProjectQuery";
import Spinner from "./Spinner";
import ProjectsCard from "./ProjectsCard";

const Project = () => {
  const { loading, error, data } = useQuery(GET_PROJECT);

  if (loading) return <Spinner />;
  if (error) return <p>Something is wrong</p>;
  const { projects } = data;
  return (
    <>
      {!loading && projects.length > 0 && (
        <div>
          {projects.map((project) => (
            // <p>{project.name}</p>
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  );
};

export default Project;
