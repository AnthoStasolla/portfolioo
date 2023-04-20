import React from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { handleClick, isSidebarOpen } = useGlobalContext();
  return (
    <>
      <div className="header" onClick={handleClick}>
        <h1 className="text-navbar" style={{ fontSize: 80, color: "#cf2b99" }}>
          SA
        </h1>
        <ul className={isSidebarOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#works">Works</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {isSidebarOpen ? (
            <FaTimes size={20} color={"#cf2b99"} />
          ) : (
            <FaBars size={20} color={"whitesmoke"} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
