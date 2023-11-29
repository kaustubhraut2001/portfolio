import React from "react";
import { useState } from "react";
import {Link} from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [nav, setnav] = useState(false);
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
      link: "Portfolio",
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
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Kaustubh</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((itmes) => (
          <li
            key={itmes.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
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
    </div>
  );
};

export default NavBar;
