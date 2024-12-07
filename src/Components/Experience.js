import React, { useState } from "react";
import ArrowRight from "../assets/arrow-right.png";
import ArrowUp from "../assets/arrow-up.png";
import ArrowDown from "../assets/arrow-down.png";

const Experience = () => {

  return (
    <div id="experience" className="min-h-screen flex items-center justify-center bg-green text-white px-4 sm:px-6 lg:px-8 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl py-6 md:py-10 text-center">Experience</h1>
        <div className="space-y-10 md:space-y-14">
          {/* Experience 1 */}
          <div
            className="border border-peach rounded-tl-3xl rounded-br-3xl p-4 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:justify-between px-4 items-center justify-center mb-2 space-y-2 md:space-y-0">
              <span className="text-base md:text-lg text-peach">Tata Consultancy Services</span>
              <span className="text-sm md:text-base text-peach">Assistant System Engineer</span>
              <span className="text-sm md:text-base text-peach">Mar 2022 - Present</span>
            </div>
          </div>

          {/* Experience 2 */}
          <div
            className="border border-peach rounded-tl-3xl rounded-br-3xl p-4 cursor-pointer">
            <div className="flex flex-col md:flex-row md:justify-between px-4 items-center justify-center mb-2 space-y-2 md:space-y-0">
              <span className="text-base md:text-lg text-peach">Tata Consultancy Services</span>
              <span className="text-sm md:text-base text-peach">Assistant System Engineer - Trainee</span>
              <span className="text-sm md:text-base text-peach">Dec 2021 – Mar 2022</span>
            </div>
          </div>

          {/* Experience 3 */}
          <div
            className="border border-peach rounded-tl-3xl rounded-br-3xl p-4 cursor-pointer"            
          >
            <div className="flex flex-col md:flex-row md:justify-between px-4 items-center justify-center mb-2 space-y-2 md:space-y-0">
              <span className="text-base md:text-lg text-peach">CodePlateau Technology Solutions</span>
              <span className="text-sm md:text-base text-peach">Web Developer - Intern</span>
              <span className="text-sm md:text-base text-peach">Dec 2020 – Jun 2021</span>
            </div>
          </div>

          {/* Experience 4 */}
          <div
            className="border border-peach rounded-tl-3xl rounded-br-3xl p-4 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:justify-between px-4 items-center justify-center mb-2 space-y-2 md:space-y-0">
              <span className="text-base md:text-lg text-peach">CodeElectra Technologies Pvt. Ltd.</span>
              <span className="text-sm md:text-base text-peach">Web Developer - Intern</span>
              <span className="text-sm md:text-base text-peach">Aug 2019 – May 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
