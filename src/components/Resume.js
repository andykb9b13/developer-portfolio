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
    width: "100%",
  },
};

const Resume = () => {
  return (
    <div className="section justify-center inline-block">
      {/* <h2>Technologies</h2> */}
      <Button>
        <div>
          <a
            href={ResumePdf}
            download="Resume"
            className="w-1/2 mx-auto flex justify-center"
          >
            <img src={ResumeImg} alt="resume icon" style={styles.icon} />
          </a>
        </div>
      </Button>
      <div>
        <h2 className="text-center">My Skills</h2>
        <Icons />
      </div>
    </div>
  );
};

export default Resume;
