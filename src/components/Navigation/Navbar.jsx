import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { navItems } from "./NavItems";

//IMAGE//
import img from "../../assets/Images/logo.png";

//ICONS//
import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-xl dark:bg-black">
      <div className="container px-2 py-4 mx-auto">
        <div className="lg:flex lg:items-center bg-white dark:bg-black">
          <div className="flex items-center justify-between lg:ml-9 dark:bg-black">
            <div className="flex flex-col items-start md:flex-row md:items-center justify-between p-1 w-full text-base">
              <NavLink to="/" className="">
                <img
                  className="w-auto h-10 md:h-12 rounded-md"
                  src={img}
                  alt=""
                />
              </NavLink>
              <h1 className="hidden lg:block p-1 text-xs font-semibold uppercase italic dark:text-white">
                ..Excellence in Oilfield Services & Rig Operations
              </h1>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="text-primary dark:text-gray-200 hover:text-secondary dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={
              `${
                open
                  ? "translate-x-0 opacity-100 "
                  : "opacity-0 -translate-x-full "
              }` +
              "absolute inset-x-0 z-20 flex-1 px-6 lg:px-0 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-black lg:mt-0 lg:p-1 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-around w-full text-primary"
            }
          >
            <div>
              <ul className="nav flex flex-col text-gray-600 capitalize dark:text-white lg:flex lg:-mx-2 lg:flex-row lg:items-center active">
                {navItems.map((item) => {
                  if (item.title === "Home") {
                    return (
                      <li
                        key={item.id}
                        className="nav mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 text-hover dark:hover:text-gray-200"
                      >
                        <NavLink
                          to={item.path}
                          className="nav mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 font-medium text-hover hover:underline dark:hover:text-gray-200  dark:text-white"
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    );
                  }

                  return (
                    <li
                      key={item.id}
                      className="nav mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 font-medium text-hover hover:underline dark:hover:text-gray-200 active"
                    >
                      <NavLink to={item.path}>{item.title}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2 items-center">
              <div className="flex items-center mt-2 lg:mt-0">
                <a
                  href="https://facebook.com/sepnuarilservices"
                  target="_blank"
                  className="mx-2 text-hover text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-secondary dark:hover:text-hover"
                  aria-label="Reddit"
                >
                  <BsFacebook style={{ Size: "18px" }} />
                </a>
                <a
                  href="https://www.instagram.com/sepnuarilservices"
                  target="_blank"
                  className="mx-2 text-hover text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-secondary dark:hover:text-hover"
                  aria-label="Reddit"
                >
                  <FiInstagram style={{ fontSize: "18px" }} />
                </a>
                <a
                  href="https://linkedin.com/company/sepnuarilservices"
                  target="_blank"
                  className="mx-2 text-hover text-gray-600 transition-colors duration-300 transform dark:text-gray-300 dark:hover:text-hover"
                  aria-label="Reddit"
                >
                  <FaLinkedin style={{ fontSize: "18px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
