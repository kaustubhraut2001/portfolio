import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-scroll";
import HeroImage from "../../public/heroImage.png";
import { useSelector } from "react-redux";

const Home = () => {
  const isDarkMode = useSelector((state) => state.darkmode.isDarkMode);

  return (
    <div
      name="home"
      className={`h-screen w-full ${
        isDarkMode
          ? "bg-gradient-to-b from-black to-gray-800"
          : "bg-gradient-to-b from-white to-gray-200"
      } flex flex-col justify-center items-center`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-center md:flex-row md:text-left">
        <div className="mb-8">
          <h2 className={`text-4xl sm:text-7xl ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Hey, I'm Kaustubh Raut {" "}
          </h2>

          <p className={isDarkMode ? "text-white" : "text-gray-800 py-4 max-w-md"}>
            I am a Software Developer with a passion for creating beautiful and functional websites and web applications.
          </p>
          <Link to="portfolio" smooth duration={300} className={`group text-white ${isDarkMode ? "bg-gradient-to-r from-cyan-500 to-blue-500" : "bg-gradient-to-r from-cyan-500 to-blue-500"} px-6 py-3 flex items-center rounded-md cursor-pointer inline-block`}>
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <FaAngleRight />
            </span>
          </Link>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto mt-8 md:mt-0 w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;