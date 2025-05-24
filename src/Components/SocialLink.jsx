import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileDownload,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useSelector } from "react-redux";

const SocialLink = () => {
  const isDarkMode = useSelector((state) => state.darkmode.isDarkMode);

  const links = [
    {
      id: 1,
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/kaustubhraut2001",
      color: "hover:text-purple-400",
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kaustubh-raut-a36960190/",
      color: "hover:text-blue-400",
    },
    {
      id: 3,
      icon: <FaTwitter />,
      label: "Twitter",
      href: "https://twitter.com/KAUSTUBHRA84940",
      color: "hover:text-sky-400",
    },
    {
      id: 4,
      icon: <HiMail />,
      label: "Email",
      href: "mailto:kaustubhraut135@gmail.com",
      color: "hover:text-red-400",
    },
    {
      id: 5,
      icon: <FaFileDownload />,
      label: "Resume",
      href: "https://drive.google.com/file/d/1G3KnDgw_EV1_WSraQ8D3RRqcTl0ifma8/view?usp=sharing",
      color: "hover:text-green-400",
      download: true,
    },
  ];

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={`hidden lg:flex flex-col fixed left-6 bottom-24 space-y-4
        ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
    >
      {links.map((link) => (
        <motion.a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          download={link.download}
          whileHover={{ x: 20 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`flex items-center gap-4 group ${link.color}
            transition-colors duration-300`}
        >
          <span
            className={`p-3 rounded-full backdrop-blur-lg shadow-lg
            ${
              isDarkMode
                ? "bg-gray-800/30 group-hover:bg-gray-800/70"
                : "bg-white/30 group-hover:bg-white/70"
            }
            transition-all duration-300`}
          >
            {React.cloneElement(link.icon, {
              className: "w-6 h-6",
              size: 24,
            })}
          </span>
          <span
            className={`opacity-0 group-hover:opacity-100 font-medium
            ${isDarkMode ? "text-gray-200" : "text-gray-700"}
            transition-opacity duration-300`}
          >
            {link.label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLink;
