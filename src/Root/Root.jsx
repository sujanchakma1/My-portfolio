import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto px-4">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Root;
