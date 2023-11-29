import React from "react";
import { FaAngleRight } from "react-icons/fa6";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b via-black from-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'am a Fullstack Developer{" "}
          </h2>
          <p className="text-grey-500 py-4 max-w-md">
            I'am a Fullstack Developer with a passion for creating beautiful and
            functional websites and web applications.
          </p>
          <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <FaAngleRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
