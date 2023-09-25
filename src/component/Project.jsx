import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROJECTS } from "./Query/ProjectQuery";
import Spinner from "./Spinner";
import ProjectsCard from "./ProjectsCard";

const Project = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something is wrong</p>;
  const { projects } = data;
  return (
    <>
      {!loading && projects.length > 0 && (
        <div className="row  mt-5">
          {projects.map((project, i) => (
            // <p>{project.name}</p>
            <ProjectsCard
              key={i + Math.floor(Math.random() * 100)}
              project={project}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Project;
