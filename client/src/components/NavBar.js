import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Switch.css";
import {
  faHome,
  faCar,
  faInfoCircle,
  faEnvelope,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  // Define the states you need
  const [hovered, setHovered] = useState(false);
  const [showHomePopup, setShowHomePopup] = useState(false);
  // For the Home useState Icon
  const [showCarPopUp, setCarPopup] = useState(false);
  const [showHoveredVechicles, setHoveredVechicles] = useState(false);
  // For the Vechicle usestate Icon
  const [showAboutPopup, setAboutPopup] = useState(false);
  const [showHoveredAbout, setShowHoveredAbout] = useState(false);
  // For the About useState Icon
  const [showContactPopup, setContactPopup] = useState(false);
  const [ShowHoveredContact, setHoveredContactPopup] = useState(false);
  // Contacts

  // slider function for background color change
  const [backGroundChanger, setBackGround] = useState(false);
  const myslider = () => {
    setBackGround(!backGroundChanger);
  };
  return (
    <nav
      className={`navBar flex justify-between p-4 ${
        backGroundChanger ? "bg-light" : "bg-dark"
      }`}
    >
      <div className="font-sans pr-8 logo">RoamWithMeUI</div>
      <ul className="flex space-x-2 gap-1">
        <li>
          <button
            onClick={() => setShowHomePopup(!showHomePopup)}
            className={`base-btn-style relative flex items-center justify-center text-white bg-gradient-to-r from-indigo-400 transition ease-in-out delay-350 hover:via-purple-600 to-pink-500 font-sans focus:outline-none`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <FontAwesomeIcon
              icon={faHome}
              size="xs"
              className={`absolute transition-opacity duration-1000 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            />
            <span
              className={`text-xxs transition-opacity duration-1000 w-15 text-center ${
                hovered ? "opacity-0" : "opacity-100"
              }`}
            >
              Home
            </span>
            {showHomePopup && <div className="hidden"></div>}
          </button>
        </li>
        <li>
          <button
            onClick={() => setCarPopup(!showCarPopUp)}
            className={`base-btn-style relative flex items-center justify-center text-white bg-gradient-to-r from-indigo-400 transition ease-in-out delay-350 hover:via-purple-600 to-pink-500 font-mono focus:outline-none`}
            onMouseEnter={() => setHoveredVechicles(true)}
            onMouseLeave={() => setHoveredVechicles(false)}
          >
            <FontAwesomeIcon
              icon={faCar}
              size="xs"
              className={`absolute transition-opacity duration-1000 ${
                showHoveredVechicles ? "opacity-100" : "opacity-0"
              }`}
            />
            <span
              className={` text-xxs transition-opacity duration-1000 w-15 text-center ${
                showHoveredVechicles ? "opacity-0" : "opacity-100"
              }`}
            >
              Vehicles
            </span>
          </button>
        </li>
        <li>
          <button
            onClick={() => setShowHoveredAbout(!showAboutPopup)} // This line seems odd, are you sure about this logic?
            className={`base-btn-style relative flex items-center justify-center text-white bg-gradient-to-r from-indigo-400 transition ease-in-out delay-350 hover:via-purple-600 to-pink-500 font-mono focus:outline-none`}
            onMouseEnter={() => setShowHoveredAbout(true)}
            onMouseLeave={() => setShowHoveredAbout(false)}
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              size="xs"
              className={`absolute transition-opacity duration-1000 ${
                showHoveredAbout ? "opacity-100" : "opacity-0"
              }`}
            ></FontAwesomeIcon>
            <span
              className={` text-xxs transition-opacity duration-1000 w-15 text-center ${
                showHoveredAbout ? "opacity-0" : "opacity-100"
              }`}
            >
              About
            </span>
          </button>
        </li>
        <li>
          <button
            onClick={() => setContactPopup(!showContactPopup)}
            className={`base-btn-style relative flex items-center justify-center text-white bg-gradient-to-r from-indigo-400 transition ease-in-out delay-350 hover:via-purple-600 to-pink-500 font-mono focus:outline-none`}
            onMouseEnter={() => setHoveredContactPopup(true)}
            onMouseLeave={() => setHoveredContactPopup(false)}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xs"
              className={`absolute transition-opacity duration-1000 ${
                ShowHoveredContact ? "opacity-100" : "opacity-0"
              }`}
            ></FontAwesomeIcon>
            <span
              className={` text-xxs transition-opacity duration-1000 w-15 text-center ${
                ShowHoveredContact ? "opacity-0" : "opacity-100"
              }`}
            >
              Contact
            </span>
          </button>
        </li>
        <button
          className={`${backGroundChanger ? "bg-light" : "bg-dark"}`}
          onClick={myslider}
        >
          {backGroundChanger ? (
            <FontAwesomeIcon icon={faSun} size="lg"></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              className="bg-red p-1"
              size="xs"
              icon={faMoon}
            ></FontAwesomeIcon>
          )}
        </button>
      </ul>
    </nav>
  );
}

export default NavBar;
