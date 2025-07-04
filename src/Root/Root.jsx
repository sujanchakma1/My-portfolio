import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  return (
    <section className="">
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto px-4">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Root;
