import React from "react";
import Logo from "../Logo/Logo";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-scroll";
import { LuDownload } from "react-icons/lu";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const links = (
    <>
      <li className="link link-hover">
        <Link onClick={scrollToTop}>Home</Link>
      </li>
      <li className="link link-hover">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li className="link link-hover">
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
      </li>
      <li className="link link-hover">
        <Link to="education" smooth={true} duration={500}>
          Education
        </Link>
      </li>
      <li className="link link-hover">
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
      </li>
      <li className="link link-hover">
        <Link to="contacts" smooth={true} duration={500}>
          Contacts
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50 max-w-7xl mx-auto">
      <div className="navbar-start">
        <Logo></Logo>
      </div>
      <div className=" navbar-center hidden md:flex">
        <ul className="menu menu-horizontal flex gap-5">{links}</ul>
      </div>
      <div className="items-center navbar-end flex gap-3 px-4">
        <button className="btn hidden md:flex btn-primary rounded-xl">
          <LuDownload size={18} /> Resume
        </button>
        <div className="dropdown items-center relative group md:hidden">
          <div tabIndex={0} role="button" className="cursor-pointer">
            <RiMenu3Fill size={32} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primary rounded-md mt-3 w-46 p-5 -left-42 flex gap-5"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
