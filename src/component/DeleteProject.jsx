import { useMutation } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DELETE_PROJECT } from "./mutations/ProjectMutation";
import { GET_PROJECTS } from "./Query/ProjectQuery";

const DeleteProject = ({ projectId }) => {
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <div>
      <button className="btn btn-danger" onClick={deleteProject}>
        Delete Project
      </button>
    </div>
  );
};

export default DeleteProject;
