import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_CLIENT } from "./mutations/ClientMutation";
import { GET_CLIENT } from "./Query/ClientQuery";

const AddClient = () => {
  const [data, setdata] = useState();
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setdata((prev) => ({ ...prev, [name]: value }));
  }
  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { ...data },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENT });

      cache.writeQuery({
        query: GET_CLIENT,
        data: { clients: [...clients, addClient] },
      });
    },
  });
  const onSubmitClick = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.phone) {
      alert("Fill in all details");
      return; // Exit early if data is incomplete
    }
    // let name = data.name;
    // let email = data.email;
    // let phone = data.phone;
    addClient({ ...data });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#addClientModal"
      >
        <div className="d-flex align-items-center">
          <span className="mr-2">
            <i className="bi bi-person"></i>
          </span>
          <span>Add Client</span>
        </div>
      </button>

      <div
        className="modal fade"
        id="addClientModal"
        aria-labelledby="addClientModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addClientModalLabel">
                Modal title
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
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    onChange={handleChange}
                  />
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
  );
};

export default AddClient;
