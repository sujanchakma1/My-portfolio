import React from "react";
import Projects1 from "./Projects1";
import Projects2 from "./Projects2";
import Projects3 from "./Projects3";

const Projects = () => {
  return (
    <div className="pt-26 -mb-5" id="projects">
      <h1 className="text-5xl font-bold text-center">Projects</h1>
      <Projects1></Projects1>
      <Projects2></Projects2>
      <Projects3></Projects3>
    </div>
  );
};

export default Projects;
