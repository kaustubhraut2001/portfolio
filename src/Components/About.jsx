import React from "react";
import { useSelector } from "react-redux";
import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaPython } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

const About = () => {
  const darkMode = useSelector((state) => state.darkmode.isDarkMode);

  const techStack = [
    { icon: <FaReact className="w-full h-full" />, name: "React" },
    { icon: <SiTypescript className="w-full h-full" />, name: "TypeScript" },
    { icon: <SiRedux className="w-full h-full" />, name: "Redux" },
    { icon: <FaNodeJs className="w-full h-full" />, name: "Node.js" },
    { icon: <SiMongodb className="w-full h-full" />, name: "MongoDB" },
    { icon: <FaAws className="w-full h-full" />, name: "AWS" },
    { icon: <SiTailwindcss className="w-full h-full" />, name: "Tailwind" },
    { icon: <FaGitAlt className="w-full h-full" />, name: "Git" },
  ];

  return (
    <section
      name="about"
      className={`w-full min-h-screen py-20  pt-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="space-y-6">
            <p className="text-xl leading-relaxed">
              I am a Full Stack Software Engineer, graduated in June 2023,
              passionate about building scalable, user-centric digital
              experiences. I bring proven expertise across frontend (React,
              Next.js) and backend (Node.js, Python, AWS) technologies. I have a
              track record of delivering impactful solutions, optimizing cloud
              infrastructure, and developing business-critical applications that
              enhance operational efficiency and drive positive outcomes.
            </p>

            <div
              className={`p-6 rounded-xl ${
                darkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Frontend Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Backend Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Cloud Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Performance Optimization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg aspect-square flex flex-col items-center justify-center transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50"
                } shadow-md hover:shadow-lg`}
              >
                <div className="w-12 h-12 mb-3 text-blue-400">{tech.icon}</div>
                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DSA Section */}
        <div
          className={`mt-12 p-6 rounded-xl ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-4">Technical Excellence</h3>
          <p className="text-lg">
            Strong foundation in Data Structures & Algorithms with 500+ problem
            solutions on LeetCode. Passionate about writing clean, efficient
            code and following best practices in software architecture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
