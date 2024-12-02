import React from "react";

const Project = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl py-6 md:py-10">Experience</h1>
        <div className="space-y-10 md:space-y-14">
          <div id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project List */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-4 h-4 p-2 mt-1.5 bg-peach rounded-full">
                  <div className="w-1 h-1 p-1 bg-green rounded-full"></div>
                </div>
                <div>
                  <h2 className="text-lg font-bold">Project Name</h2>
                  <p className="text-white mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="mt-2 font-semibold">
                    <span className="text-peach">Languages : </span>
                    <span className="text-peach">
                      HTML, CSS, JavaScript, Angular, Node, MongoDB
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Content Placeholder */}
            <div className="space-y-8">
              <div className="bg-gray-600 h-64 rounded-lg shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
