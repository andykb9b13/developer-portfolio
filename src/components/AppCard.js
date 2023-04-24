import React from "react";
import { Link } from "react-router-dom";
import FitTrack from "../assets/FitTrack-App.png";
import ThePantry from "../assets/ThePantry-App.png";
import TechTalkToo from "../assets/TechTalkToo-App.png";

const AppCard = () => {
  const apps = [
    {
      name: "FitTrack",
      url: "https://fittrack.herokuapp.com/",
      imageSrc: FitTrack,
      altText: "Fit Track App",
    },
    {
      name: "The Pantry",
      url: "https://andykb9b13.github.io/pantryApp/",
      imageSrc: ThePantry,
      altText: "The Pantry App",
    },
    {
      name: "Tech Talk Too",
      url: "https://tech-talk-too.herokuapp.com/",
      imageSrc: TechTalkToo,
      altText: "Tech Talk Too App",
    },
  ];

  const styles = {
    appCard: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "20px",
      border: "2px solid black",
      backgroundColor: "#107E7D",
      borderRadius: "10px",
    },
    image: {
      width: "40%",
    },
    links: {
      color: "white",
      textDecoration: "none",
    },
  };

  return (
    <div>
      {apps.map((app) => (
        <div style={styles.appCard}>
          <h2 style={styles.links}>
            <Link to={app.url}>{app.name} </Link>
          </h2>
          <img src={app.imageSrc} alt={app.altText} style={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default AppCard;
