import React from "react";
import { useSelector } from "react-redux";
import {
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  const isDarkMode = useSelector((state) => state.darkmode.isDarkMode);

  const contactMethods = [
    {
      icon: <MdEmail className="w-6 h-6" />,
      title: "Email",
      value: "kaustubhraut135@gmail.com",
      link: "mailto:kaustubhraut135@gmail.com",
    },
    {
      icon: <MdPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9011686021",
      link: "tel:+919011686021",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      value: "Nagpur, India",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Kaustubh Raut",
      link: "https://www.linkedin.com/in/kaustubh-raut-a36960190/",
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: "GitHub",
      value: "kaustubhraut2001",
      link: "https://github.com/kaustubhraut2001/",
    },
  ];

  return (
    <section
      name="contact"
      className={`w-full min-h-screen py-20 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Get In Touch
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
          </h2>
          <p className="text-xl mt-4">
            Let's build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link || "#"}
                target={method.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`flex items-start p-6 rounded-xl transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50"
                } shadow-lg hover:shadow-xl`}
              >
                <div className="p-3 mr-4 rounded-full bg-blue-100 text-blue-600">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{method.title}</h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className={`p-8 rounded-xl shadow-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <form
              action="https://getform.io/f/a2956497-127c-4e93-ad8f-f99c6f8144ff"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-lg font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className={`w-full p-4 rounded-lg border-2 ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 focus:border-blue-400"
                      : "bg-gray-50 border-gray-300 focus:border-blue-400"
                  } transition-colors duration-300 outline-none`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className={`w-full p-4 rounded-lg border-2 ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 focus:border-blue-400"
                      : "bg-gray-50 border-gray-300 focus:border-blue-400"
                  } transition-colors duration-300 outline-none`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className={`w-full p-4 rounded-lg border-2 ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 focus:border-blue-400"
                      : "bg-gray-50 border-gray-300 focus:border-blue-400"
                  } transition-colors duration-300 outline-none`}
                  placeholder="Hello, I would like to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold py-4 px-8 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
              >
                Send Message
                <FaPaperPlane className="ml-2 animate-bounce" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
