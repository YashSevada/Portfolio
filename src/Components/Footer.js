import React, { useState, useEffect } from "react";
import ScrollImage from "../assets/scroll-up.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-green text-white py-6">
      {isVisible && (

          <img
            onClick={scrollToTop}
            className="w-6 h-6 md:w-12 md:h-12 fixed bottom-20 right-6 text-white rounded-full shadow-2xl transition-all animate-bounce"
            src={ScrollImage}
            alt="Scroll Up"
          />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center sm:text-left">
          <p>© {currentYear} by Yash Sevada. Made with ❤️</p>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="#"
            className="text-white hover:text-peach transition-colors"
            aria-label="LinkedIn"
          >
            <i className="fi fi-brands-linkedin text-peach text-xl md:text-xl"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-peach transition-colors"
            aria-label="GitHub"
          >
            <i className="fi fi-brands-github text-peach text-xl md:text-xl"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-peach transition-colors"
            aria-label="Google"
          >
            <i className="fi fi-brands-google text-peach text-xl md:text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
