import React from "react";
import { useSelector } from "react-redux";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiFastapi,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiServerless,
  SiGithubactions,
  SiKubernetes,
  SiTypescript,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaSyncAlt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

const Experience = () => {
  const isDarkMode = useSelector((state) => state.darkmode.isDarkMode);

  const techCategories = [
    {
      title: "Frontend Mastery",
      skills: [
        { icon: <SiHtml5 />, name: "HTML5", level: "Advanced" },
        { icon: <SiCss3 />, name: "CSS3", level: "Advanced" },
        { icon: <SiJavascript />, name: "JavaScript", level: "Advanced" },
        { icon: <FaReact />, name: "React", level: "Advanced" },
        { icon: <SiTailwindcss />, name: "Tailwind", level: "Advanced" },
        { icon: <SiNextdotjs />, name: "Nextjs", level: "Intermediate" },
        { icon: <SiTypescript />, name: "TypeScript", level: "Intermediate" },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js", level: "Advanced" },
        { icon: <SiFastapi />, name: "FastAPI", level: "Intermediate" }, // Corrected icon
        { icon: <SiExpress />, name: "Express.js", level: "Advanced" }, // Corrected icon
        { icon: <SiDjango />, name: "Django", level: "Intermediate" }, // Corrected icon
        { icon: <SiMongodb />, name: "MongoDB", level: "Intermediate" },
        { icon: <SiMysql />, name: "MySQL", level: "Intermediate" }, // Corrected icon
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { icon: <FaAws />, name: "AWS", level: "Intermediate" },
        { icon: <FaDocker />, name: "Docker", level: "Intermediate" }, // Corrected icon
        { icon: <FaSyncAlt />, name: "CI/CD", level: "Intermediate" }, // Suggestion for CI/CD flow
        { icon: <SiServerless />, name: "Serverless", level: "Intermediate" }, // Corrected icon
        { icon: <SiGithubactions />, name: "github action", level: "Beginner" }, // Corrected icon
        { icon: <SiKubernetes />, name: "Kubernetes", level: "Beginner" }, // Corrected icon
      ],
    },
    {
      title: "Version Control & Collaboration",
      skills: [
        { icon: <FaGitAlt />, name: "Git", level: "Advanced" }, // Corrected icon
        { icon: <FaGithub />, name: "GitHub", level: "Advanced" }, // Corrected icon
      ],
    },
  ];

  return (
    <section
      name="experience"
      className={`w-full min-h-screen py-20 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Technical Expertise
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
          </h2>
          <p className="text-xl mt-4">
            Leveraging 2+ years of full-stack development experience, I build
            robust digital solutions with proficiency in JavaScript, Python,
            React.js, Node.js, AWS Services, and MongoDB.
          </p>
        </div>

        <div className="space-y-16">
          {techCategories.map((category, index) => (
            <div key={index} className="space-y-8">
              <h3 className="text-3xl font-bold text-center mb-8">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`p-6 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-white hover:bg-gray-50"
                    } shadow-lg hover:shadow-xl group`}
                  >
                    <div
                      className={`text-5xl mb-4 ${
                        isDarkMode
                          ? "text-blue-400 group-hover:text-blue-300"
                          : "text-blue-600 group-hover:text-blue-500"
                      } transition-colors duration-300`}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-blue-300" : "text-blue-500"
                      } font-medium`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 p-8 rounded-xl ${
            isDarkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
          <p className="text-lg">
            Currently exploring advanced AWS services to build scalable,
            type-safe applications and kurbernetes. Committed to staying updated
            with emerging technologies through daily coding practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
