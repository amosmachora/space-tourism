import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/shared/logo.svg";
import Hamburger from "../../assets/shared/icon-hamburger.svg";
import Close from "../../assets/shared/icon-close.svg";

const Navbar = ({ setPageIndex }) => {
  const [activeTab, setActiveTab] = useState("main-active");
  const [smallScreen, setSmallScreen] = useState(false);
  const [icon, setIcon] = useState(Hamburger);

  useEffect(() => {
    if (smallScreen === true) {
      setIcon(Close);
    } else {
      setIcon(Hamburger);
    }
  }, [smallScreen]);

  return (
    <nav className="flex space-between">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="line" />
      <ul className="nav-links flex space-around">
        <li
          className={`nav-link flex main ${activeTab}`}
          onClick={() => {
            setPageIndex(0);
            setActiveTab("main-active");
          }}
        >
          <span>00</span> <p>HOME</p>
        </li>
        <li
          className={`nav-link flex destination ${activeTab}`}
          onClick={() => {
            setPageIndex(1);
            setActiveTab("destination-active");
          }}
        >
          <span>01</span> <p>DESTINATION</p>
        </li>
        <li
          className={`nav-link flex crew ${activeTab}`}
          onClick={() => {
            setPageIndex(2);
            setActiveTab("crew-active");
          }}
        >
          <span>02</span> <p>CREW</p>
        </li>
        <li
          className={`nav-link flex technology ${activeTab}`}
          onClick={() => {
            setPageIndex(3);
            setActiveTab("technology-active");
          }}
        >
          <span>03</span> <p>TECHNOLOGY</p>
        </li>
      </ul>
      <img
        src={icon}
        alt="Hamburger"
        className="hamburger"
        onClick={() => {
          setSmallScreen((prevState) => !prevState);
        }}
      />
      {smallScreen && (
        <div className="small-screen-nav">
          <p
            className="capitalize nav-link"
            onClick={() => {
              setPageIndex(0);
              setActiveTab("main-active");
            }}
          >
            <span>00</span>Home
          </p>
          <p
            className="capitalize nav-link"
            onClick={() => {
              setPageIndex(1);
              setActiveTab("destination-active");
            }}
          >
            <span>01</span>Destination
          </p>
          <p
            className="capitalize nav-link"
            onClick={() => {
              setPageIndex(2);
              setActiveTab("crew-active");
            }}
          >
            <span>02</span>Crew
          </p>
          <p
            className="capitalize nav-link"
            onClick={() => {
              setPageIndex(3);
              setActiveTab("technology-active");
            }}
          >
            <span>03</span>Technology
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
