import React from "react";
import { Link } from "react-router-dom";

const AppCard = () => {
  const apps = [
    {
      name: "FitTrack",
      url: "https://fittrack.herokuapp.com/",
      imageSrc: "assets/FitTrack-App.png",
      altText: "Fit Track App",
    },
    {
      name: "The Pantry",
      url: "https://andykb9b13.github.io/pantryApp/",
      imageSrc: "assets/ThePantry-App.png",
      altText: "The Pantry App",
    },
    {
      name: "Tech Talk Too",
      url: "https://tech-talk-too.herokuapp.com/",
      imageSrc: "assets/TechTalkToo-App.png",
      altText: "Tech Talk Too App",
    },
  ];

  return (
    <div>
      {apps.map((app) => (
        <div>
          <h2>
            <Link to={app.url}>{app.name} </Link>
          </h2>
          <img src={app.imageSrc} alt={app.altText} />
        </div>
      ))}
    </div>
  );
};

export default AppCard;
