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
      className="bg-green min-h-screen flex items-center justify-center text-white"
    >
      {/* Card Container */}
      <div className="flex flex-col lg:flex-row lg:border lg:border-peach p-4 lg:p-2 lg:mt-14 rounded-lg max-w-4xl w-full bg-green transition-transform transform lg:scale-105 lg:shadow-2xl">
        {/* Left Section (Centered) */}
        <div className="flex flex-col items-center justify-center lg:items-center border-b lg:border-b-0 lg:border-r border-peach px-6 py-8 lg:py-0 lg:w-2/5 space-y-4">
          {/* Profile Image */}
          <div className="w-44 h-44 bg-gray-400 rounded-full">
            <img
              className="w-44 h-44 rounded-full"
              src={YashImage}
              alt="Yash Image"
            />
          </div>
          <h1 className="text-4xl font-bold mt-4 text-peach">Yash Sevada</h1>
          <hr className="border border-peach w-36 my-2" />
          <p className="text-lg text-peach">Web Developer</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center lg:items-start py-6 px-6 lg:px-12 lg:w-3/5">
          <h2 className="text-4xl font-bold">Hello</h2>
          <p className="text-lg mt-2">Here's who I am & what I do</p>

          {/* Buttons */}
          <div className="flex mt-6 space-x-4">
            <button
              onClick={downloadCV}
              className="bg-peach text-green px-4 py-2 rounded rounded-tl-2xl rounded-br-2xl shadow hover:bg-transparent hover:border hover:border-peach hover:text-peach"
            >
              Download CV
            </button>
            <a href="#contact"><button className="border border-peach text-peach px-4 py-2 rounded rounded-tl-2xl rounded-br-2xl hover:bg-peach hover:text-green">
              Contact Me
            </button></a>
          </div>

          {/* Description */}
          <p className="text-white text-sm mt-6 text-justify">
            I am a passionate Full Stack Developer with over 4 years of
            experience building dynamic, user-friendly web applications using
            modern technologies like JavaScript, React, Angular, Node.js, and
            and Amazon DocumentDB (with MongoDB compatibility). I have
            contributed to impactful projects, including migrating legacy
            systems for energy companies and developing GIS-based tools.
          </p>
          <p className="text-white text-sm mt-6 text-justify">
            Beyond professional work, I innovate through personal projects like
            Classtro WebApp, which enhances online learning experiences. My
            focus is on delivering efficient, scalable, and meaningful
            solutions. I believe in continuous learning, collaboration, and
            creating solutions that make technology accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
