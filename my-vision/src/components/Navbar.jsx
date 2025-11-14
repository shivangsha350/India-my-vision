import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaPinterestP,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full shadow-md relative">
      {/* 🔴 Top Bar */}
      <div className="bg-[#c53c56] text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-2 text-sm">
        {/* Left Info Section */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>California, TX 70240</span>
          </div>
          <div className="flex items-center gap-2 border-l border-white pl-4">
            <FaEnvelope />
            <span>Info@Gmail.Com</span>
          </div>
          <div className="flex items-center gap-2 border-l border-white pl-4">
            <FaPhoneAlt />
            <span>+123 456 7890</span>
          </div>
        </div>

        {/* Right Social Icons */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-200">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaDribbble />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaPinterestP />
          </a>
        </div>
      </div>

      {/* ⚪ Main Navbar */}
      <div className="bg-white flex justify-between items-center px-6 md:px-16 py-4 static">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/ADORE.png" alt="logo" className="w-32 h-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <a href="#" className="text-lime-600 font-semibold">
            HOME
          </a>
          <a href="#" className="hover:text-lime-600 transition">
            ABOUT
          </a>
          <a href="#" className="hover:text-lime-600 transition">
            EVENT
          </a>
          <a href="#" className="hover:text-lime-600 transition">
            PROJECTS
          </a>
          <a href="#" className="hover:text-lime-600 transition">
            CAUSES
          </a>
          <a href="#" className="hover:text-lime-600 transition">
            BLOG
          </a>
          <a href="#" className="hover:text-lime-600 transition">
            PAGES
          </a>
          <a href="#" className="hover:text-lime-600 transition">
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl text-gray-700 cursor-pointer">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
