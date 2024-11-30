import React from 'react'

const About = () => {
  return  (
    <div className="bg-green min-h-screen flex items-center justify-center text-white">
      {/* Card Container */}
      <div className="flex flex-col lg:flex-row lg:border lg:border-peach p-4 lg:p-2 lg:mt-14 rounded-lg max-w-4xl w-full bg-green transition-transform transform scale-105 shadow-xl">
        {/* Left Section (Centered) */}
        <div className="flex flex-col items-center justify-center lg:items-center border-b lg:border-b-0 lg:border-r border-peach px-6 py-8 lg:py-0 lg:w-1/2 space-y-4">
          {/* Profile Image */}
          <div className="w-32 h-32 bg-gray-400 rounded-full"></div>
          <h1 className="text-4xl font-bold mt-4 text-peach">Yash Sevada</h1>
          <hr className="border border-peach w-36 my-2" />
          <p className="text-lg text-peach">Web Developer</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center lg:items-start py-6 px-6 lg:px-12 lg:w-1/2">
          <h2 className="text-4xl font-bold">Hello</h2>
          <p className="text-lg mt-2">Here's who I am & what I do</p>

          {/* Buttons */}
          <div className="flex mt-6 space-x-4">
            <button className="bg-peach text-green px-4 py-2 rounded rounded-tl-2xl rounded-br-2xl shadow hover:bg-transparent hover:border hover:border-peach hover:text-peach">
              Download CV
            </button>
            <button className="border border-peach text-peach px-4 py-2 rounded rounded-tl-2xl rounded-br-2xl hover:bg-peach hover:text-green">
              Contact Me
            </button>
          </div>

          {/* Description */}
          <p className="text-white text-sm mt-6 leading-relaxed">
            Experienced full stack developer with a strong foundation in web
            technologies. Proficient in HTML, CSS, React, Node.js, Angular, and
            MongoDB, enabling the creation of dynamic, responsive, and
            data-driven web applications. Skilled in front-end and back-end
            development, with a focus on delivering high-quality user-friendly
            solutions.
          </p>
          <p className="text-white text-sm mt-4 leading-relaxed">
            Proven ability to collaborate with cross-functional teams and meet
            project objectives efficiently. Dedicated to staying up-to-date
            with the latest industry trends and best practices in web
            development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
