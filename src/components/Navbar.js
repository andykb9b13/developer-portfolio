import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  return (
    <div>
      <nav className="font-thin text-center text-3xl space-x-8 my-10">
        <h2 className="my-20 text-7xl">Andy Kleindienst | Developer</h2>
        <Link
          className="about"
          to="/"
          onClick={() => setIsActive("about")}
          style={isActive === "about" ? { color: "black" } : { color: "white" }}
        >
          About Me
        </Link>
        <Link
          className="projects"
          to="/projects"
          onClick={() => setIsActive("projects")}
          style={
            isActive === "projects" ? { color: "black" } : { color: "white" }
          }
        >
          Projects
        </Link>
        <Link
          className="contact"
          to="/contact"
          onClick={() => setIsActive("contact")}
          style={
            isActive === "contact" ? { color: "black" } : { color: "white" }
          }
        >
          Contact
        </Link>
        <Link
          className="resume"
          to="/resume"
          onClick={() => setIsActive("resume")}
          style={
            isActive === "resume" ? { color: "black" } : { color: "white" }
          }
        >
          Resume
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
