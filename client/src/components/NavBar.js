import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faCar,
  faInfoCircle,
  faEnvelope,
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
  const [showHoveredAbout, setHoveredAboutPopup] = useState(false);
  // For the About useState Icon
  const [showContactPopup, setContactPopup] = useState(false);
  const [ShowHoveredContact, setHoveredContactPopup] = useState(false);
  return (
    <nav
      className="navBar flex justify-between p-4"
      style={{ backgroundColor: "" }}
    >
      <div className="pr-10 logo text-1xl font-bold">Logo</div>
      <ul className="flex space-x-4 gap-2">
        <li>
          <button
            onClick={() => setShowHomePopup(!showHomePopup)}
            className="relative flex items-center justify-center text-white border-b-2 bg-gradient-to-r from-indigo-400 transition ease-in-out delay-350 hover:via-purple-600 to-pink-500 px-2 py-1 rounded font-mono focus:outline-none"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <FontAwesomeIcon
              icon={faHome}
              className={`absolute transition-opacity duration-1000 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            />
            <span
              className={`text-sm transition-opacity duration-1000 w-15 text-center ${
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
            onClick={() => setAboutPopup(!showAboutPopup)}
            className="relative flex items-center justify-center text-white border-b-2 bg-gradient-to-r from-indigo-400 transition ease-in-out delay-350 hover:via-purple-600 to-pink-500 px-2 py-1 rounded font-mono focus:outline-none"
            onMouseEnter={() => setHoveredVechicles(true)}
            onMouseLeave={() => setHoveredVechicles(false)}
          >
            <FontAwesomeIcon
              icon={faCar}
              className={`absolute transition-opacity duration-1000 ${
                showHoveredVechicles ? "opacity-100" : "opacity-0"
              }`}
            />
            <span
              className={`text-sm transition-opacity duration-1000 w-15 text-center ${
                showHoveredVechicles ? "opacity-0" : "opacity-100"
              }`}
            >
              Vehicles
            </span>
            {/* {New button has to be done here} */}
          </button>
        </li>
        <li>
          <button
            onClick={() => showContactPopup(!setContactPopup)}
            className=" text-sm relative flex items-center justify-center text-white border-b-2 bg-gradient-to-r from-indigo-400 transition ease-in-out delay-350 hover:via-purple-600 to-pink-500 px-2 py-1 rounded font-mono focus:outline-none"
            onMouseEnter={() => setHoveredAboutPopup(false)}
            onMouseLeave={() => setHoveredAboutPopup(true)}
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              className={`absolute transition-opacity duration-1000 ${
                showHoveredAbout ? "opacity-0" : "opacity-100"
              }`}
            ></FontAwesomeIcon>
            About
            <span
              className={`text-sm transition-opacity duration-1000 w-15 text-center ${
                showHoveredAbout ? "opacity-0" : "opacity-100"
              }`}
            ></span>
          </button>
        </li>
        <li>
          <button
            onClick={() => showContactPopup(!setContactPopup)}
            className="text-sm relative flex items-center justify-center text-white border-b-2 bg-gradient-to-r from-indigo-400 transition ease-in-out delay-350 hover:via-purple-600 to-pink-500 px-2 py-1 rounded font-mono focus:outline-none"
            onMouseLeave={() => setHoveredContactPopup(true)}
            onMouseEnter={() => setHoveredContactPopup(false)}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className={`absolute transition-opacity duration-1000 ${
                ShowHoveredContact ? "opacity-0" : "opacity-100"
              }`}
            ></FontAwesomeIcon>
            <span
              className={`text-sm transition-opacity duration-1000 w-15 text-center ${
                ShowHoveredContact ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
