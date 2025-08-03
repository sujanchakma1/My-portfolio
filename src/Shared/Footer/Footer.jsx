import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center mt-20 py-5">
      <div>
        <p>
          Copyright © {new Date().getFullYear()} - All right
          reserved by Sujan Chakma
        </p>
      </div>
    </footer>
  );
};

export default Footer;
