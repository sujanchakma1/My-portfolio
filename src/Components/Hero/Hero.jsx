import React from "react";
import me from "../../assets/My Photo/me.jpg";
import { FaLink, FaWhatsapp } from "react-icons/fa";
import { LuDownload, LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import Typewriter from "./Typewriter";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="pt-20 max-w-5xl mx-auto -mb-5">
      <div className="hero-content flex-col text-center">
        <div className="">
          <img src={me} className="max-w-xs rounded-full" />
        </div>
        <div className=" space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I’m <span className="text-color">Sujan Chakma</span>
          </h1>
          <Typewriter text="" className="text-2xl font-medium" />
          <p className="font-medium text-xl">
            I create stellar web experiences with modern technologies.
            Specializing in MERN stack development, I build interfaces that are
            both beautiful and functional.
          </p>
          <div className="flex justify-center">
            <div className="flex gap-5">
              <a href="https://wa.me/8801571312226">
                <FaWhatsapp size={28} className="text-green-400"/>
              </a>
              <a href="https://github.com/sujanchakma1">
                <LuGithub size={28} className="text-secondary"/>
              </a>
              <a href="https://www.linkedin.com/in/sujan99">
                <SlSocialLinkedin size={28} className="text-blue-600"/>
              </a>
            </div>
          </div>
          <div className="space-x-5">
            <Link to="projects" smooth={true} duration={500}>
              <button className="btn-hover">
                View My Projects <FaLink size={18} />

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
