import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState("about");
  return (
    <div>
      <nav className="font-thin text-center text-3xl space-x-8 my-10">
        <h2 className="my-20 text-7xl">Andy Kleindienst | Developer</h2>
        <Link
          className="about transition duration-300"
          to="/about"
          onClick={() => setIsActive("about")}
          style={
            isActive === "about"
              ? { textShadow: "white 2px 3px 10px" }
              : { textShadow: "none" }
          }
        >
          About Me
        </Link>
        <Link
          className="projects transition duration-300"
          to="/projects"
          onClick={() => setIsActive("projects")}
          style={
            isActive === "projects"
              ? { textShadow: "white 2px 3px 10px" }
              : { textShadow: "none" }
          }
        >
          Projects
        </Link>
        <Link
          className="contact transition duration-300"
          to="/contact"
          onClick={() => setIsActive("contact")}
          style={
            isActive === "contact"
              ? { textShadow: "white 2px 3px 10px" }
              : { textShadow: "none" }
          }
        >
          Contact
        </Link>
        <Link
          className="resume transition duration-300"
          to="/resume"
          onClick={() => setIsActive("resume")}
          style={
            isActive === "resume"
              ? { textShadow: "white 2px 3px 10px" }
              : { textShadow: "none" }
          }
        >
          Resume
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
