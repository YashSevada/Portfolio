import React from "react";
import File from "../assets/Yash_Sevada_CV.pdf";
import YashImage from "../assets/Yash.jpg";

const About = () => {
  const downloadCV = () => {
    const fileUrl = File;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "file.pdf";
    link.click();
  };

  return (
    <div
    id="about"
    className="bg-green lg:min-h-screen flex items-center justify-center text-white py-8"
  >
    {/* Card Container */}
    <div className="flex flex-col lg:flex-row lg:border lg:border-peach p-4 lg:p-6 rounded-lg max-w-4xl w-full max-h-[80vh] bg-green transition-transform transform lg:scale-105 lg:shadow-2xl">
      {/* Left Section (Centered) */}
      <div className="flex flex-col items-center text-center justify-center border-b lg:border-b-0 lg:border-r border-peach px-6 py-8 lg:py-0 lg:w-1/3 space-y-4">
        {/* Profile Image */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 bg-gray-400 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={YashImage}
            alt="Yash Image"
          />
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold mt-4 text-peach">
          Yash Sevada
        </h1>
        <hr className="border border-peach w-24 sm:w-36 my-2" />
        <p className="text-md sm:text-lg text-peach">Web Developer</p>
      </div>
  
      {/* Right Section */}
      <div className="flex flex-col items-center lg:items-start py-4 px-6 lg:px-12 lg:w-2/3">
        <h2 className="text-3xl sm:text-4xl font-bold">Hello</h2>
        <p className="text-md sm:text-lg mt-2">Here's who I am & what I do</p>
  
        {/* Buttons */}
        <div className="flex py-3 space-x-4">
          <button
            onClick={downloadCV}
            className="bg-peach text-green px-3 py-2 sm:px-4 sm:py-2 rounded rounded-tl-2xl rounded-br-2xl shadow"
          >
            Download CV
          </button>
          <a href="#contact">
            <button className="border border-peach text-peach px-3 py-2 sm:px-4 sm:py-2 rounded rounded-tl-2xl rounded-br-2xl hover:bg-peach hover:text-green">
              Contact Me
            </button>
          </a>
        </div>
  
        {/* Description */}
        <p className="text-white text-sm sm:text-base mt-2 text-justify">
          I am a passionate Full Stack Developer with over 4 years of experience
          building dynamic, user-friendly web applications using modern
          technologies like JavaScript, React, Angular, Node.js, and Amazon
          DocumentDB (with MongoDB compatibility). I have contributed to impactful
          projects, including migrating legacy systems for energy companies and
          developing GIS-based tools.
        </p>
        <p className="text-white text-sm sm:text-base mt-6 text-justify">
          Beyond professional work, I innovate through personal projects like
          Classtro WebApp, which enhances online learning experiences. My focus is
          on delivering efficient, scalable, and meaningful solutions. I believe
          in continuous learning, collaboration, and creating solutions that make
          technology accessible to everyone.
        </p>
      </div>
    </div>
  </div>
  
  );
};

export default About;
