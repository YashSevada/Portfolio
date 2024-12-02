import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl py-6 md:py-10">
          Contact Me
        </h1>
        <div className="flex flex-col md:flex-row justify-between lg:border lg:border-peach rounded-lg p-6 md:p-8 lg:mx-32 transition-transform transform scale-105 shadow-2xl">
          {/* Left Section */}
          <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-peach pb-6 md:pb-0 md:pr-6">
            <h2 className="text-xl font-semibold mb-4 border-b border-peach inline-block">
              Quick ID
            </h2>
            <p className="mb-2">Phone: +91-8055425422</p>
            <p className="mb-2">Email: yashsevada2000@gmail.com</p>
            <p className="mb-2">Website: www.yashsevada.com</p>
            <p className="mb-6">
              Address: A-1102, Bloomville Hinjewadi, Opp. Arabian Mandi House,
              Hinjewadi, Pune - 411015
            </p>
            <button className="px-4 py-2 bg-transparent text-white border border-peach rounded-lg hover:bg-peach hover:text-green transition-all">
              Download CV
            </button>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-6">
            <h2 className="text-xl font-semibold mb-4 border-b border-peach inline-block">
              Get In Touch
            </h2>
            <form className="space-y-4">
              {/* Name Fields */}
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full sm:w-1/2 p-2 bg-transparent border border-peach rounded-lg outline-none mb-4 sm:mb-0"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full sm:w-1/2 p-2 bg-transparent border border-peach rounded-lg outline-none"
                />
              </div>

              {/* Email Field */}
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 bg-transparent border border-peach rounded-lg outline-none"
              />

              {/* Phone Number Field */}
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <select className="w-full sm:w-1/4 p-2 bg-transparent border border-peach rounded-lg outline-none">
                  <option value="+91">+91</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full sm:w-3/4 p-2 bg-transparent border border-peach rounded-lg outline-none"
                />
              </div>

              {/* Subject Field */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 bg-transparent border border-peach rounded-lg outline-none"
              />

              {/* Message Field */}
              <textarea
                placeholder="Message"
                className="w-full p-2 bg-transparent border border-peach rounded-lg outline-none h-24 resize-none"
              ></textarea>

              {/* Submit Button */}
              <button className="w-full sm:w-auto px-6 py-2 bg-peach text-green rounded-lg hover:bg-green hover:text-white transition-all">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
