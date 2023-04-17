import React from "react";
import { Link } from "react-router-dom";
import fitTrackApp from "../FitTrack-App.png";
import techTalkToo from "../TechTalkToo-App.png";
import thePantry from "../ThePantry-App.png";

const Projects = () => {
  return (
    <section>
      <div>
        <h2>Projects</h2>
        <Link to="https://fittrack.herokuapp.com/">
          <img src={fitTrackApp} alt="FitTrack App" />
        </Link>
        <Link to="https://tech-talk-too.herokuapp.com/">
          <img src={techTalkToo} alt="TechTalkToo App" />
        </Link>
        <Link to="https://andykb9b13.github.io/pantryApp/">
          <img src={thePantry} alt="The Pantry App" />
        </Link>
        <Link to="/project/4">Project 4</Link>
        <Link to="/project/5">Project 5</Link>
        <Link to="/project/6">Project 6</Link>
      </div>
    </section>
  );
};

export default Projects;
