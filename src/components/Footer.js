import React from "react";
import GitHub from "../assets/github-logo.png";
import FaceBookLogo from "../assets/FaceBookLogo.png";
import LinkedInLogo from "../assets/linkedIn-Logo.png";

const Footer = () => {
  return (
    <div>
      <ul className="w-48 justify-center mx-auto">
        <li>
          <a href="https://github.com/andykb9b13">
            <img className="bg-white" src={GitHub} alt="gitHub Logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andy-kleindienst-12283226b/">
            <img className="bg-white" src={LinkedInLogo} alt="linkedIn Logo" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/andy.kleindienst.1/">
            <img className="bg-white" src={FaceBookLogo} alt="FaceBook Logo" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
