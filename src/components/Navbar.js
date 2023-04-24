import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="d-flex justify-content-evenly">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Me</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
