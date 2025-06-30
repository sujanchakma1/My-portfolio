import React from "react";
import Logo from "../Logo/Logo";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content mt-20 py-5">
      <div>
        <Logo></Logo>
        <p className="mb-3">
          Copyright © {new Date().getFullYear()} - All right reserved{" "}
          <a
            href="https://www.facebook.com/share/1LL4u1yggP/"
            className="text-blue-400 link link-hover"
          >
            SUJAN
          </a>
        </p>
        <div className="flex gap-5">
          <a href="https://www.facebook.com/share/1LL4u1yggP/">
            <FaFacebook size={28} />
          </a>
          <a href="https://github.com/sujanchakma1">
            <IoLogoGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/sujan-chakma-273958364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
