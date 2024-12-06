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
          className="w-6 h-6 md:w-12 md:h-12 fixed bottom-20 right-6 text-white rounded-full shadow-2xl transition-all animate-bounce cursor-pointer"
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
            href="https://www.linkedin.com/in/yashsevada"
            target="blank"
            className="hover:text-white"
          >
            <i className="fa-brands fa-linkedin text-peach text-xl md:text-2xl hover:animate-pulse"></i>
          </a>
          <a
            href="https://github.com/YashSevada"
            target="blank"
            className="hover:text-white"
          >
            <i className="fa-brands fa-github text-peach text-xl md:text-2xl hover:animate-pulse"></i>
          </a>
          <a
            href="https://stackoverflow.com/users/12067277/yash-sevada"
            target="blank"
            className="hover:text-white"
          >
            <i className="fa-brands fa-stack-overflow text-peach text-xl md:text-2xl hover:animate-pulse"></i>
          </a>

          <a
            href="https://gitlab.com/yashsevada2000"
            target="blank"
            className="hover:text-white"
          >
            <i className="fa-brands fa-gitlab text-peach text-xl md:text-2xl hover:animate-pulse"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
