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
          GitHub<FaGithub size={30} />
        </>
      ),
      href: "https://github.com/kaustubhraut2001",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/kaustubh-raut-a36960190/",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          Twitter<FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/KAUSTUBHRA84940",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          Mail<HiOutlineMail size={30} />
        </>
      ),
      href: "kaustubhraut135@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          Resume<BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1Z6dY6jIn9WBDbIyYE4TelXNLj3lQVZ8H/view?usp=drive_link",
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
         className={"flex justify-between items-centre h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
        <a
          href={href}
          className="flex justify-between items-center w-full text-white"
          download={download}
          target="_blank"
          rel="noreferrer"

        >

             {child}

        </a>
      </li>
      ))
    }


      </ul>
    </div>
  );
};

export default SocialLink;
