import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Update_PROJECT } from "./mutations/ProjectMutation";
import { GET_PROJECT } from "./Query/ProjectQuery";

const EditProject = ({ project }) => {
  //   console.log(project);4
  const [dataVal, setdataVal] = useState("");
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setdataVal((prev) => ({ ...prev, [name]: value }));
  }

  const [updateProject] = useMutation(Update_PROJECT, {
    variables: { id: project.id, ...dataVal },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  function onSubmitClick() {
    updateProject({ ...dataVal });
  }
  return (
    <div>
      <h5 className="mt-3">Update Project details</h5>
      <div>
        <div className="mb-3 w-full">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            defaultValue={project.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 w-full">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            defaultValue={project.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            type="text"
            className="form-control"
            name="status"
            onChange={handleChange}
          >
            <option>Select status</option>
            <option value="new">Not Started</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button className="btn btn-primary" onClick={onSubmitClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditProject;
