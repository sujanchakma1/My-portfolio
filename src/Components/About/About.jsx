import React from "react";
import { FaCode, FaMobileAlt, FaRegLightbulb } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { Link } from "react-scroll";

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
    <div id="about">
      <div className="hero-content flex-col lg:flex-row items-start gap-8 my-10">
        <div className="flex-1 w-full">
          <h1 className="text-5xl font-bold text-center mb-5">About Me</h1>
          <div className="About space-y-5 text-center">
            <p className="text-lg text-left font-semibold">
              My name is Sujan Chakma. I am currently a 3rd-year student at
              Chittagong Polytechnic, studying Computer Science and Technology.
            </p>
            <p className="text-lg text-left font-semibold">
              My programming journey started with the Programming Hero web
              development course, where I began learning from zero. I really
              enjoy exploring new technologies and libraries to keep improving
              my skills.
            </p>
            <p className="text-lg text-left font-semibold">
              Outside of programming, I love traveling with friends and playing
              football. I am a curious and enthusiastic learner who likes taking
              on challenges and growing every day.
            </p>
            <div className="space-x-5 pt-4">
              <Link to="contacts" smooth={true} duration={1000} offset={-80}>
                <button className="btn-hover">Get in Touch</button>
              </Link>
              <a
                href="/sujan_chakma_resume.pdf"
                download="Sujan_Chakma_Resume.pdf"
                className="btn-color"
              >
                Download Resume <LuDownload size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="service flex-1 w-full">
          <h1 className="text-5xl font-bold text-center mb-5">Services</h1>
          <div className="grid grid-cols-1 gap-7 w-full">
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
