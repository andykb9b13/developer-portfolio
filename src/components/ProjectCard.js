import React from "react";
import { Link } from "react-router-dom";
import FitTrack from "../assets/FitTrack-App.png";
import ThePantry from "../assets/The-Pantry.png";
import TechTalkToo from "../assets/Tech-Talk-Too.png";
import ExtensionEditor from "../assets/Extension-Editor.png";
import TravelWeather from "../assets/Travel-Weather.png";
import Noted from "../assets/Noted.png";

const ProjectCard = () => {
  const apps = [
    {
      name: "FitTrack",
      url: "https://fittrack.herokuapp.com/",
      githubUrl: "https://github.com/andykb9b13/FitTrack-App",
      imageSrc: FitTrack,
      altText: "Fit Track App",
      description:
        "A fitness tracking app that allows users to track their workouts and view their progress over time.",
    },
    {
      name: "The Pantry",
      url: "https://andykb9b13.github.io/pantryApp/",
      githubUrl: "https://github.com/andykb9b13/pantryApp",
      imageSrc: ThePantry,
      altText: "The Pantry App",
      description:
        "Search for meals, plan with the weather, and stock your pantry with this app.",
    },
    {
      name: "Tech Talk Too",
      url: "https://tech-talk-too.herokuapp.com/",
      githubUrl: "https://github.com/andykb9b13/tech-talk-too",
      imageSrc: TechTalkToo,
      altText: "Tech Talk Too App",
      description: "A CMS-style blog for all those obsessed with talking tech.",
    },
    {
      name: "Extension Editor",
      url: "https://github.com/andykb9b13/Extension-Editor",
      githubUrl: "https://github.com/andykb9b13/Extension-Editor",
      imageSrc: ExtensionEditor,
      altText: "Extension Editor App",
      description:
        "A command line application for editing unwanted extensions.",
    },
    {
      name: "Travel Weather",
      url: "https://andykb9b13.github.io/travel-weather-dashboard/",
      githubUrl: "https://github.com/andykb9b13/travel-weather-dashboard",
      imageSrc: TravelWeather,
      alText: "Travel Weather App",
      description: "Choose your city and get a readout of the weather.",
    },
    {
      name: "Just Notes",
      url: "https://text-editor-fun.herokuapp.com/",
      githubUrl: "https://github.com/andykb9b13/text-editor",
      imageSrc: Noted,
      altText: "Just Notes App",
      description: "A text editor for all your note taking needs.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {apps.map((app, i) => (
        <div className="projectContainer m-2 relative" key={i}>
          <div className="imgContainer">
            <img
              className="max-w-sm bg-black rounded-lg"
              name={app.name}
              style={{ boxShadow: "5px 5px 10px #222" }}
              src={app.imageSrc}
              alt={app.altText}
            />
          </div>
          <div className="links absolute inset-0 flex flex-col items-center justify-evenly">
            <Link className="projectLink text-4xl" to={app.url}>
              Live Site
            </Link>
            <Link className="projectLink text-4xl" to={app.githubUrl}>
              GitHub Repo
            </Link>
            <p className="text-xl text-center m-2">{app.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
