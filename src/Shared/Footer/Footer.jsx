import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center mt-20 py-5">
      <div>
        <div className="flex gap-5 mb-3">
          <a href="https://www.facebook.com/share/1LL4u1yggP/">
            <FiFacebook size={28} className="text-blue-600" />
          </a>
          <a href="https://wa.me/8801571312226">
            <FaWhatsapp size={28} className="text-green-400" />
          </a>
          <a href="https://www.instagram.com/sujan___chakma?igsh=eWVuOGFpMmNvZ2dk">
            <FaInstagram size={28} className="text-yellow-900" />
          </a>
          <a href="https://github.com/sujanchakma1">
            <LuGithub size={28} className="text-secondary" />
          </a>
          <a href="https://www.linkedin.com/in/sujan99">
            <SlSocialLinkedin size={28} className="text-blue-600" />
          </a>
        </div>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="text-color font-semibold">Sujan Chakma</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
