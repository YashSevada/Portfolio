import React, { useState, useEffect, useRef } from "react";
import EasyCrewLogin from "../assets/EasyCrew_Login.png";
import EasyCrewDashboard from "../assets/EasyCrew_Dashboard.png";
import EasyCrewAddJobs from "../assets/EasyCrew_Add_Jobs.png";
import EasyCrewAccount from "../assets/EasyCrew_Account.png";

const Project = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const contentRefs = useRef([]);
  const tabContainerRef = useRef(null);

  const handleScroll = () => {
    const container = document.getElementById("content-container");
    contentRefs.current.forEach((ref, index) => {
      if (
        ref &&
        container.scrollTop >= ref.offsetTop - container.offsetTop &&
        container.scrollTop < ref.offsetTop + ref.offsetHeight
      ) {
        setActiveTab(index + 1);
        scrollToActiveTab(index + 1);
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

  const scrollToActiveTab = (tabIndex) => {
    const tabContainer = tabContainerRef.current;
    const activeTabElement = tabContainer?.children[tabIndex - 1];

    if (activeTabElement) {
      activeTabElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  useEffect(() => {
    const container = document.getElementById("content-container");
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openFullScreen = (imageSrc) => {
    setFullScreenImage(imageSrc);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div
      id="projects"
      className="min-h-screen flex items-center justify-center bg-green text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl py-6 md:py-10">Projects</h1>

        <div className="h-screen flex gap-5">
          {/* Left-side Tabs */}
          <div
            ref={tabContainerRef}
            className="space-y-8 w-2/5 max-h-screen overflow-y-auto scrollbar-hidden"
          >
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
                <h2 className="text-xl font-bold">Portfolio</h2>
                <p className="text-gray text-md mt-2 text-justify">
                  Built a modern personal portfolio website utilizing React and
                  Tailwind CSS to exhibit skills, projects, and professional
                  highlights. The design was independently conceptualized and
                  prototyped in Figma, reflecting creativity, attention to
                  detail, and a personalized approach to user experience while
                  effectively highlighting professional work and achievements.
                </p>
                <p
                  className={`mt-2 font-semibold ${
                    activeTab === 1 ? "border-b-4 border-peach pb-3" : ""
                  }`}
                >
                  <span className="text-peach text-lg text-justify">
                    Languages : React, Tailwind-CSS, NodeJs
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
                <h2 className="text-xl font-bold">EasyCrew</h2>
                <p className="text-gray mt-2 text-justify">
                  A comprehensive job portal built using Angular, Node.js and
                  MongoDB to bridge the gap between local workers and employers.
                  The platform is designed to help individuals looking for jobs
                  in establishments like barber shops, grocery stores, and small
                  businesses, as well as shop owners who wish to recruit
                  workers.
                </p>
                <p
                  className={`mt-2 font-semibold ${
                    activeTab === 2 ? "border-b-4 border-peach pb-3" : ""
                  }`}
                >
                  <span className="text-peach text-lg text-justify">
                    Languages : Angular, NodeJs, Express, MongoDB, Tailwind-CSS
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
                <h2 className="text-xl font-bold">Classtro</h2>
                <p className="text-gray text-justify mt-2">
                  Classtro is an online platform built using MERN Stack. The
                  objective of Classtro is to make online learning easy with
                  features like live video conferencing, assignment sharing,
                  attendance monitoring and many more with a friendly user
                  interface.
                </p>
                <p
                  className={`mt-2 font-semibold ${
                    activeTab === 3 ? "border-b-4 border-peach pb-3" : ""
                  }`}
                >
                  <span className="text-peach text-lg text-justify">
                    Languages : React, NodeJs, Express, MongoDB, Material UI,
                    AWS - S3, AWS - EC2
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
                <h2 className="text-xl font-bold">Portfolio - UI/UX</h2>
                <p className="text-gray text-justify mt-2">
                  Designed and developed a modern, visually appealing personal
                  portfolio to showcase professional skills, projects, and
                  achievements. Leveraging tools like Figma for prototyping and
                  React with Tailwind CSS for implementation, the portfolio
                  reflects a strong sense of creativity and attention to detail.
                </p>
                <p
                  className={`mt-2 font-semibold ${
                    activeTab === 4 ? "border-b-4 border-peach pb-3" : ""
                  }`}
                >
                  <span className="text-peach text-lg text-justify">
                    Tools : Figma, Material UI
                  </span>
                </p>
              </div>
            </div>

            <div
              className={`w-full flex items-start space-x-4 cursor-pointer ${
                activeTab === 5 ? "" : ""
              }`}
              onClick={() => scrollToContent(5)}
            >
              <div className="flex items-center justify-center w-4 h-4 p-2 mt-1.5 bg-peach rounded-full">
                <div
                  className={`${
                    activeTab === 5 ? "w-1 h-1 p-1 bg-green rounded-full" : ""
                  }`}
                ></div>
              </div>
              <div className="w-4/5">
                <h2 className="text-xl font-bold">EasyCrew - UI/UX</h2>
                <p className="text-gray text-justify mt-2">
                  Conceptualized and designed an intuitive user interface for
                  EasyCrew, a job portal connecting local workers with
                  businesses. Prototyped the design using Figma to ensure a
                  user-friendly and visually cohesive experience. Focused on
                  creating a responsive and accessible interface that simplifies
                  job searching and posting, tailored for diverse user groups,
                  including small businesses and job seekers. The design
                  incorporates seamless navigation, clear job descriptions, and
                  interactive elements to enhance usability.
                </p>
                <p
                  className={`mt-2 font-semibold ${
                    activeTab === 5 ? "border-b-4 border-peach pb-3" : ""
                  }`}
                >
                  <span className="text-peach text-lg text-justify">
                    Tools : Figma, Material UI
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right-side Content */}
          <div
            id="content-container"
            className="w-3/5 mt-0 max-h-screen overflow-y-auto scrollbar-hidden"
          >
          {fullScreenImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              onClick={closeFullScreen}
            >
              <img
                src={fullScreenImage}
                alt="Fullscreen"
                className="max-w-full max-h-full"
              />
            </div>
          )}
            <div
              ref={(el) => (contentRefs.current[0] = el)}
              className="max-h-screen"
            >
              <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
              <p className="text-gray text-justify mt-2">
                Built a modern personal portfolio website utilizing React and
                Tailwind CSS to exhibit skills, projects, and professional
                highlights. The design was independently conceptualized and
                prototyped in Figma, reflecting creativity, attention to detail,
                and a personalized approach to user experience while effectively
                highlighting professional work and achievements.
              </p>
              <p className="mt-2 font-semibold">
                <span className="text-peach text-lg">
                  Languages : React, Tailwind-CSS, NodeJs
                </span>
              </p>
              <p className="mt-2 font-semibold">
                <span className="text-gray text-md">
                  URL :{" "}
                  <a
                    href="www.yashsevada.com/"
                    className="text-gray underline underline-offset-6"
                  >
                    www.yashsevada.com
                  </a>
                </span>
              </p>
              <div className="bg-peach h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-peach h-64 my-4 rounded-lg shadow-md"></div>
            </div>
            <div
              ref={(el) => (contentRefs.current[1] = el)}
              className="max-h-screen mt-24"
            >
              <h2 className="text-2xl font-bold mb-4">EasyCrew</h2>
              <p className="text-gray text-justify mt-2">
                A comprehensive job portal built using Angular, Node.js and
                MongoDB to bridge the gap between local workers and employers.
                The platform is designed to help individuals looking for jobs in
                establishments like barber shops, grocery stores, and small
                businesses, as well as shop owners who wish to recruit workers.
              </p>
              <p className="mt-2 font-semibold">
                <span className="text-peach text-lg">
                  Languages : Angular, NodeJs, Express, MongoDB, Tailwind-CSS
                </span>
              </p>
              <p className="mt-2 font-semibold">
                <span className="text-gray text-md">
                  URL :{" "}
                  <a
                    href="www.easycrew.com"
                    className="text-gray underline underline-offset-6"
                  >
                    www.easycrew.com
                  </a>
                </span>
              </p>
              <div className="grid grid-cols-2 gap-5">
              <div className="bg-peach h-auto my-4 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={EasyCrewLogin}
                  className="w-full h-auto object-contain max-h-64 cursor-pointer"
                  alt="EasyCrew Login"
                  onClick={() => openFullScreen(EasyCrewLogin)}
                />
              </div>
              <div className="bg-peach h-auto my-4 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={EasyCrewDashboard}
                  className="w-full h-auto object-contain max-h-64 cursor-pointer"
                  alt="EasyCrew Dashboard"
                  onClick={() => openFullScreen(EasyCrewDashboard)}
                />
              </div>
              <div className="bg-peach h-auto my-4 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={EasyCrewAddJobs}
                  className="w-full h-auto object-contain max-h-64 cursor-pointer"
                  alt="EasyCrew Add Jobs"
                  onClick={() => openFullScreen(EasyCrewAddJobs)}
                />
              </div>
              <div className="bg-peach h-auto my-4 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={EasyCrewAccount}
                  className="w-full h-auto object-contain max-h-64 cursor-pointer"
                  alt="EasyCrew Account"
                  onClick={() => openFullScreen(EasyCrewAccount)}
                />
              </div>
              </div>
            </div>

            <div
              ref={(el) => (contentRefs.current[2] = el)}
              className="max-h-screen mt-24"
            >
              <h2 className="text-2xl font-bold mb-4">Classtro</h2>
              <p className="text-gray text-justify mt-2">
                Classtro is an online platform built using MERN Stack. The
                objective of Classtro is to make online learning easy with
                features like live video conferencing, assignment sharing,
                attendance monitoring and many more with a friendly user
                interface.
              </p>
              <p className="mt-2 font-semibold">
                <span className="text-peach text-lg">
                  Languages : React, NodeJs, Express, MongoDB, Material UI, AWS
                  - S3, AWS - EC2
                </span>
              </p>

              <div className="bg-peach h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-peach h-64 my-4 rounded-lg shadow-md"></div>
            </div>
            <div
              ref={(el) => (contentRefs.current[3] = el)}
              className="max-h-screen mt-24"
            >
              <h2 className="text-2xl font-bold mb-4">Portfolio - UI/UX</h2>
              <p className="text-gray text-justify mt-2">
                Designed and developed a modern, visually appealing personal
                portfolio to showcase professional skills, projects, and
                achievements. Leveraging tools like Figma for prototyping and
                React with Tailwind CSS for implementation, the portfolio
                reflects a strong sense of creativity and attention to detail.
              </p>
              <p className="mt-2 font-semibold">
                <span className="text-peach text-lg">
                  Tools : Figma, Material UI
                </span>
              </p>
              <p className="mt-2 font-semibold">
                <span className="text-gray text-md">
                  Design URL :{" "}
                  <a
                    href="www.behance.com"
                    className="text-gray underline underline-offset-6"
                  >
                    www.behance.com
                  </a>
                </span>
              </p>
              <div className="bg-peach h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-peach h-64 my-4 rounded-lg shadow-md"></div>
            </div>
            <div
              ref={(el) => (contentRefs.current[4] = el)}
              className="max-h-screen mt-24"
            >
              <h2 className="text-2xl font-bold mb-4">EasyCrew - UI/UX</h2>
              <p className="text-gray text-justify mt-2">
                Conceptualized and designed an intuitive user interface for
                EasyCrew, a job portal connecting local workers with businesses.
                Prototyped the design using Figma to ensure a user-friendly and
                visually cohesive experience. Focused on creating a responsive
                and accessible interface that simplifies job searching and
                posting, tailored for diverse user groups, including small
                businesses and job seekers. The design incorporates seamless
                navigation, clear job descriptions, and interactive elements to
                enhance usability.
              </p>
              <p className="mt-2 font-semibold">
                <span className="text-peach text-lg">
                  Tools : Figma, Material UI
                </span>
              </p>
              <p className="mt-2 font-semibold">
                <span className="text-gray text-md">
                  Design URL :{" "}
                  <a
                    href="www.behance.com"
                    className="text-gray underline underline-offset-6"
                  >
                    www.behance.com
                  </a>
                </span>
              </p>
              <div className="bg-peach h-64 my-4 rounded-lg shadow-md"></div>
              <div className="bg-peach h-64 my-4 rounded-lg shadow-md"></div>
            </div>

            {/* Add other content sections similarly */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
