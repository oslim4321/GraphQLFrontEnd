import React from "react";
import Project from "../component/Project";
import AddClient from "../component/AddClient";
import Clients from "../component/Clients";

export const Home = () => {
  return (
    <div>
      {" "}
      <AddClient />
      <Project />
      <hr />
      <Clients />
    </div>
  );
};
