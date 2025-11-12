import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-between items-center px-10 py-4 z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src="/ADORE.png" alt="logo" className="w-28 h-auto" />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 text-gray-800 text-lg font-medium">
        <a href="#" className="text-lime-600 font-semibold">Home</a>
        <a href="#" className="hover:text-lime-600 transition">About Us</a>
        <a href="#" className="hover:text-lime-600 transition">Our Work</a>
        <a href="#" className="hover:text-lime-600 transition">Stories</a>
        <a href="#" className="hover:text-lime-600 transition">Contact</a>
      </nav>

      {/* Donate Button */}
      <button className="bg-lime-600 text-white font-semibold rounded-lg px-5 py-2 hover:bg-lime-700 transition">
        Join Us
      </button>
    </header>
  );
};

export default Navbar;
