import React from "react";
import Button from "./mini/Button";
import Logo from "./mini/Logo";

const FooterSection = () => (
  <footer className="w-full bg-black pt-16 pb-8 px-4 md:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between pb-10 border-b border-gray-800">
        <div className="mb-6 md:mb-0">
          <h2 className="text-white font-semibold text-2xl mb-2">
            Stay sharp.
          </h2>
          <p className="text-gray-text text-base mb-4 max-w-md">
            Join our list for occasional insights on fixing broken systems,
            streamlining operations, and using tech to move faster -- whether
            you're starting out or scaling up.
          </p>
        </div>
        <form className="flex gap-2 items-center w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg bg-[#181C1B] text-white border-none outline-none w-48 md:w-64"
          />
          <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2">
            Subscribe
          </Button>
        </form>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between pt-8">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Logo size={32} className="mr-2" />
          <span className="text-white font-bold text-lg">Forward Velocity</span>
        </div>
        <nav className="flex gap-6 text-gray-400 text-base mb-4 md:mb-0">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#" className="hover:text-white">
            Services
          </a>
          <a href="#" className="hover:text-white">
            Industries
          </a>
          <a href="#" className="hover:text-white">
            How It Works
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
          <a href="#" className="hover:text-white">
            Testimonials
          </a>
        </nav>
        <div className="flex gap-4">
          <a
            href="#"
            className="bg-green-600 rounded-full w-8 h-8 flex items-center justify-center text-white"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="#"
            className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white border border-gray-700"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="#"
            className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white border border-gray-700"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div className="text-gray-600 text-xs text-center pt-8">
        © 2025 your awesome website. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;
