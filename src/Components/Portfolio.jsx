import React from "react";
import Shopnow from "../../public/ShopNow.png";
import Map from "../../public/Mapbox.png";
import wikiapi from "../../public/WikiArticals.png";
import portpolio from "../../public/portfolio.png";




const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Shopnow,
      title : "ShopNow",
      code : "https://github.com/kaustubhraut2001/ShopNow"

    },
    {
      id: 2,
      src: Map,
     title :  "Mapbox",
     code :   "https://github.com/kaustubhraut2001/Travel-App/tree/master"
    },

    {
      id: 3,
      src: portpolio,
      title : "Portfolio",
      code : "https://github.com/kaustubhraut2001/portfolio"
    }

  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title ,code }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg px-7 h-30 w-35">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
              {title}
              </div>
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank">Code</a>
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
