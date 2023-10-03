import React, { memo, useState } from "react";
import { GET_CLIENT } from "./Query/ClientQuery";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROJECT } from "./mutations/ProjectMutation";
import { GET_PROJECTS } from "./Query/ProjectQuery";

const AddProject = memo(() => {
  const [dataVal, setdataVal] = useState();
  const { loading, error, data } = useQuery(GET_CLIENT);
  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { ...dataVal },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, addProject] },
      });
    },
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setdataVal((prev) => ({ ...prev, [name]: value }));
  }
  function onSubmitClick(e) {
    e.preventDefault();
    if (
      !dataVal.name ||
      !dataVal.description ||
      !dataVal.status ||
      !dataVal.clientId
    ) {
      alert("Fill in all details");
      return; // Exit early if data is incomplete
    }
    addProject({ ...dataVal });

    console.log(dataVal, "meeee");
  }

  if (loading) return null;
  if (error) return "something went wromg";
  const { clients } = data;

  return (
    <>
      {!loading && !error && clients && (
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addProjecttModal"
          >
            <div className="d-flex align-items-center">
              <span className="mr-2">
                <i className="bi bi-person"></i>
              </span>
              <span>Add Project</span>
            </div>
          </button>

          <div
            className="modal fade"
            id="addProjecttModal"
            aria-labelledby="addProjecttModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="addProjecttModalLabel">
                    Add Project
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={onSubmitClick}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        name="description"
                        id=""
                        cols="30"
                        rows="5"
                        onChange={handleChange}
                        className="form-control"
                      ></textarea>
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

                    <div className="mb-3">
                      <label className="form-label">Clients</label>
                      <select
                        type="text"
                        className="form-control"
                        name="clientId"
                        onChange={handleChange}
                      >
                        <option>Select Client</option>
                        {clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                        {/* <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option> */}
                      </select>
                    </div>

                    <div>
                      <button
                        type="submit"
                        data-bs-dismiss="modal"
                        className="btn btn-secondary"
                      >
                        Add{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default AddProject;
