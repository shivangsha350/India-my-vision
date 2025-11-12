import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-[#3b3b3b] py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Charity Section */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
              S
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 italic">
              Charity
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            The power of giving: Support a cause and make a difference through
            charity.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-[#38451C] mb-3">
            About Us
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>Our History</li>
            <li>What We Believe</li>
            <li>Our Programs</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* Ways to Give */}
        <div>
          <h3 className="text-lg font-semibold text-[#38451C] mb-3">
            Ways To Give
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>Fundraise</li>
            <li>Planned Giving</li>
            <li>Brand Partnership</li>
            <li>Legacy Giving</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#38451C] mb-3">
            Contact Info
          </h3>
          <p className="text-gray-600 text-sm">
            1234 Thornridge Cir. Syracuse,
            <br />
            Connecticut 56789
          </p>
          <p className="mt-2 text-sm text-gray-600">(406) 555-0121</p>
          <p className="mt-1 text-sm text-gray-600">mail@example.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <p className="text-sm text-gray-600 mb-4 md:mb-0">
          © 2025 Designed By Simtrak Solutions. All rights reserved.
        </p>

        {/* Social Media Icons*/}
        <div className="flex items-center space-x-5 text-gray-700 text-lg">
          <FaWhatsapp className="hover:text-lime-600 cursor-pointer transition" />
          <FaInstagram className="hover:text-lime-600 cursor-pointer transition" />
          <FaLinkedinIn className="hover:text-lime-600 cursor-pointer transition" />
          <FaFacebookF className="hover:text-lime-600 cursor-pointer transition" />
          <FaYoutube className="hover:text-lime-600 cursor-pointer transition" />
        </div>

        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-lime-600 hover:bg-lime-700 text-white p-3 rounded-md ml-5 transition"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
