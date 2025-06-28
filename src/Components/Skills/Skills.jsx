import React from "react";
import Marquee from "react-fast-marquee";

const skill = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://i.ibb.co/vC4CYcWX/express-js.png",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
];
const Skills = () => {
  return (
    <div className="py-10 bg-base-100 text-base-content">
      <h2 className="text-5xl font-bold text-center mb-8">Skills</h2>
      <Marquee speed={100}>
        <div className="px-16 items-center text-center flex gap-32 my-10">
          {skill.map((skill, index) => (
            <div key={index} className="">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-3"
              />
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
