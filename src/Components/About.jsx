import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-80 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-coll justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am 2023 graduate with an 6 Months of Internship experiance at an
          Amazon.I am proficient in both backend and frontend. I have worked on
          various projects and have a good knowledge of Data Structures and
          Algorithms. I am a quick learner and a team player.
        </p>
      </div>
    </div>
  );
};

export default About;
