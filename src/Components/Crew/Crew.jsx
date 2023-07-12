import React, { useState } from "react";
import "./Crew.css";
import backgroundCrewDesktop from "../../assets/crew/background-crew-desktop.jpg";
import { data } from "../../data";

const Crew = () => {
  const [crew, setCrew] = useState(data.crew[1]);

  return (
    <>
      <img
        src={backgroundCrewDesktop}
        alt="Background image"
        className="background-image"
      />
      <div className="crew-container">
        <p className="tab-title capitalize">
          <span>02</span> Meet your crew
        </p>
        <div className="crew-flex">
          <div className="crew-body">
            <h4 className="crew-role capitalize">{crew.role}</h4>
            <h1 className="crew-name capitalize">{crew.name}</h1>
            <p className="crew-bio bluish">{crew.bio}</p>
            <div className="flex switches space-between">
              <div
                className={`switch switch-one ${crew.name}`}
                onClick={() => {
                  setCrew(data.crew[1]);
                }}
              />
              <div
                className={`switch switch-two ${crew.name}`}
                onClick={() => {
                  setCrew(data.crew[2]);
                }}
              />
              <div
                className={`switch switch-three ${crew.name}`}
                onClick={() => {
                  setCrew(data.crew[3]);
                }}
              />
              <div
                className={`switch switch-four ${crew.name}`}
                onClick={() => {
                  setCrew(data.crew[4]);
                }}
              />
            </div>
            <div className="image-border" />
          </div>
          <img
            src={crew.images.webp}
            alt="Crew Member"
            className="crew-image"
          />
        </div>
      </div>
    </>
  );
};

export default Crew;
