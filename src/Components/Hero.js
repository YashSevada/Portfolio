import React from "react";
import ScrollImage from "../assets/scroll-down.png";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="bg-green min-h-screen flex flex-col items-center justify-center text-center text-white relative px-4 sm:px-8">
      <Header />
      {/* Hero Content */}
      <div className="mt-12 sm:mt-16 space-y-4 md:space-y-6 px-4">
        {/* Introduction */}
        <p className="text-3xl sm:text-4xl md:text-6xl">
          I<span className="text-peach">'</span>m
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-peach py-2 md:py-4">
          Yash Sevada
        </h1>
        <p className="text-base sm:text-lg md:text-3xl font-medium">
          Full Stack Web Developer
        </p>

        {/* Social Media Links */}
        <div className="flex items-center justify-center space-x-4 md:space-x-8 mt-6">
          <a
            href="https://www.linkedin.com/in/yashsevada"
            target="blank"
            className="hover:text-white"
          >
            <i className="fa-brands fa-linkedin text-peach text-lg sm:text-xl md:text-2xl hover:animate-pulse"></i>
          </a>
          <a
            href="https://github.com/YashSevada"
            target="blank"
            className="hover:text-white"
          >
            <i className="fa-brands fa-github text-peach text-lg sm:text-xl md:text-2xl hover:animate-pulse"></i>
          </a>
          <a
            href="https://stackoverflow.com/users/12067277/yash-sevada"
            target="blank"
            className="hover:text-white"
          >
            <i className="fa-brands fa-stack-overflow text-peach text-lg sm:text-xl md:text-2xl hover:animate-pulse"></i>
          </a>
          <a
            href="https://gitlab.com/yashsevada2000"
            target="blank"
            className="hover:text-white"
          >
            <i className="fa-brands fa-gitlab text-peach text-lg sm:text-xl md:text-2xl hover:animate-pulse"></i>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="flex items-center w-full absolute bottom-14 px-4 md:px-0">
        <div className="flex-grow border-t border-peach animate-pulse"></div>
        <span className="mx-4 text-xs sm:text-sm md:text-base text-white animate-pulse">
          Scroll Down
        </span>
        <div className="flex-grow border-t border-peach animate-pulse"></div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-4 md:bottom-2">
        <a href="#">
          <img
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-bounce"
            src={ScrollImage}
            alt="Scroll Down"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
