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

  return (
    <div>
      {apps.map((app) => (
        <div>
          <h3>
            <Link to={app.url}>{app.name} </Link>
          </h3>
          <img className="max-w-md" src={app.imageSrc} alt={app.altText} />
        </div>
      ))}
    </div>
  );
};

export default AppCard;
