import React from "react";
import me from "../../assets/My Photo/Me.jpg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Hero = () => {
  return (
    <div className="mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="flex-1/3">
          <img src={me} className="max-w-xs rounded-full bg-primary p-3 " />
        </div>
        <div className="flex-2/3 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hey there! I’m Sujan 👋
          </h1>
          <p className="text-xl">
            I'm a MERN Stack Developer who loves building responsive, scalable,
            and efficient web applications using MongoDB, Express, React, and
            Node.js.
          </p>
          <div className="flex gap-5">
            <a href="https://www.facebook.com/share/1LL4u1yggP/">
              <FaFacebook size={28} className="text-blue-500" />
            </a>
            <a href="https://github.com/sujanchakma1">
              <IoLogoGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/sujan-chakma-273958364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin size={28} className="text-blue-500" />
            </a>
          </div>
          <button className="btn btn-primary rounded-xl">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
