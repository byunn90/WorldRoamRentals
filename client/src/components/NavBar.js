import React from "react";

function NavBar() {
  return (
    <nav className="navBar bg-white border-gray-200 dark:bg-gray-900 flex justify-between p-4">
      <div className="pr-10 logo text-1xl font-bold">Logo</div>
      <ul className="flex space-x-4 gap-2">
        <li>
          <a
            href="https://www.w3schools.com"
            className=" text-black hover:bg-white hover:text-blue-600 md:hover:bg-transparent"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="https://www.w3schools.com"
            className="text-black md:hover:bg-transparent hover:text-blue-600"
          >
            Service
          </a>
        </li>
        <li>
          <a
            href="https://www.w3schools.com"
            className="text-black hover:bg-white hover:text-blue-600 md:hover:bg-transparent"
          >
            Vechicles
          </a>
        </li>
        <li>
          <a
            href="https://www.w3schools.com"
            className="text-black md:hover:bg-transparent hover:text-blue-600"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="https://www.w3schools.com"
            className="block text-black md:hover:bg-transparent hover:text-blue-600"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
