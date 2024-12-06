import React, { useState } from "react";
import axios from "axios";
import File from '../assets/Yash_Sevada_CV.pdf'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email: "",
    phone: "",
    subject:"",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/send", formData);

      if (response.status === 200) {
        alert("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName:"",
          email: "",
          phone: "",
          subject:"",
          message: "",      
        })
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again later.");
    }
  };

  const downloadCV = () => {
    const fileUrl = File;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "file.pdf";
    link.click();
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center bg-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl py-6 md:py-10">Contact Me</h1>
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
            <button onClick={downloadCV} className="px-4 py-2 bg-transparent text-white border border-peach rounded-lg hover:bg-peach hover:text-green transition-all">
              Download CV
            </button>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-6">
            <h2 className="text-xl font-semibold mb-4 border-b border-peach inline-block">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
            onChange={handleChange}
                  placeholder="First Name"
                  className="w-full sm:w-1/2 p-2 bg-transparent border border-peach rounded-lg outline-none mb-4 sm:mb-0"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
            onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full sm:w-1/2 p-2 bg-transparent border border-peach rounded-lg outline-none"
                />
              </div>

              {/* Email Field */}
              <input
                type="email"
                name="email"
                value={formData.email}
            onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 bg-transparent border border-peach rounded-lg outline-none"
              />

              {/* Phone Number Field */}
              <input
                type="phone"
                name="phone"
                value={formData.phone}
            onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-2 bg-transparent border border-peach rounded-lg outline-none"
              />

              {/* Subject Field */}
              <input
                type="text"
                name="subject"
                value={formData.subject}
            onChange={handleChange}
                placeholder="Subject"
                className="w-full p-2 md:pt-4 sm:pt-4 bg-transparent border border-peach rounded-lg outline-none"
              />

              {/* Message Field */}
              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
            onChange={handleChange}
                className="w-full p-2 bg-transparent border border-peach rounded-lg outline-none h-24 resize-none"
              ></textarea>

              {/* Submit Button */}
              <button type="submit" className="w-full sm:w-auto px-6 py-2 bg-peach text-green rounded-lg hover:bg-green hover:text-white hover:border hover:border-peach transition-all">
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
