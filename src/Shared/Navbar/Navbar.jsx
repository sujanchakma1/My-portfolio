import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { X } from "lucide-react";
import { MdDarkMode, MdLightMode, MdWork } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // প্রথম লোডে localStorage থেকে থিম পছন্দ থাকলে সেট করো
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // ভবিষ্যতে মনে রাখতে
  };

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
    <div className="navbar border-b border-white bg-base-100 fixed top-0 z-50 max-w-7xl mx-auto px-5">
      <div className="navbar-start">
        <Logo></Logo>
      </div>
      <div className=" navbar-center hidden md:flex">
        <ul className="menu menu-horizontal flex gap-5 font-semibold">
          {links}
        </ul>
      </div>
      <div className="items-center navbar-end flex gap-5">
        <button onClick={toggleTheme} className="cursor-pointer">
          {theme === "light" ? (
            <>
              <MdDarkMode size={28} />
            </>
          ) : (
            <>
              <MdLightMode className="text-yellow-400" size={28} />
            </>
          )}
        </button>
        <Link
          to="contacts"
          className="hidden md:flex btn rounded-full border border-secondary transition-all duration-300 bg-gradient-to-r from-secondary to-primary bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left"
          smooth={true}
          duration={500}
        >
          <MdWork size={18} /> Hire Me
        </Link>
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
        } bg-black shadow-md p-6`}
          >
            <div className="flex justify-end items-center mb-4">
              <button onClick={toggleDrawer}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-3 font-semibold text-center">
              {links}
              <li>
                <Link
                  to="contacts"
                  className="btn btn-color rounded-full"
                  smooth={true}
                  duration={500}
                >
                  <MdWork size={18} /> Hire Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
