import React from "react";
import Icons from "./Icons";
import ResumePdf from "../assets/Resume.pdf";
import ResumeImg from "../assets/Resume.png";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const styles = {
  icon: {
    boxShadow: "5px 5px 10px #222",
    marginBottom: "20px",
    borderRadius: "5px",
    width: "100%",
  },
};

const Resume = () => {
  return (
    <motion.div
      className="section justify-center inline-block"
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1000, opacity: 0, transition: { duration: 0.5 } }}
    >
      <p>(click to download)</p>
      <Button>
        <div>
          <a
            href={ResumePdf}
            download="Resume"
            className="w-1/2 mx-auto flex justify-center"
          >
            <img src={ResumeImg} alt="resume icon" style={styles.icon} />
          </a>
          <h2>Email: andy.kleindienst@gmail.com</h2>
        </div>
      </Button>
      <div>
        <h2 className="text-center">My Skills</h2>
        <Icons />
      </div>
    </motion.div>
  );
};

export default Resume;
