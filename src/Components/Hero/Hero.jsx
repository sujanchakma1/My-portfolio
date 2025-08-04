import React from "react";
import me from "../../assets/My Photo/me.png";
import { FaLink, FaWhatsapp } from "react-icons/fa";
import { LuDownload, LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import Typewriter from "./Typewriter";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="pt-24">
      <div className="hero-content flex-col text-center">
       
          <img
            src={me}
            alt="Hero image"
            class="max-w-xs object-cover rounded-full"
          />
        <div className=" space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I’m <span className="text-color">Sujan Chakma</span>
          </h1>
          <Typewriter text="" className="text-2xl font-semibold" />
          <p className="font-medium text-xl max-w-4xl">
            I create stellar web experiences with modern technologies.
            Specializing in MERN stack development, I build interfaces that are
            both beautiful and functional.
          </p>
          <div className="flex justify-center">
            <div className="flex gap-5">
              <a href="https://wa.me/8801571312226">
                <FaWhatsapp size={28} className="text-green-400" />
              </a>
              <a href="https://github.com/sujanchakma1">
                <LuGithub size={28} className="text-secondary" />
              </a>
              <a href="https://www.linkedin.com/in/sujan99">
                <SlSocialLinkedin size={28} className="text-blue-600" />
              </a>
            </div>
          </div>
          <div className="space-x-2 md:space-x-5">
            <Link to="projects" smooth={true} duration={1000} offset={-80}>
              <button className="btn-hover">
                View Projects <FaLink size={18} />
              </button>
            </Link>
            <a
              href="/resume.pdf"
              download="Sujan_Chakma_Resume.pdf"
              className="btn-color"
            >
              Download Resume <LuDownload size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
