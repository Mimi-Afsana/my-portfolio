import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPortrait } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const change = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", change);
  const menuItems = (
    <>
      <li className="">
        <Link to="/">HOME</Link>
      </li>

      <li>
        <a href="#about">ABOUT</a>
      </li>

      <li>
        <a href="#services">SERVICES</a>
      </li>
      <li>
        <a href="#skill">SKILLS</a>
      </li>
      <li>
        <a href="#portfolio">PORTFOLIOS</a>
      </li>
      <li>
        <a href="#contact">CONTACT</a>
      </li>
    </>
  );

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-black"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl pl-6">
            <FaPortrait className="mr-3 rounded-full text-2xl"></FaPortrait>{" "}
            Afsana Mimi
          </a>
        </div>
        <div className="navbar-center hidden lg:flex lg:pr-36">
          <ul className="menu menu-horizontal p-0 ">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
