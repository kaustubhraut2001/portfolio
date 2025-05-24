import React from "react";
import { FaAngleRight, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import HeroImage from "../../public/heroImage.png";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Home = () => {
  const isDarkMode = useSelector((state) => state.darkmode.isDarkMode);

  return (
    <section
      name="home"
      className={`w-full min-h-screen flex items-center ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <p
              className={`text-lg mb-4 ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              } font-mono`}
            >
              Hi, my name is
            </p>

            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 ${
                isDarkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Kaustubh Raut
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Crafting Robust Digital Experiences as a
              </span>{" "}
              <span className="text-blue-400">Full Stack Engineer</span>
            </h2>

            <p
              className={`text-lg md:text-xl mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } max-w-2xl mx-auto lg:mx-0`}
            >
              Full Stack Software Engineer adept at building comprehensive
              digital experiences. I specialize in crafting robust, scalable,
              and user-centric applications, leveraging expertise across both
              frontend and backend technologies. My focus is on developing
              performant, accessible, and visually stunning solutions with
              modern architectures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className={`group flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all ${
                  isDarkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                } shadow-lg hover:shadow-xl hover:-translate-y-1`}
              >
                View Projects
                <FaAngleRight className="group-hover:rotate-90 transition-transform" />
              </Link>

              <a
                href="https://drive.google.com/file/d/1G3KnDgw_EV1_WSraQ8D3RRqcTl0ifma8/view?usp=sharing"
                target="_blank"
                download
                className={`flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 ${
                  isDarkMode
                    ? "border-blue-600 text-blue-400 hover:bg-blue-900/20"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                } transition-all shadow-lg hover:shadow-xl hover:-translate-y-1`}
              >
                Download CV
                <FaDownload className="animate-bounce" />
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative group"
          >
            <div
              className={`relative w-3/4 mx-auto lg:w-full max-w-md ${
                isDarkMode
                  ? "bg-gradient-to-br from-blue-900/30 to-purple-900/30"
                  : "bg-gradient-to-br from-blue-100 to-purple-100"
              } rounded-2xl p-1.5 shadow-2xl`}
            >
              <div className="overflow-hidden rounded-2xl relative">
                <img
                  src={HeroImage}
                  alt="Kaustubh Raut - Frontend Developer"
                  className="w-full h-auto rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className={`absolute inset-0 ${
                    isDarkMode
                      ? "bg-gradient-to-b from-transparent to-black/40"
                      : "bg-gradient-to-b from-transparent to-white/40"
                  }`}
                />
              </div>
            </div>

            <div
              className={`absolute -inset-4 rounded-3xl ${
                isDarkMode
                  ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                  : "bg-gradient-to-br from-blue-200/50 to-purple-200/50"
              } blur-xl group-hover:blur-2xl transition-all duration-300 -z-10`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
