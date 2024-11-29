import React,{useState} from "react";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const sideBarOpen = () => {
    setSidebarOpen(true)
  }

  const sideBarClose = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="bg-green text-white">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-4 lg:px-10">
        <span className="text-lg font-bold cursor-pointer">
          Yash Sevada Portfolio
        </span>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden text-white text-3xl" onClick={sideBarOpen}>
          <i className="fi fi-brands-linkedin text-peach text-xl md:text-2xl"></i>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6">
          <li className="cursor-pointer hover:text-peach hover:border hover:border-peach px-4 py-2">
            About
          </li>
          <li className="cursor-pointer hover:text-peach hover:border hover:border-peach px-4 py-2">
            Projects
          </li>
          <li className="cursor-pointer hover:text-peach hover:border hover:border-peach px-4 py-2">
            Skills
          </li>
          <li className="cursor-pointer hover:text-peach hover:border hover:border-peach px-4 py-2">
            Experience
          </li>
        </ul>

        <button className="hidden md:block border border-peach text-white px-3 py-2 lg:px-4 lg:py-2 rounded hover:border-none hover:bg-peach hover:text-green">
          Download CV
        </button>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`transform ${
          !isSidebarOpen
            ? "hidden"
            : "w-screen h-screen fixed inset-0 bg-green text-white translate-x-0 transition-transform duration-300 ease-in-out z-50 flex items-center justify-center"
        }`}
      >
        <button
          className="md:hidden absolute top-0 right-0 px-4 py-4 text-white text-3xl"
          onClick={sideBarClose}
        >
          <i className="fi fi-brands-github text-peach text-xl md:text-2xl"></i>
        </button>

        <ul className="space-y-14 text-center">
          <li className="cursor-pointer hover:text-peach text-lg">About</li>
          <li className="cursor-pointer hover:text-peach text-lg">Projects</li>
          <li className="cursor-pointer hover:text-peach text-lg">Skills</li>
          <li className="cursor-pointer hover:text-peach text-lg">
            Experience
          </li>
          <button className="md:block border border-peach text-white px-3 py-2 lg:px-4 lg:py-2 rounded hover:border-none hover:bg-peach hover:text-green">
            Download CV
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
