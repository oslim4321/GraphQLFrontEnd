import React from "react";

const ProjectsCard = ({ project }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-center align-items-between">
            <h1 className="card-title">{project.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
