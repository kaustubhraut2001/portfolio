import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://github.com",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          <FaTwitter size={30} />
        </>
      ),
      href: "https://github.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "https://github.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          Resume<BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://github.com",
      style: "rounded-tr-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-6 fixed justify-between">
      <ul>
    {
      links.map(({id,child,style,href,download})=>(
        <li
        key={id}
         className={"flex justify-between items-centerw-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
        <a
          href={href}
          className="flex justify-between items-center w-full text-white"
          download={download}
          target="_blank"
          rel="noreferrer"

        >
          <>
            Linkedin <FaLinkedin size={30} />
          </>
        </a>
      </li>
      ))
    }


      </ul>
    </div>
  );
};

export default SocialLink;
