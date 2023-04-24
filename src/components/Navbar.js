import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="font-thin text-center text-3xl space-x-8 my-10">
        <Link className="projects" to="projects">
          Projects
        </Link>
        <Link className="about" to="about">
          About Me
        </Link>
        <Link className="contact" to="contact">
          Contact
        </Link>
        <Link className="resume" to="resume">
          Resume
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
