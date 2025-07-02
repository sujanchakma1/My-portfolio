import React from "react";
import logo from "../../assets/Logo/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <div>
        <img src={logo} alt="" className="w-18 " />
      </div>
    </Link>
  );
};

export default Logo;
