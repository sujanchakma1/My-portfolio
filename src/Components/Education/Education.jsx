import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Diploma in Computer Science & Technology",
    institution: "Chittagong Polytechnic Institute",
    duration: "2023 - Current",
    description:
      "Studying core subjects including Data Structures, Web Development, and Software Engineering. Passionate about building real-world projects and solving problems through technology.",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Banchara High School",
    duration: "2020 - 2022",
    description:
      "Spent the most memorable years of my childhood here — full of friends, fun, and first lessons of life.",
  },
];

const Education = () => {
  return (
    <div id="education" className="pt-10">
      <h1 className="text-5xl font-bold text-center mb-10">Education</h1>
      <div className="space-y-6  relative">
        <div className="absolute left-2 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary rounded"></div>
        {educationData.map((edu, index) => (
          <div key={index} className="pl-12">
            <div className="relative shadow-md rounded-xl p-6 border-2 border-secondary bg-base-200 hover:shadow-xl">
              <div className="absolute -left-11 top-0 text-2xl">🎓</div>
              <div className="flex justify-between ">
                <h2 className="text-xl font-bold">{edu.degree}</h2>
                <p className="text-sm italic font-semibold">{edu.duration}</p>
              </div>
              <p className="text-md font-semibold">{edu.institution}</p>
              <p className="mt-2 text-sm">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
