import React from "react";
import Bootstrap from "../assets/tech-icons/bootstrap.png";
import CSSIcon from "../assets/tech-icons/css3.png";
import Handlebars from "../assets/tech-icons/handlebars.png";
import html5 from "../assets/tech-icons/html5.png";
import Javascript from "../assets/tech-icons/javascript.png";
import jest from "../assets/tech-icons/jest.png";
import jquery from "../assets/tech-icons/jquery.png";
import mongodb from "../assets/tech-icons/mongodb.png";
import mysql from "../assets/tech-icons/mysql.png";
import nodejs from "../assets/tech-icons/nodejs.png";
import react from "../assets/tech-icons/react.png";
import sequelize from "../assets/tech-icons/sequelize.png";
import { motion } from "framer-motion";

const iconArr = [
  Bootstrap,
  CSSIcon,
  Handlebars,
  html5,
  Javascript,
  jest,
  jquery,
  mongodb,
  mysql,
  nodejs,
  react,
  sequelize,
];

const styles = {
  icon: {
    boxShadow: "5px 5px 10px #222",
    margin: "5px",
    backgroundColor: "#dedede",
    borderRadius: "5px",
    width: "20%",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Icons = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {iconArr.map((icon, i) => (
        <motion.img
          style={styles.icon}
          src={icon}
          alt="icon"
          key={i}
          variants={item}
        />
      ))}
    </motion.div>
  );
};

export default Icons;
