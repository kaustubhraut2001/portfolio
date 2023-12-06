import React from 'react';
import { useSelector } from 'react-redux';
import cssimg from '../../public/css.png';
import htmlimg from '../../public/html.png';
import javascriptimg from '../../public/javascript.png';
import Reactimg from '../../public/react.png';
import tailwindimg from '../../public/tailwind.png';
// import reduximg from '../../public/redux.png';
import nodeimg from '../../public/node.png';
// import expressimg from '../../public/express.png';
import mongodbimg from '../../public/MongoDbicon.png';

import AWS from "../../public/AWSIcons.png"





const Experience = () => {
  const isDarkMode = useSelector((state) => state.darkmode.isDarkMode);

  const techs = [
    {
      id: 1,
      src: htmlimg,
      title: 'HTML',
      style: isDarkMode ? 'shadow-orange-500' : 'shadow-orange-300',
    },
    {
      id: 2,
      src: cssimg,
      title: 'CSS',
      style: isDarkMode ? 'shadow-blue-500' : 'shadow-blue-300',
    },
    {
      id: 3,
      src: javascriptimg,
      title: 'JavaScript',
      style: isDarkMode ? 'shadow-yellow-500' : 'shadow-yellow-300',
    },
    {

      id: 4,
      src: javascriptimg,
      title: 'JavaScript',
      style: isDarkMode ? 'shadow-yellow-500' : 'shadow-yellow-300',
    },
    {
      id: 5,
      src: Reactimg,
      title: 'React',
      style: isDarkMode ? 'shadow-sky-500' : 'shadow-sky-300',

    },
    {
      id: 6,
      src: tailwindimg,
      title: 'Tailwind',
      style: isDarkMode ? 'shadow-blue-500' : 'shadow-blue-300',

    },
    {
      id: 7,
      src: nodeimg,
      title: 'Node',
      style: isDarkMode ? 'shadow-green-500' : 'shadow-green-300',

    },
    {
      id: 8,
      src: mongodbimg,
      title: 'MongoDB',
      style: isDarkMode ? 'shadow-green-500' : 'shadow-green-300',

    },
    {
      id: 9,
      src: AWS,
      title: 'AWS',
      style: isDarkMode ? 'shadow-green-500' : 'shadow-green-300',
    }

  ];

  return (
    <div
      name="experience"
      className={`bg-gradient-to-b ${
        isDarkMode ? 'from-gray-800 to-black' : 'from-white to-gray-200'
      } w-full h-screen flex flex-wrap`}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className={`text-4xl font-bold border-b-4 border-gray-500 p-2 inline ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`
          }>
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} bg-gray-800`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;