import React from "react";
import ScrollImage from "../assets/scroll-down.png"
import Header from "./Header";

const Hero = () => {
  return (
      <div className="bg-green min-h-screen flex flex-col items-center justify-center text-center text-white relative">
        <Header/>        
          {/* Hero Content */}
          <div className="mt-16 space-y-4 md:space-y-6 px-4">
            <p className="text-4xl md:text-6xl">
              I<span className="text-peach">'</span>m
            </p>
            <h1 className="text-6xl md:text-8xl font-bold text-peach py-2 md:py-4">
              Yash Sevada
            </h1>
            <p className="text-lg md:text-3xl font-medium">Full Stack Web Developer</p>
    
            {/* Social Media Links */}
            <div className="flex justify-center space-x-4 md:space-x-8 mt-6">
              <a href="#" className="hover:text-white">
                <i className="fi fi-brands-linkedin text-peach text-xl md:text-2xl"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fi fi-brands-github text-peach text-xl md:text-2xl"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fi fi-brands-google text-peach text-xl md:text-2xl"></i>
              </a>
            </div>
          </div>
    
          {/* Scroll Down Indicator */}
          <div className="flex items-center w-full absolute bottom-14 px-4 md:px-0">
            <div className="flex-grow border-t border-peach animate-pulse"></div>
            <span className="mx-4 text-xs md:text-sm text-white animate-pulse">
              Scroll Down
            </span>
            <div className="flex-grow border-t border-peach animate-pulse"></div>
          </div>
    
          {/* Down Arrow */}
          <div className="absolute bottom-2">
            <a href="#" className="">
              <img
                className="w-6 h-6 md:w-8 md:h-8 animate-bounce"
                src={ScrollImage}
                alt="Scroll Down"
              />
            </a>
          </div>
        </div>
      );
};

export default Hero;
