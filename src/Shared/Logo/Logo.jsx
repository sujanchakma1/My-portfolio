import React from "react";
import { Link } from "react-router";

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Link to="/" onClick={scrollToTop}>
      <p className="font-bold text-xl text-color">&lt; Sujan /&gt;</p>
    </Link>
  );
};

export default Logo;
