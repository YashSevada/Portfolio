import React, { useState, useEffect, useRef } from "react";

const Project = () => {
  const [activeTab, setActiveTab] = useState(1);
  const contentRefs = useRef([]);

  const handleScroll = () => {
    const container = document.getElementById("content-container");
    contentRefs.current.forEach((ref, index) => {
      if (
        ref &&
        container.scrollTop >= ref.offsetTop - container.offsetTop &&
        container.scrollTop < ref.offsetTop + ref.offsetHeight
      ) {
        setActiveTab(index + 1);
      }
    });
  };

  const scrollToContent = (tabIndex) => {
    const contentSection = contentRefs.current[tabIndex - 1];
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
    setActiveTab(tabIndex);
  };
  
  useEffect(() => {
    const container = document.getElementById("content-container");
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl py-6 md:py-10">Projects</h1>

        <div className="space-y-10 md:space-y-14 h-screen grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left-side Tabs */}
          <div className="space-y-8 w-full max-h-screen overflow-y-auto">
            <div
              className={`w-full flex items-start space-x-4 cursor-pointer ${
                activeTab === 1 ? "" : ""
              }`}
              onClick={() => scrollToContent(1)}
            >
              <div className="flex items-center justify-center w-4 h-4 p-2 mt-1.5 bg-peach rounded-full">
                <div
                  className={`${
                    activeTab === 1 ? "w-1 h-1 p-1 bg-green rounded-full" : ""
                  }`}
                ></div>
              </div>
              <div className="w-4/5">
                <h2 className="text-lg font-bold">Project Name 1</h2>
                <p className="text-white mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p
                    className={`mt-2 font-semibold ${
                      activeTab === 1 ? "border-b-4 border-peach pb-3" : ""
                    }`}
                  >
                    <span className="text-peach">Languages : </span>
                    <span className="text-peach">
                      HTML, CSS, JavaScript, Angular, Node, MongoDB
                    </span>
                  </p>

              </div>
            </div>
            <div
              className={`w-full flex items-start space-x-4 cursor-pointer ${
                activeTab === 2 ? "" : ""
              }`}
              onClick={() => scrollToContent(2)}
            >
              <div className="flex items-center justify-center w-4 h-4 p-2 mt-1.5 bg-peach rounded-full">
                <div
                  className={`${
                    activeTab === 2 ? "w-1 h-1 p-1 bg-green rounded-full" : ""
                  }`}
                ></div>
              </div>
              <div className="w-4/5">
                <h2 className="text-lg font-bold">Project Name 2</h2>
                <p className="text-white mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p
                    className={`mt-2 font-semibold ${
                      activeTab === 2 ? "border-b-4 border-peach pb-3" : ""
                    }`}
                  >
                    <span className="text-peach">Languages : </span>
                    <span className="text-peach">
                      HTML, CSS, JavaScript, Angular, Node, MongoDB
                    </span>
                  </p>

              </div>
            </div>
            <div
              className={`w-full flex items-start space-x-4 cursor-pointer ${
                activeTab === 3 ? "" : ""
              }`}
              onClick={() => scrollToContent(3)}
            >
              <div className="flex items-center justify-center w-4 h-4 p-2 mt-1.5 bg-peach rounded-full">
                <div
                  className={`${
                    activeTab === 3 ? "w-1 h-1 p-1 bg-green rounded-full" : ""
                  }`}
                ></div>
              </div>
              <div className="w-4/5">
                <h2 className="text-lg font-bold">Project Name 3</h2>
                <p className="text-white mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p
                    className={`mt-2 font-semibold ${
                      activeTab === 3 ? "border-b-4 border-peach pb-3" : ""
                    }`}
                  >
                    <span className="text-peach">Languages : </span>
                    <span className="text-peach">
                      HTML, CSS, JavaScript, Angular, Node, MongoDB
                    </span>
                  </p>

              </div>
            </div>
            <div
              className={`w-full flex items-start space-x-4 cursor-pointer ${
                activeTab === 4 ? "" : ""
              }`}
              onClick={() => scrollToContent(4)}
            >
              <div className="flex items-center justify-center w-4 h-4 p-2 mt-1.5 bg-peach rounded-full">
                <div
                  className={`${
                    activeTab === 4 ? "w-1 h-1 p-1 bg-green rounded-full" : ""
                  }`}
                ></div>
              </div>
              <div className="w-4/5">
                <h2 className="text-lg font-bold">Project Name 4</h2>
                <p className="text-white mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p
                    className={`mt-2 font-semibold ${
                      activeTab === 4 ? "border-b-4 border-peach pb-3" : ""
                    }`}
                  >
                    <span className="text-peach">Languages : </span>
                    <span className="text-peach">
                      HTML, CSS, JavaScript, Angular, Node, MongoDB
                    </span>
                  </p>

              </div>
            </div>
          </div>

          {/* Right-side Content */}
          <div
            id="content-container"
            className="space-y-8 mt-0 max-h-screen overflow-y-auto scrollbar-hidden"
          >
            <div
              ref={(el) => (
                contentRefs.current[0] = el,
                activeTab === 1
              )}
              className="max-h-screen"
            >
              <h2 className="text-xl font-bold mb-4">Content for Tab 1</h2>
              <p>This is the content for Tab 1.</p>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
            </div>
            <div
              ref={(el) => (
                contentRefs.current[1] = el,
                activeTab === 2
              )}
              className="max-h-screen"
            >
              <h2 className="text-xl font-bold mb-4">Content for Tab 2</h2>
              <p>This is the content for Tab 2.</p>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
            </div>
            <div
              ref={(el) => (
                contentRefs.current[2] = el,
                activeTab === 3
              )}
              className="max-h-screen"
            >
              <h2 className="text-xl font-bold mb-4">Content for Tab 3</h2>
              <p>This is the content for Tab 3.</p>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
            </div>
            <div
              ref={(el) => (
                contentRefs.current[3] = el,
                activeTab === 4
              )}
              className="max-h-screen"
            >
              <h2 className="text-xl font-bold mb-4">Content for Tab 4</h2>
              <p>This is the content for Tab 4.</p>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-gray-600 h-64 my-4 rounded-lg shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
