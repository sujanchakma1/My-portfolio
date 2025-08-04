import React, { useState } from "react";

const skills = {
  frontend: [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      percentage: 85,
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      percentage: 85,
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      percentage: 90,
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      percentage: 80,
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      percentage: 90,
    },
    {
      name: "Next.Js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      percentage: 65,
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      percentage: 80,
    },
    {
      name: "Express.js",
      icon: "https://i.ibb.co/vC4CYcWX/express-js.png",
      percentage: 75,
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      percentage: 90,
    },
  ],
  tools: [
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      percentage: 80,
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      percentage: 70,
    },
    {
      name: "Git/GitHub",
      icon: "https://i.ibb.co/Cpg4vghW/icons8-github-64.png",
      percentage: 90,
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      percentage: 95,
    },
  ],
};

const Skills = () => {
  const [filter, setFilter] = useState("all");

  const allSkills = [
    ...skills.frontend.map((s) => ({ ...s, category: "frontend" })),
    ...skills.backend.map((s) => ({ ...s, category: "backend" })),
    ...skills.tools.map((s) => ({ ...s, category: "tools" })),
  ];

  const filteredSkills =
    filter === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="pt-10">
      <div className="">
        <h2 className="text-5xl font-bold text-center mb-8">Skills</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["all", "frontend", "backend", "tools"].map((cat) => (
            <button
              key={cat}
              className={`btn px-5 capitalize rounded-full ${
                filter === cat ? "bg-gradient-to-r from-secondary to-primary border border-secondary" : "btn-outline btn-secondary text-base-content"
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-base-200 shadow-md hover:shadow-xl p-4 rounded-lg hover:scale-102 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 object-contain"
                />
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="ml-auto text-sm font-medium">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full  h-2 rounded-full">
                <div
                  className="h-1 bg-gradient-to-r from-secondary to-primary rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
