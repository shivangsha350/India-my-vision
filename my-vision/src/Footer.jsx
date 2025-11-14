import React from "react";
import {
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f1114] text-gray-300 pt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
        {/* ABOUT US */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 relative">
            ABOUT US
            <span className="absolute left-0 bottom-[-8px] w-10 h-[2px] bg-[#c53c56]"></span>
          </h3>
          <p className="text-sm leading-relaxed mb-5 text-gray-400">
            Excellence decisively nay man yet impression for contrasted
            remarkably. There spoke happy for you are out. Fertile how old
            address did showing because sitting replied six. Had arose guest
            visit going off child she new.
          </p>
          <p className="italic text-sm mb-3 text-gray-400">
            Please write your email and get our amazing updates, news and
            support
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your e-mail here"
              className="w-full bg-[#1a1c20] text-gray-300 text-sm px-4 py-3 focus:outline-none"
            />
            <button className="bg-[#c53c56] hover:bg-[#a93148] px-5 flex items-center justify-center transition">
              <FaPaperPlane />
            </button>
          </div>
        </div>

        {/* RECENT POSTS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 relative">
            RECENT POSTS
            <span className="absolute left-0 bottom-[-8px] w-10 h-[2px] bg-[#c53c56]"></span>
          </h3>

          <ul className="space-y-5">
            {/* Post 1 */}
            <li className="flex gap-4 border-b border-gray-700 pb-4">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=80&h=80&q=80"
                alt="post1"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h4 className="text-sm text-white font-medium hover:text-[#c53c56] cursor-pointer">
                  Participate In Staff Meetings Manage Dedicated
                </h4>
                <p className="text-xs text-gray-400 mt-2">
                  12 FEB, 2018 | BY AUTHOR
                </p>
              </div>
            </li>

            {/* Post 2 */}
            <li className="flex gap-4 border-b border-gray-700 pb-4">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=80&h=80&q=80"
                alt="post2"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h4 className="text-sm text-white font-medium hover:text-[#c53c56] cursor-pointer">
                  Future Plan & Strategy For Construction
                </h4>
                <p className="text-xs text-gray-400 mt-2">
                  12 FEB, 2018 | BY AUTHOR
                </p>
              </div>
            </li>

            {/* Post 3 */}
            <li className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1605731414532-6b26976cc153?auto=format&fit=crop&w=80&h=80&q=80"
                alt="post3"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h4 className="text-sm text-white font-medium hover:text-[#c53c56] cursor-pointer">
                  Melancholy Particular Devonshire Alteration
                </h4>
                <p className="text-xs text-gray-400 mt-2">
                  12 FEB, 2018 | BY AUTHOR
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* TWITTER WIDGET */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 relative">
            TWITTER WIDGET
            <span className="absolute left-0 bottom-[-8px] w-10 h-[2px] bg-[#c53c56]"></span>
          </h3>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-2">
                Looking for an awesome CREATIVE WordPress Theme? Esquise was
                updated and optimized to run even better. Find it here:{" "}
                <span className="text-[#c53c56] cursor-pointer">
                  http://t.co/OWWEMQEQ48
                </span>
              </p>
              <div className="flex items-center text-xs text-gray-500 gap-2">
                <FaTwitter /> 01 day ago
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-2">
                It is a long established fact that a reader will be distracted
                by the readable. Find it here:{" "}
                <span className="text-[#c53c56] cursor-pointer">
                  http://t.co/OWWEMQEQ48
                </span>
              </p>
              <div className="flex items-center text-xs text-gray-500 gap-2">
                <FaTwitter /> 02 days ago
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0c0e10] mt-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img
              src="/ADORE.png"
              alt="Charity Logo"
              className="w-32 h-auto"/>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c53c56]">
              Terms of Use
            </a>
            <a href="#" className="hover:text-[#c53c56]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#c53c56]">
              Contact Us
            </a>
            <p>Copyright @ Designed By Simtrak Solution</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
