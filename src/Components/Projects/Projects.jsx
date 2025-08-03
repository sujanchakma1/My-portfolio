import React from "react";
import Projects1 from "./Projects1";
import Projects2 from "./Projects2";
import Projects3 from "./Projects3";
import { Link } from "react-router";

const Projects = () => {
  return (
    <div className="pt-26 px-4 -mb-5" id="projects">
      <h1 className="text-5xl font-bold text-center"> Featured Projects</h1>
      <p className="font-medium text-center pt-5 max-w-3xl mx-auto">
        Here are some of my recent projects. Each project was carefully crafted
        with attention to detail, performance, and user experience.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Projects1></Projects1>
        <Projects2></Projects2>
        <Projects3></Projects3>
      </div>

      <div className="flex justify-center">
        <Link to="https://github.com/sujanchakma1">
          <button className="btn btn-primary rounded-full ">
            View My GitHub
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
