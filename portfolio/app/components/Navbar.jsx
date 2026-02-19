import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto top-0 z-50">
      <div>
        {/* Logo or Brand Name */}

        <h1 className="font-bold text-[20px] text-white hover:text-indigo-300 transition duration-300 ease-in-out">
          CLG
        </h1>
      </div>
      <div>
        {/* Navigation Links */}
        <ul className="flex space-x-4 text-[16px] mx-2">
          <li>
            <a
              href="#about"
              className="text-white hover:text-indigo-300 transform transition duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-white hover:text-indigo-300 transform transition duration-300 ease-in-out "
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white hover:text-indigo-300 transform transition duration-300 ease-in-out "
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-indigo-300 transform transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
