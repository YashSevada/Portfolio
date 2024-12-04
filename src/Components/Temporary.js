import React, { useState, useEffect, useRef } from "react";

const Temporary = () => {
  const items = [
    {
      name: "HTML 5",
      image: "https://cdn.sanity.io/images/y178r8ab/production/674d368475311b60be6403d4ac1a2b36e42ff8bb-1052x1052.png",
      link: "https://www.javascript.com/",
    },
    {
      name: "CSS 3",
      image: "https://cdn.sanity.io/images/y178r8ab/production/674d368475311b60be6403d4ac1a2b36e42ff8bb-1052x1052.png",
      link: "https://www.javascript.com/",
    },
    {
      name: "JavaScript",
      image: "https://cdn.sanity.io/images/y178r8ab/production/674d368475311b60be6403d4ac1a2b36e42ff8bb-1052x1052.png",
      link: "https://www.javascript.com/",
    },
    {
      name: "React",
      image: "https://cdn.sanity.io/images/y178r8ab/production/dcb13a4d2e15006c4f6b712fa64142ea0f896ee2-500x500.webp",
      link: "https://react.dev/",
    },
    {
      name: "Angular",
      image: "https://cdn.sanity.io/images/y178r8ab/production/88cd77d2989c9fcff91d2c82cd434d16a9a70377-512x512.png",
      link: "https://angular.dev/",
    },
    {
      name: "TypeScript",
      image: "https://cdn.sanity.io/images/y178r8ab/production/2e0996423c88955d003db9368f214b4bc86ca691-400x400.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "NodeJS",
      image: "https://cdn.sanity.io/images/y178r8ab/production/2e0996423c88955d003db9368f214b4bc86ca691-400x400.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Express",
      image: "https://cdn.sanity.io/images/y178r8ab/production/2e0996423c88955d003db9368f214b4bc86ca691-400x400.svg",
      link: "https://expressjs.com/",
    },
    {
      name: "MySQL",
      image: "https://cdn.sanity.io/images/y178r8ab/production/2e0996423c88955d003db9368f214b4bc86ca691-400x400.svg",
      link: "https://www.mysql.com/",
    },
    {
      name: "MongoDB",
      image: "https://cdn.sanity.io/images/y178r8ab/production/2e0996423c88955d003db9368f214b4bc86ca691-400x400.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "AWS",
      image: "https://cdn.sanity.io/images/y178r8ab/production/2e0996423c88955d003db9368f214b4bc86ca691-400x400.svg",
      link: "https://aws.amazon.com/",
    },
    {
      name: "Git",
      image: "https://cdn.sanity.io/images/y178r8ab/production/2e0996423c88955d003db9368f214b4bc86ca691-400x400.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Tailwind CSS",
      image: "https://cdn.sanity.io/images/y178r8ab/production/40e44bdd9f66de17cfd9dfc24acdacd818f703f2-287x175.png",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Material UI",
      image: "https://cdn.sanity.io/images/y178r8ab/production/5b6e5467f6d7136061937b59d6ec3639f775e61b-820x820.png",
      link: "https://mui.com/",
    },
    {
      name: "Bootstrap",
      image: "https://cdn.sanity.io/images/y178r8ab/production/6aa082f5151d13b65233a269b0f7175e36ce288f-280x280.png",
      link: "https://getbootstrap.com/",
    },
  ];

  return (
    <div className="mt-5 bg-green overflow-hidden py-5">
      <div className="flex animate-marquee space-x-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center w-40 h-40 border border-peach rounded-xl shadow-2xl transform transition-all hover:scale-105"
          >
            <img
              alt={item.name}
              src={item.image}
              className="h-16 w-16 rounded-full object-cover border border-peach"
            />
            <h6 className="text-lg font-bold text-peach mt-2">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {item.name}
              </a>
            </h6>
            <div className="absolute inset-0 pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-gray-700 to-transparent"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Temporary;
