import React from "react";
import me from "../../assets/My Photo/Me.jpg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import Typewriter from "./Typewriter";

const Hero = () => {
  return (
    <div className="pt-20 -mb-5">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="flex-1/3">
          <img src={me} className="max-w-xs rounded-full bg-primary p-3 " />
        </div>
        <div className="flex-2/3 space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold">Hey! I’m Sujan 👋</h1>
          <Typewriter
            text=""
            className="text-2xl font-medium"
          />
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
          <button className="btn btn-primary rounded-xl">
            <LuDownload size={18} />
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
