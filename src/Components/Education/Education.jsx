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
    description: "Major in Arts. Achieved GPA 4.39.",
  },
];

const Education = () => {
  return (
    <div id="education" className="pt-20 px-4">
      <h1 className="text-5xl font-bold text-center mb-10">Education</h1>
      <div className="space-y-6  relative">
        <div className="absolute left-2 top-1 h-full w-1 bg-gradient-to-b from-primary to-secondary rounded"></div>
        {educationData.map((edu, index) => (
          <div key={index} className="pl-12">
            <div className="relative shadow-md rounded-xl p-6 border border-gray-700 hover:shadow-xl">
              <div class="absolute -left-8 top-0 w-6 h-6 text-2xl">
                <FaGraduationCap size={20} />
              </div>
              <div className="flex justify-between">
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
