import React from "react";
import Shopnow from "../../public/ShopNow.png";
import Map from "../../public/Mapbox.png";
import wikiapi from "../../public/WikiArticals.png";
import portpolio from "../../public/portfolio.png";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const isDarkMode = useSelector((state) => state.darkmode.isDarkMode);
  const portfolios = [
    {
      id: 1,
      src: Shopnow,
      title: "Shop Now",
      code: "https://github.com/kaustubhraut2001/ShopNow",
    },
    {
      id: 2,
      src: Map,
      title: "Travel-APP",
      code: "https://github.com/kaustubhraut2001/Travel-App",
    },
    {
      id: 4,
      src: portpolio,
      title: "Portfolio",
      code: "https://github.com/kaustubhraut2001/portfolio",
    },
  ];

  return (
    <div
      name="portfolio"
      className={`bg-gradient-to-b ${
        isDarkMode ? "from-black to-gray-800" : "from-white to-gray-200"
      } w-full min-h-screen text-white flex flex-wrap`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full">
        <div className="pb-8">
          <p
            className={`text-4xl font-bold inline border-b-4 border-gray-500 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Portfolio
          </p>
          <p
            className={`py-6 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Check out some of my work right here
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 px-2 md:px-0">
          {portfolios.map(({ id, src, title, code }) => (
            <div
              key={id}
              className={`shadow-md ${
                isDarkMode ? "shadow-gray-600" : "shadow-gray-300"
              } rounded-lg px-4 py-6`}
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full"
              />
              <div
                className={`text-center mt-3 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {title}
              </div>
              <div className="flex items-center justify-center mt-4 space-x-4">
                <button
                  className={`w-full py-2 duration-200 hover:scale-105 rounded ${
                    isDarkMode
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  Demo
                </button>
                <button
                  className={`w-full py-2 duration-200 hover:scale-105 rounded ${
                    isDarkMode
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;