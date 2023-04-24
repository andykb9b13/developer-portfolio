import React from "react";
import { Link } from "react-router-dom";

const styles = {
  nav: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "white",
    margin: "50px",
  },
};

const Navbar = () => {
  return (
    <header>
      <nav>
        <div style={styles.nav}>
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
