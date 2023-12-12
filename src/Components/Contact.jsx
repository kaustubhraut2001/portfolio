import React from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {
  const isDarkMode = useSelector((state) => state.darkmode.isDarkMode);

  // Conditional classes based on isDarkMode state
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
  const gradientFrom = isDarkMode ? 'from-black' : 'from-white';
  const gradientTo = isDarkMode ? 'to-gray-800' : 'to-gray-200';

  return (
    <div
      name="contact"
      className={`w-full min-h-screen bg-gradient-to-b ${gradientFrom} ${gradientTo} ${textColor} flex flex-wrap`}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/a2956497-127c-4e93-ad8f-f99c6f8144ff"
            method="POST"
            className="flex flex-col w-full md:w-3/4 lg:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-110 duration-300">
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;