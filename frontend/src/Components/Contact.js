import React, { useState } from "react";
import axios from "axios";
import File from "../assets/Yash_Sevada_CV.pdf";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName) {
      newErrors.firstName = "First Name is required.";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    }
    if (!formData.subject) {
      newErrors.subject = "Subject is required.";
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
    }

    else if (!/\S+@\S+\.\S+/.test(formData.email)) 
    {
      newErrors.email = "Please enter a valid email address.";
    }

    else if (!/^\d{10}$/.test(formData.phone)){
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSendStatus("Please correct the errors and try again.");
      return;
    }

    setIsSending(true);
    setSendStatus("Please Wait... Sending Your Response");
    const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

    try {
      const response = await axios.post(API_BASE_URL, formData);
      if (response.status === 200) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setSendStatus("Thank You For Your Response. I will reach out to you soon...");
      } else {
        setSendStatus("OOPS! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSendStatus("OOPS! Error sending message. Please try again later.");
    } finally {
      setIsSending(false);

      
      setTimeout(() => {
        setSendStatus("");
      }, 5000);
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
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center bg-green text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl py-6 md:py-10 font-bold">Contact Me</h1>
        <div className="flex flex-col md:flex-row justify-between lg:border lg:border-peach rounded-lg p-6 md:p-8 lg:mx-32 transition-transform transform scale-105 shadow-2xl">
          {/* Left Section */}
          <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-peach pb-6 md:pb-0 md:pr-6">
            <h2 className="text-xl font-semibold mb-4 border-b border-peach inline-block">
              Quick ID
            </h2>
            <p className="mb-2 font-light"><span className="font-medium">Phone :</span> +91-8055425422</p>
            <p className="mb-2 font-light"><span className="font-medium">Email :</span> yashsevada2000@gmail.com</p>
            <p className="mb-6 font-light"><span className="font-medium">Address :</span> Pune, India</p>
            <button
              onClick={downloadCV}
              className="px-4 py-2 bg-transparent text-white border border-peach rounded-lg hover:bg-peach hover:text-green transition-all"
            >
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
                  placeholder="First Name *"
                  className="w-full sm:w-1/2 p-2 bg-transparent border border-peach rounded-lg outline-none placeholder-faint placeholder-opacity-80 mb-4 sm:mb-0"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  className="w-full sm:w-1/2 p-2 bg-transparent border border-peach rounded-lg outline-none placeholder-faint placeholder-opacity-80"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>

              {/* Email Field */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full p-2 bg-transparent border border-peach rounded-lg outline-none placeholder-faint placeholder-opacity-80"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              {/* Phone Number Field */}
              <input
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                className="w-full p-2 bg-transparent border border-peach rounded-lg outline-none placeholder-faint placeholder-opacity-80"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

              {/* Subject Field */}
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                className="w-full p-2 md:pt-4 sm:pt-4 bg-transparent border border-peach rounded-lg outline-none placeholder-faint placeholder-opacity-80"
              />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}

              {/* Message Field */}
              <textarea
                placeholder="Message *"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border border-peach rounded-lg outline-none placeholder-faint placeholder-opacity-80 h-24 resize-none"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full sm:w-auto px-6 py-2 bg-peach text-green rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSending ? "Sending Your Response..." : "Send"}
              </button>
            </form>

            {/* Status Message */}
            <div className="mt-2 text-white">
              {sendStatus && <p>{sendStatus}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
