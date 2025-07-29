import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content mt-20 py-5">
      <div>
        <p>
          © {new Date().getFullYear()} <a href="www.linkedin.com/in/sujan99" className="underline link-hover font-semibold text-blue-300">SUJAN</a> | MERN Stack Developer. - All right
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
