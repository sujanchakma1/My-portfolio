import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <p className="font-bold text-xl" >&lt; <span className="patua-font ">Sujan</span>  <span className="text-[#7976b4]"> /&gt;</span></p>
    </Link>
  );
};

export default Logo;
