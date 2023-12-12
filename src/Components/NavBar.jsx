import React from "react";
import { useState } from "react";
import {Link} from "react-scroll";
import Logo from "../../public/PortfolioLogo.png"
import darkicon from "../../public/icons8-dark-mode-50.png";
import lighticon from "../../public/icons8-light-mode-78.png";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../Redux/darkmodeslice";

import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const dispatch = useDispatch();
  const [nav, setnav] = useState(false);
  const [icon, setIcon] = useState(false);
  const toggle = () => {
    dispatch(toggleDarkMode(icon)); // Pass the current state of icon to toggleDarkMode
    setIcon(!icon);
  };
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experiance",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gray-300 bg-opacity-50 fixed">
      <div >

        <img src={Logo} alt="logo" />
      </div>
      <ul className="hidden md:flex">
        {links.map((itmes) => (
          <li
            key={itmes.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200"
          >
            <Link to={itmes.link} smooth duration={500}>{itmes.link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setnav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((itmes) => (
            <li
              key={itmes.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
             <Link onClick={()=>setnav(!nav)} to={itmes.link} smooth duration={500}>{itmes.link}</Link>
            </li>
          ))}
        </ul>
      )}

<div className="w-10 h-10 bg-gray-300 opacity-50 flex items-center justify-center">
        <img
          onClick={() => toggle()}
          src={icon ? lighticon : darkicon}
          alt="icon"
          className="w-6 h-6 cursor-pointer"
        />
      </div>



    </div>
  );
};

export default NavBar;
