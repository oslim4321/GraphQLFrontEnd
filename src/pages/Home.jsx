import React from "react";
import Project from "../component/Project";
import AddClient from "../component/AddClient";
import Clients from "../component/Clients";
import AddProject from "../component/AddProject";

export const Home = () => {
  return (
    <div>
      {" "}
      <div className="d-flex gap-2 align-items-center">
        <AddClient />
        <AddProject />
      </div>
      <Project />
      <hr />
      <Clients />
    </div>
  );
};
