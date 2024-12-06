import React, { useState, useEffect } from "react";
import File from "../assets/Yash_Sevada_CV.pdf";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    return window.addEventListener("scroll", handleScroll);
  }, []);

  const sideBarOpen = () => {
    setSidebarOpen(true);
  };

  const sideBarClose = () => {
    setSidebarOpen(false);
  };

  const downloadCV = () => {
    const fileUrl = File;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "file.pdf";
    link.click();
  };

  return (
    <div className="bg-green text-white">
      {/* Navigation Bar */}

      <nav
        className={`${
          isSticky ? "fixed bg-green shadow-lg z-50" : "absolute"
        } top-0 left-0 w-full flex justify-between items-center px-4 py-4 lg:px-10 transition-all duration-300`}
      >
        <span className="text-lg font-bold cursor-pointer">
          Yash Sevada Portfolio
        </span>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden text-white text-2xl" onClick={sideBarOpen}>
          <i className="fa-solid fa-bars text-peach text-xl md:text-2xl"></i>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6">
          <a href="#about">
            <li className="cursor-pointer hover:text-peach hover:border hover:rounded-tl-xl hover:rounded-br-xl hover:border-peach px-4 py-1">
              About
            </li>
          </a>
          <a href="#projects">
            <li className="cursor-pointer hover:text-peach hover:border hover:rounded-tl-xl hover:rounded-br-xl hover:border-peach px-4 py-1">
              Projects
            </li>
          </a>
          <a href="#skills">
            <li className="cursor-pointer hover:text-peach hover:border hover:rounded-tl-xl hover:rounded-br-xl hover:border-peach px-4 py-1">
              Skills
            </li>
          </a>
          <a href="#experience">
            <li className="cursor-pointer hover:text-peach hover:border hover:rounded-tl-xl hover:rounded-br-xl hover:border-peach px-4 py-1">
              Experience
            </li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer hover:text-peach hover:border hover:rounded-tl-xl hover:rounded-br-xl hover:border-peach px-4 py-1">
              Contact
            </li>
          </a>
        </ul>

        <button
          onClick={downloadCV}
          className="hidden md:block border border-peach text-white px-3 py-2 lg:px-4 lg:py-2 rounded rounded-tl-2xl rounded-br-2xl hover:border-none hover:bg-peach hover:text-green"
        >
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
          className="md:hidden absolute top-0 right-0 px-4 py-4 text-white text-2xl"
          onClick={sideBarClose}
        >
          <i className="fa-solid fa-xmark text-peach text-xl md:text-2xl"></i>
        </button>

        <ul className="space-y-14 text-center">
          <a href="#about">
            <li className="cursor-pointer hover:text-peach text-lg">About</li>
          </a>
          <a href="#projects">
            <li className="cursor-pointer hover:text-peach text-lg">
              Projects
            </li>
          </a>
          <a href="#skills">
            <li className="cursor-pointer hover:text-peach text-lg">skills</li>
          </a>
          <a href="#experience">
            <li className="cursor-pointer hover:text-peach text-lg">
              Experience
            </li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer hover:text-peach text-lg">Contact</li>
          </a>
          <button
            onClick={downloadCV}
            className="md:block border border-peach text-white px-3 py-2 lg:px-4 lg:py-2 rounded hover:border-none hover:bg-peach hover:text-green"
          >
            Download CV
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
