import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="min-h-screen flex items-center justify-center bg-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl py-6 md:py-10">Experience</h1>
        <div className="space-y-10 md:space-y-14">
          <div className="relative group border border-peach rounded-tl-3xl rounded-br-3xl p-4">
            <div className="flex flex-col md:flex-row md:justify-between items-center mb-2 space-y-2 md:space-y-0">
              <span className="text-sm md:text-base">Mar 2022 - Present</span>
              <span className="text-base md:text-lg">
                Tata Consultancy Services
              </span>
              <span className="text-sm md:text-base">
                MEAN Stack - Full Time
              </span>
            </div>

            <div className="hidden z-50 group-hover:block absolute top-0 right-0 bg-peach rounded-tl-3xl rounded-br-3xl shadow-md p-4 md:p-6 w-full sm:w-96">
              <div className="flex flex-col items-start">
                <h2 className="text-lg md:text-xl font-bold text-green">
                  Tata Consultancy Services
                </h2>
                <span className="text-green text-sm md:text-base py-1">
                  Mar 2022 – Present
                </span>
              </div>
              <p className="text-green mt-2 text-sm md:text-base font-semibold">
                MEAN Stack Developer - Full Time
              </p>
              <ul className="list-disc list-inside text-green mt-4 space-y-2 text-sm md:text-base">
                <li>Learn basic of HTML, CSS, JavaScript</li>
                <li>Explore JavaScript library i.e., ReactJS</li>
                <li>Learn basic of HTML, CSS, JavaScript</li>
                <li>Explore JavaScript library i.e., ReactJS</li>
              </ul>
            </div>
          </div>

          <div className="relative group border border-peach rounded-tl-3xl rounded-br-3xl p-4">
            <div className="flex flex-col md:flex-row md:justify-between items-center mb-2 space-y-2 md:space-y-0">
              <span className="text-sm md:text-base">Dec 2021 – Feb 2022</span>
              <span className="text-base md:text-lg">
                Tata Consultancy Services
              </span>
              <span className="text-sm md:text-base">
                MERN Stack - Full Time
              </span>
            </div>

            <div className="hidden z-50 group-hover:block absolute top-0 right-0 bg-peach rounded-tl-3xl rounded-br-3xl shadow-md p-4 md:p-6 w-full sm:w-96">
              <div className="flex flex-col items-start">
                <h2 className="text-lg md:text-xl font-bold text-green">
                  Tata Consultancy Services
                </h2>
                <span className="text-green text-sm md:text-base py-1">
                  Dec 2021 – Feb 2022
                </span>
              </div>
              <p className="text-green mt-2 text-sm md:text-base font-semibold">
                MERN Stack Developer - Full Time
              </p>
              <ul className="list-disc list-inside text-green mt-4 space-y-2 text-sm md:text-base">
                <li>Learn basic of HTML, CSS, JavaScript</li>
                <li>Explore JavaScript library i.e., ReactJS</li>
                <li>Learn basic of HTML, CSS, JavaScript</li>
                <li>Explore JavaScript library i.e., ReactJS</li>
              </ul>
            </div>
          </div>

          <div className="relative group border border-peach rounded-tl-3xl rounded-br-3xl p-4">
            <div className="flex flex-col md:flex-row md:justify-between items-center mb-2 space-y-2 md:space-y-0">
              <span className="text-sm md:text-base">Dec 2020 - Jun 2021</span>
              <span className="text-base md:text-lg">
                CodePlateau Technology Solutions
              </span>
              <span className="text-sm md:text-base">
                Web Developer - Intern
              </span>
            </div>

            <div className="hidden z-50 group-hover:block absolute bottom-0 right-0 bg-peach rounded-tl-3xl rounded-br-3xl shadow-md p-4 md:p-6 w-full sm:w-96">
              <div className="flex flex-col items-start">
                <h2 className="text-lg md:text-xl font-bold text-green">
                  CodePlateau Technology Solutions
                </h2>
                <span className="text-green text-sm md:text-base py-1">
                  Dec 2020 - Jun 2021
                </span>
              </div>
              <p className="text-green mt-2 text-sm md:text-base font-semibold">
                Web Developer - Intern
              </p>
              <ul className="list-disc list-inside text-green mt-4 space-y-2 text-sm md:text-base">
                <li>Write well designed, testable, efficient code. </li>
                <li>
                  Develop website Layout/user interface by using HTML/CSS.
                </li>
                <li>Working With API’s.</li>
              </ul>
            </div>
          </div>

          <div className="relative group border border-peach rounded-tl-3xl rounded-br-3xl p-4">
            <div className="flex flex-col md:flex-row md:justify-between items-center mb-2 space-y-2 md:space-y-0">
              <span className="text-sm md:text-base">Aug 2019 – May 2020</span>
              <span className="text-base md:text-lg">
                CodeElectra Technologies Pvt. Ltd.
              </span>
              <span className="text-sm md:text-base">
                Web Developer - Intern
              </span>
            </div>

            <div className="hidden z-50 group-hover:block absolute bottom-0 right-0 bg-peach rounded-tl-3xl rounded-br-3xl shadow-md p-4 md:p-6 w-full sm:w-96">
              <div className="flex flex-col items-start">
                <h2 className="text-lg md:text-xl font-bold text-green">
                  CodeElectra Technologies Pvt. Ltd.
                </h2>
                <span className="text-green text-sm md:text-base py-1">
                  Aug 2019 – May 2020
                </span>
              </div>
              <p className="text-green mt-2 text-sm md:text-base font-semibold">
                Web Developer - Intern
              </p>
              <ul className="list-disc list-inside text-green mt-4 space-y-2 text-sm md:text-base">
                <li>Learn basic of HTML, CSS, Javascript</li>
                <li>Explore javascript library i.e. ReactJs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
