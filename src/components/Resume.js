import React from "react";
import Icons from "./Icons";
import ResumePdf from "../assets/Resume.pdf";
import ResumeImg from "../assets/Resume.png";
import { Button } from "react-bootstrap";

const styles = {
  icon: {
    boxShadow: "5px 5px 10px #222",
    marginBottom: "20px",
    borderRadius: "5px",
    width: "30%",
  },
};

const Resume = () => {
  return (
    <div className="section justify-center">
      <h2>Technologies</h2>
      <Button>
        <a href={ResumePdf} download="Resume">
          <img src={ResumeImg} alt="resume icon" style={styles.icon} />
        </a>
      </Button>
      <div>
        <Icons />
      </div>
    </div>
  );
};

export default Resume;
