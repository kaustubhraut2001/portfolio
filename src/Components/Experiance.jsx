import React from 'react'
import cssimg from "../../public/css.png";
import htmlimg from "../../public/html.png";
import javascriptimg from "../../public/javascript.png";
import reactimg from "../../public/react.png";
import github from "../../public/github.png";
import tailwindimg from "../../public/tailwind.png";
import nodeimg from "../../public/node.png";
import awsicon from "../../public/AWSIcons.png";
import mongodbicon from "../../public/MongoDbicon.png";


const Experiance = () => {
	const techs = [
		{
		  id: 1,
		   src: htmlimg,
		  title: "HTML",
		  style: "shadow-orange-500",
		},
		{
		  id: 2,
		  src: cssimg,
		  title: "CSS",
		  style: "shadow-blue-500",
		},
		{
		  id: 3,
		  src: javascriptimg	,
		  title: "JavaScript",
		  style: "shadow-yellow-500",
		},
		{
		  id: 4,
		  src: reactimg,
		  title: "React",
		  style: "shadow-blue-600",
		},
		{
		  id: 5,
		  src: nodeimg,
		  title: "Node JS",
		  style: "shadow-white",
		},
		{
		  id: 6,
		  src: tailwindimg,
		  title: "Tailwind",
		  style: "shadow-sky-400",
		},
		{
		  id: 7,
		  src: mongodbicon,
		  title: "MongoDb",
		  style: "shadow-green-400",
		},
		{
		  id: 8,
		  src: github,
		  title: "GitHub",
		  style: "shadow-gray-400",
		},
		{
			id:9,
			src:awsicon,
			title:"AWS",
			style:"shadow-yellow-400"
		}
	  ];
  return (
	<div
	name="experiance"
	className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
  >
	<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
	  <div>
		<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
		  Experience
		</p>
		<p className="py-6">These are the technologies I've worked with</p>
	  </div>

	  <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
		{techs.map(({ id, src, title, style }) => (
		  <div
			key={id}
			className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
		  >
			<img src={src} alt="" className="w-20 mx-auto" />
			<p className="mt-4">{title}</p>
		  </div>
		))}
	  </div>
	</div>
  </div>
  )
}

export default Experiance