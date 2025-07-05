import React from "react";

const skills = {
  frontend: [
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
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://i.ibb.co/vC4CYcWX/express-js.png",
    },
  ],
  tools: [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "GitHub",
      icon: "https://i.ibb.co/Cpg4vghW/icons8-github-64.png"
    }
  ],
};

const SkillCategory = ({ title, list }) => (
  <div className="bg-base-300 border border-primary rounded-md py-5">
    <h3 className="text-3xl font-bold mb-8 text-center">{title}</h3>
    <div className="space-y-5 flex justify-center">
      <div className="grid grid-cols-3 gap-5">
        {list.map((skill, index) => (
          <div
            key={index}
            className="items-center  hover:scale-105 duration-200"
          >
            <img src={skill.icon} alt={skill.name} className="w-10 h-10 items-center" />
            <p className="font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="pt-26 -mb-5">
      <div>
        <h2 className="text-5xl font-bold text-center">Skills</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <SkillCategory title="Frontend" list={skills.frontend} />
          <SkillCategory title="Backend" list={skills.backend} />
          <SkillCategory title="Tools & Database" list={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
