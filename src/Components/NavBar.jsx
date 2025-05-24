import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../Redux/darkmodeslice";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const NavBar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkmode.isDarkMode);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, label: "Home", target: "home" },
    { id: 2, label: "About", target: "about" },
    { id: 3, label: "Work", target: "portfolio" },
    { id: 4, label: "Skills", target: "experience" },
    { id: 5, label: "Contact", target: "contact" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 backdrop-blur-lg ${
        isDarkMode
          ? "bg-gray-900/80 border-gray-800"
          : "bg-white/80 border-gray-200"
      } border-b`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              KR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((item) => (
              <Link
                key={item.id}
                to={item.target}
                offset={-64}
                smooth={true}
                className={`group flex items-center text-sm font-medium transition-all cursor-pointer ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
                <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className={`p-2 rounded-full transition-all ${
                isDarkMode
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {isDarkMode ? (
                <FaMoon className="w-5 h-5" />
              ) : (
                <FaSun className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden absolute w-full ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            } shadow-lg`}
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {links.map((item) => (
                <Link
                  key={item.id}
                  to={item.target}
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                    isDarkMode
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <button
                  onClick={() => dispatch(toggleDarkMode())}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium ${
                    isDarkMode
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span>Toggle Theme</span>
                  {isDarkMode ? (
                    <FaMoon className="w-5 h-5" />
                  ) : (
                    <FaSun className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
