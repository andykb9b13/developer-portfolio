import React from "react";
import { Link } from "react-router-dom";
import FitTrack from "../assets/FitTrack-App.png";
import ThePantry from "../assets/The-Pantry.png";
import TechTalkToo from "../assets/Tech-Talk-Too.png";
import ExtensionEditor from "../assets/Extension-Editor.png";
import TravelWeather from "../assets/Travel-Weather.png";
import Noted from "../assets/Noted.png";

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
    {
      name: "Extension Editor",
      url: "https://github.com/andykb9b13/Extension-Editor",
      imageSrc: ExtensionEditor,
      altText: "Extension Editor App",
    },
    {
      name: "Travel Weather",
      url: "https://andykb9b13.github.io/travel-weather-dashboard/",
      imageSrc: TravelWeather,
      alText: "Travel Weather App",
    },
    {
      name: "Just Notes",
      url: "https://text-editor-fun.herokuapp.com/",
      imageSrc: Noted,
      altText: "Noted App",
    },
  ];

  return (
    <div className="flex flex-wrap">
      {apps.map((app) => (
        <div>
          <h3>
            <Link to={app.url}>{app.name} </Link>
          </h3>
          <img
            className="max-w-md bg-black"
            src={app.imageSrc}
            alt={app.altText}
          />
        </div>
      ))}
    </div>
  );
};

export default AppCard;
