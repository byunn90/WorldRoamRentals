import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  console.log("showHomePopup:", showHomePopup);
  return (
    <nav className="navBar flex justify-between p-4">
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
              className={`transition-opacity duration-1000 ${
                hovered ? "opacity-0" : "opacity-100"
              }`}
            >
              Home
            </span>
            {showHomePopup && <div className="hidden"></div>}
          </button>
        </li>
        <li>
          <a
            href="https://www.w3schools.com"
            className="text-black md:hover:bg-transparent hover:text-blue-600 font-mono"
          >
            <FontAwesomeIcon icon={faCar} />
            About
          </a>
        </li>
        <li>
          <a
            href="https://www.w3schools.com"
            className="text-black md:hover:bg-transparent hover:text-blue-600 font-mono"
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            About
          </a>
        </li>
        <li>
          <a
            href="https://www.w3schools.com"
            className="block text-black md:hover:bg-transparent hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
