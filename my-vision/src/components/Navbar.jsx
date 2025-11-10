import React from "react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-20">
      <div className="flex items-center space-x-2">
        {/* <img src="/logo.svg" alt="logo" className="w-8 h-8" /> */}
        
        <h1 className="text-white text-2xl font-semibold">India My-Vision</h1>
      </div>

      <nav className="hidden md:flex space-x-8 text-white text-lg font-medium">
        <a href="#" className="text-lime-400">Home</a>
        <a href="#">About Us</a>
        <a href="#">Our Work</a>
        <a href="#">Stories</a>
        <a href="#">Contact</a>
      </nav>

      <button className="bg-white text-black font-semibold rounded-lg px-5 py-2 hover:bg-gray-200 transition">
        Donate
      </button>
    </header>
  );
};

export default Navbar;
