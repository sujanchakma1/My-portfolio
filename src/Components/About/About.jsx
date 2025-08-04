import React from "react";
import { FaCode, FaMobileAlt, FaRegLightbulb } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { Link } from "react-scroll";
import me from "./me.jpg";

const services = [
  {
    icon: <FaMobileAlt size={24} />,
    title: "Web Design",
    description:
      "Designing clean and intuitive user interfaces with a focus on user experience.",
  },
  {
    icon: <FaCode size={24} />,
    title: "Web Development",
    description:
      "Building responsive and dynamic websites using modern technologies.",
  },
  {
    icon: <FaRegLightbulb size={24} />,
    title: "Great Support",
    description:
      "Support is very important for a client and I always support each of my clients.",
  },
];
const About = () => {
  return (
    <div className="pt-10" id="about">
      <h1 className="text-5xl font-bold text-center">About Me</h1>
      <div className="About space-y-2 max-w-4xl mx-auto text-center pt-12">
        <h2 className="text-4xl font-semibold mb-4">Passionate Web Developer</h2>
        <p className="text-lg">
          I specialize in creating responsive, accessible, and performant web
          applications using modern technologies.
        </p>
        <p className="text-lg">
          I'm passionate about creating elegant solutions to complex problems,
          and I'm constantly learning new technologies and techniques to stay at
          the forefront of the ever-evolving web landscape.
        </p>
        <div className="space-x-5 pt-4">
          <Link to="contacts" smooth={true} duration={1000} offset={-80}>
            <button className="btn-hover">Get in Touch</button>
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
      <div className="hero-content flex-col lg:flex-row items-start gap-8 my-10">
        <div className="flex-1 w-full pt-5">
          <img src={me} alt="" className="w-2xl mx-auto h-full rounded mt-10" />
        </div>
        <div className="service flex-1 w-full">
          <div className="grid grid-cols-1 gap-2 w-full">
            <h2 className="text-4xl font-semibold text-center"> What I Do</h2>
            {services.map((service, index) => (
              <div
                className="rounded-xl bg-base-200 p-5 shadow-md hover:shadow-xl hover:scale-102 transition-all flex gap-3 items-center"
                key={index}
              >
                <div className="bg-secondary p-2 rounded-full">
                  {service.icon}
                </div>
                <div>
                  <h2 className="font-semibold text-xl">{service.title}</h2>
                  <p className="text-sm font-medium">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
