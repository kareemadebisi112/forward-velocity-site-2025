import React from "react";
import Button from "./mini/Button";
import Logo from "./mini/Logo";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FooterSection = () => (
  <footer className="w-full relative pt-16 px-4 md:px-16">
    <div
      className="absolute left-1/2 bottom-0 w-[90vw] max-w-7xl h-[250px] pointer-events-none -translate-x-1/2 animate-cloudglow"
      style={{
        background:
          "radial-gradient(ellipse at center, #159653cc 0%, #6FD28788 60%, transparent 100%)",
        filter: "blur(100px)",
        opacity: 1,
      }}
    />
    <div className="max-w-7xl relative mx-auto animate-fadein">
      <div className="flex flex-col md:flex-row items-center justify-between pb-10 ">
        <div className="mb-6 md:mb-0">
          <h2 className="text-white font-semibold text-2xl mb-2">
            Stay sharp.
          </h2>
          <p className="text-gray-text text-base mb-4 max-w-2xl">
            Join our list for occasional insights on fixing broken systems,
            streamlining operations, and using tech to move faster -- whether
            you're starting out or scaling up.
          </p>
        </div>
        <form className="flex gap-2 items-center w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-lg bg-black/50 text-white border-none outline-none w-48 md:w-64 transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:bg-black/70"
          />
          <Button className="bg-green-500 text-black font-semibold px-6 py-2 transition-all duration-300">
            Subscribe
          </Button>
        </form>
      </div>

      <div className="flex bg-black rounded-t-[2rem] flex-col justify-between min-h-[250px] p-8 animate-slideup">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between md:items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0 justify-center">
            <Logo size={32} className="mr-2 animate-pop" />
            <span className="text-white font-bold text-xl">
              Forward Velocity
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-white text-base mb-4 md:mb-0 justify-center">
            {[
              "Home",
              "Services",
              "Industries",
              "How It Works",
              "Contact",
              "Testimonials",
            ].map((nav, idx) => (
              <a
                key={nav}
                href="#"
                className="hover:text-green-400 transition-colors duration-300 relative group"
              >
                {nav}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6 md:flex-row md:justify-between md:items-center">
          <div className="text-gray-text-fade text-center md:text-left">
            © {new Date().getFullYear()} Forward Velocity. All rights reserved.
          </div>
          <div className="flex gap-2 justify-center md:justify-end">
            <a
              href="#"
              className="bg-green-600 rounded-full w-8 h-8 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-green-500 shadow-lg"
            >
              <FaFacebookF className="transition-transform duration-300 group-hover:rotate-[15deg]" />
            </a>
            <a
              href="#"
              className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white border border-gray-700 transition-all duration-300 hover:scale-110 hover:bg-gray-900 shadow-lg"
            >
              <FaInstagram className="transition-transform duration-300 group-hover:rotate-[15deg]" />
            </a>
            <a
              href="#"
              className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white border border-gray-700 transition-all duration-300 hover:scale-110 hover:bg-gray-900 shadow-lg"
            >
              <FaLinkedinIn className="transition-transform duration-300 group-hover:rotate-[15deg]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
