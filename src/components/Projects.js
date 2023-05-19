import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="section"
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1000, opacity: 0, transition: { duration: 0.5 } }}
    >
      <ProjectCard />
    </motion.div>
  );
};

export default Projects;
