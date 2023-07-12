import React, { useEffect, useState } from "react";
import backgroundTechnologyDesktop from "../../assets/technology/background-technology-desktop.jpg";

import "./Technology.css";
import { data } from "../../data";

const Technology = () => {
  const [technology, setTechnology] = useState(data.technology[1]);
  const [imageOrientation, setImageOrientation] = useState("portrait");

  const handleResize = () => {
    if (window.innerWidth <= 1150) {
      setImageOrientation("landscape");
    } else {
      setImageOrientation("portrait");
    }
  };

  window.addEventListener("resize", handleResize);

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <>
      <img
        src={backgroundTechnologyDesktop}
        alt="Background image"
        className="background-image"
      />
      <div className="technology-container">
        <p className="tab-title capitalize">
          <span>03</span> space launch 101
        </p>
        <div className="technology-body flex">
          <div className="flex">
            <div className="numbers flex-v">
              <div
                className={`background-circle cursor launch ${technology.name}`}
                onClick={() => {
                  setTechnology(data.technology[1]);
                }}
              >
                <h4>1</h4>
              </div>
              <div
                className={`background-circle cursor port  ${technology.name}`}
                onClick={() => {
                  setTechnology(data.technology[2]);
                }}
              >
                <h4>2</h4>
              </div>
              <div
                className={`background-circle cursor capsule space-capsule  ${technology.name}`}
                onClick={() => {
                  setTechnology(data.technology[3]);
                }}
              >
                <h4>3</h4>
              </div>
            </div>
            <div className="technology-about flex-v">
              <div>
                <p className="terminology bluish capitalize">
                  The terminology...
                </p>
                <h3 className="technology-name capitalize">
                  {technology.name}
                </h3>
              </div>
              <p className="technology-description bluish">
                {technology.description}
              </p>
            </div>
          </div>

          {/* TODO Change this to .landscape from medium to small screen */}
          <img
            src={technology.images[imageOrientation]}
            alt="Technology"
            className="technology-image"
          />
        </div>
      </div>
    </>
  );
};

export default Technology;
