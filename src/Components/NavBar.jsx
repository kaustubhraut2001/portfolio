import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../public/PortfolioLogo.png";
import darkicon from "../../public/icons8-dark-mode-50.png";
import lighticon from "../../public/icons8-light-mode-78.png";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../Redux/darkmodeslice";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);
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
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className={`flex justify-between items-center w-full h-20 px-4 text-white bg-gray-300 fixed opacity-50`}>
      <div className={`w-24 md:w-auto  bg-gray-300 `}>
        <img src={Logo} alt="logo" className="w-full h-auto" />
      </div>
      <ul className="hidden md:flex space-x-4">
        {links.map((items) => (
          <li
            key={items.id}
            className={`cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200`}
          >
            <Link to={items.link} smooth duration={500}>{items.link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <div className="w-10 h-10 bg-gray-300 flex items-center justify-center">
        <img
          onClick={() => toggle()}
          src={icon ? lighticon : darkicon}
          alt="icon"
          className="w-6 h-6 cursor-pointer"
        />
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((items) => (
            <li
              key={items.id}
              className="py-6 text-4xl"
            >
              <Link onClick={toggle} to={items.link} smooth duration={500}>{items.link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;