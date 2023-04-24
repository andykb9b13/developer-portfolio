import React from "react";
// import { Link } from "react-router-dom";
import AppCard from "./AppCard";

const styles = {
  projects: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

const Projects = () => {
  return (
    <section>
      <div style={styles.projects}>
        <h2>Projects</h2>
        <AppCard />
      </div>
    </section>
  );
};

export default Projects;
