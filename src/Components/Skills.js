import React from "react";
import HTML from "../assets/HTML5.png"
import CSS from "../assets/CSS3.png"
import JavaScript from "../assets/JavaScript.png"
import ReactJs from "../assets/React.png"
import Angular from "../assets/Angular.png"
import TypeScript from "../assets/Typescript.png"
import NodeJS from "../assets/NodeJs.png"
import Express from "../assets/Express.png"
import MySQL from "../assets/MySql.png"
import MongoDB from "../assets/MongoDB.png"

const Skills = () => {
  const items = [
    {
      name: "HTML 5",
      image:HTML,
      // link: "https://www.javascript.com/",
    },
    {
      name: "CSS 3",
      image: CSS,
      // link: "https://www.javascript.com/",
    },
    {
      name: "JavaScript",
      image: JavaScript,
      link: "https://www.javascript.com/",
    },
    {
      name: "React",
      image: ReactJs,
      link: "https://react.dev/",
    },
    {
      name: "Angular",
      image: Angular,
      link: "https://angular.dev/",
    },
    {
      name: "TypeScript",
      image: TypeScript,
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "NodeJS",
      image: NodeJS,
      link: "https://nodejs.org/en",
    },
    {
      name: "Express",
      image: Express,
      link: "https://expressjs.com/",
    },
    {
      name: "MySQL",
      image: MySQL,
      link: "https://www.mysql.com/",
    },
    {
      name: "MongoDB",
      image: MongoDB,
      link: "https://www.mongodb.com/",
    },
  ];

  return (
    <div className="flex items-center justify-center bg-green text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl py-6 md:py-5 font-bold">Skills</h1>
        <div className="overflow-hidden w-full px-6 group">
          <div className="px-8">
            <div className="flex space-x-6 animate-marquee-mobile lg:animate-marquee group-hover:animate-pause py-10 min-w-[380%]">
              {items.concat(items).map((item, index) => (
                <div
                  key={index}
                  className="card flex flex-col items-center justify-center min-w-48 min-h-48 border border-peach rounded-tl-3xl rounded-br-3xl shadow-lg transition-transform transform hover:scale-105"
                >
                  <img
                    alt={item.name}
                    src={item.image}
                    className="h-16 w-16 md:h-24 md:w-24 lg:h-24 lg:w-24 object-cover"
                  />
                  <h6 className="md:text-peach text-xl font-semibold mt-3 text-peach">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:animate-pulse"
                    >
                      {item.name}
                    </a>
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
