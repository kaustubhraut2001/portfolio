import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const isDarkMode = useSelector((state) => state.darkmode.isDarkMode);

  const projects = [
    {
      id: 1,
      title: "Shop Now",
      image: "ShopNow.png",
      description:
        "Full-stack e-commerce platform with real-time inventory management",
      tech: ["React", "Node.js", "MongoDB"],
      code: "https://github.com/kaustubhraut2001/ShopNow",
      demo: "https://shopnowdeploy.onrender.com/",
    },
    {
      id: 2,
      title: "Drawing Tool",
      image: "drawinf-tool.png",
      description: "Collaborative drawing application with real-time updates",
      tech: ["Next.js", "Socket.io", "Redux"],
      code: "https://github.com/kaustubhraut2001/PaintAPP",
      demo: "https://paint-app-ruddy.vercel.app/",
    },
    {
      id: 3,
      title: "Portfolio",
      image: "portfolio.png",
      description:
        "Modern developer portfolio with dark mode and responsive design",
      tech: ["React", "Tailwind", "Framer Motion"],
      code: "https://github.com/kaustubhraut2001/portfolio",
      demo: "https://kaustubh-raut-portfolio.netlify.app/",
    },
  ];

  return (
    <section
      name="portfolio"
      className={`w-full min-h-screen py-20 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Featured Work
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
          </h2>
          <p className="text-xl mt-4">
            Selection of projects showcasing my technical capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl shadow-xl ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              } transition-all duration-300`}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    isDarkMode
                      ? "from-gray-900/90 to-gray-800/20"
                      : "from-gray-900/70 to-gray-100/20"
                  }`}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex space-x-3">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${
                        isDarkMode
                          ? "text-gray-300 hover:text-white hover:bg-gray-600"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                      } transition-colors`}
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${
                        isDarkMode
                          ? "text-gray-300 hover:text-white hover:bg-gray-600"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                      } transition-colors`}
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } mb-4`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full ${
                        isDarkMode
                          ? "bg-gray-700 text-blue-300"
                          : "bg-gray-200 text-blue-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
