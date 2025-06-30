import React from "react";
import logo from "../../assets/Logo/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="" className="w-18 " />
    </div>
  );
};

export default Logo;
