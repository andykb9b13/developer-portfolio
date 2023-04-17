import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section>
      <div>
        <h2>Projects</h2>
        <Link to="/project/1">Project 1</Link>
        <Link to="/project/2">Project 2</Link>
        <Link to="/project/3">Project 3</Link>
        <Link to="/project/4">Project 4</Link>
        <Link to="/project/5">Project 5</Link>
        <Link to="/project/6">Project 6</Link>
      </div>
    </section>
  );
};

export default Projects;
