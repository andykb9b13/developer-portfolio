import React from "react";
import ProfileLogo from "../assets/ProfileLogo.png";
import { motion } from "framer-motion";

const styles = {
  card: {
    boxShadow: "5px 5px 10px #222",
  },
};

const About = () => {
  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <img
          className="max-w-md rounded-lg overflow-hidden"
          src={ProfileLogo}
          alt="Andy Kleindienst profile"
          style={styles.card}
        />
      </motion.div>
      <p className="text-xl mt-5">
        As a Full-Stack software engineer I have a passion for working
        collaboratively in groups to solve problems and provide creative
        solutions. I recently earned a Full-Stack development certificate from
        UNC Chapel Hill where I had experience implementing MVC architectural
        frameworks, mobile-first development, version control with Git, Node.js,
        Express.js, Sequelize.js, MongoDB, NoSql, MySql, Cloudinary, Advanced
        Javascript, Bootstrap, Handlebars, jQuery, HTML, and CSS. In addition, I
        hope to leverage my strong communication skills and leadership abilities
        through my years of being a full-time professional musician to help
        foster a high-functioning and collaborative environment within a
        production team.
      </p>
    </div>
  );
};

export default About;
