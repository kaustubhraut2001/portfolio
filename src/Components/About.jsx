import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const darkMode = useSelector((state) => state.darkmode.isDarkMode);
  console.log(darkMode + " from About");

  // Conditional classes based on darkMode state
  const textColor = darkMode ? "text-white" : "text-gray-800";
  const gradientFrom = darkMode ? "from-gray-800" : "from-white";
  const gradientTo = darkMode ? "to-black" : "to-gray-200";

  return (
    <div
      name="about"
      className={`w-full h-80 bg-gradient-to-b ${gradientFrom} ${gradientTo} ${textColor}`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-coll justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className={`text-xl mt-20 ${darkMode ? "text-white" : "text-gray-800"}`}>
          I am a 2023 graduate with 6 months of internship experience at Amazon. I am proficient in both backend and frontend development. I have worked on various projects and have good knowledge of Data Structures and Algorithms. I am a quick learner and a team player.
        </p>
      </div>
    </div>
  );
};

export default About;