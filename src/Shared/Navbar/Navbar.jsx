import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-scroll";
import { LuDownload } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
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
    <div className="navbar bg-base-100 fixed top-0 z-50 max-w-7xl mx-auto px-5">
      <div className="navbar-start">
        <Logo></Logo>
      </div>
      <div className=" navbar-center hidden md:flex">
        <ul className="menu menu-horizontal flex gap-5 font-semibold">
          {links}
        </ul>
      </div>
      <div className="items-center navbar-end flex gap-3">
        <a
          href="/resume.pdf"
          download="Sujan_Chakma_Resume.pdf"
          className="btn hidden md:flex btn-primary rounded-xl"
        >
          <LuDownload size={18} /> Resume
        </a>
        <div className=" items-center  md:hidden">
          <div onClick={toggleDrawer}>
            <IoMenu size={32} />
          </div>
          {/* Overlay */}
          {isOpen && (
            <div className="fixed inset-0 z-40" onClick={toggleDrawer}></div>
          )}
          {/* Top Drawer */}
          <div
            className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } bg-primary shadow-md p-6`}
          >
            <div className="flex justify-end items-center mb-4">
              <button onClick={toggleDrawer}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-3 font-semibold">{links}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
