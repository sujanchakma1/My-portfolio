import React from "react";
import { FaCode, FaPaintBrush, FaRegLightbulb } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { Link } from "react-scroll";

const services = [
  {
    icon: <FaCode size={24} />,
    title: "Web Development",
    description:
      "Building responsive and dynamic websites using modern technologies.",
  },
  {
    icon: <FaPaintBrush size={24} />,
    title: "UI/UX Design",
    description:
      "Designing clean and intuitive user interfaces with a focus on user experience.",
  },
  {
    icon: <FaRegLightbulb size={24} />,
    title: "Best Practices & Guidelines",
    description:
      "Following industry-standard and give guid about what I know..",
  },
];
const About = () => {
  return (
    <div className="pt-26 -mb-5" id="about">
      <h1 className="text-5xl font-bold text-center">About Me</h1>
      <div className="hero-content flex-col lg:flex-row items-start gap-8 my-10">
        <div className="About flex-1 w-full space-y-5 text-center">
          <h2 className="text-4xl font-semibold">Passionate Web Developer</h2>
          <p className="text-lg">
            I specialize in creating responsive, accessible, and performant web
            applications using modern technologies.
          </p>
          <p className="text-lg">
            I'm passionate about creating elegant solutions to complex problems,
            and I'm constantly learning new technologies and techniques to stay
            at the forefront of the ever-evolving web landscape.
          </p>
          <div className="space-x-5">
            <Link to="contacts" smooth={true} duration={500}>
              <button className="btn-hover">
                Get in Touch
              </button>
            </Link>
            <a
              href="/resume.pdf"
              download="Sujan_Chakma_Resume.pdf"
              className="btn-color"
            >
              <LuDownload size={18} /> Download Resume
            </a>
          </div>
        </div>
        <div className="service flex-1 w-full">
          <div className="grid grid-cols-1 gap-2 w-full">
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
