import React from "react";
import Button from "./mini/Button";
import Logo from "./mini/Logo";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="w-full relative pt-16 px-4 md:px-16">
      <div
        className="absolute left-1/2 bottom-0 w-[90vw] max-w-7xl h-[250px] pointer-events-none -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, #159653cc 0%, #6FD28788 60%, transparent 100%)",
          filter: "blur(100px)",
          opacity: 1,
        }}
      />

      <div className="max-w-7xl relative mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between pb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-white font-semibold text-2xl mb-2">
              Stay sharp.
            </h2>
            <p className="text-gray-text text-base mb-4 max-w-2xl">
              Occasional insights on making your systems work for you, not against you.
            </p>
          </div>

          <div className="flex flex-col items-center w-full md:w-auto">
            <form className="flex gap-2 items-center w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-lg bg-black/50 text-white border-none outline-none w-48 md:w-64 transition-all duration-300 focus:shadow-[0_0_0_2px_rgb(34_197_94)] focus:bg-black/70"
              />
              <div className="hover:scale-105 active:scale-95 transition-transform duration-300">
                <Button className="bg-green-500 text-black font-semibold px-6 py-2">
                  Subscribe
                </Button>
              </div>
            </form>
            <small className="text-gray-400 mt-2">Unsubscribe any time.</small>
          </div>
        </div>

        <div className="flex bg-black rounded-t-[2rem] flex-col justify-around min-h-[250px] p-8">
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between md:items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0 justify-center">
              <div>
                <Logo size={32} className="mr-2" />
              </div>
              <span className="text-white font-bold text-xl">
                Forward Velocity
              </span>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-white text-base mb-4 md:mb-0 justify-center">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" }, 
                { label: "Projects", href: "#" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "/blog" },
                { label: "Resources", href: "/resources" }
              ].map((nav, idx) => (
                <a
                  key={nav.label}
                  href={nav.href}
                  className="hover:text-green-400 transition-colors duration-300 relative group hover:-translate-y-0.5"
                >
                  {nav.label}
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center gap-4 mt-6 md:flex-row md:justify-between md:items-center">
            <div className="text-gray-text-fade text-center md:text-left">
              © {new Date().getFullYear()} Forward Velocity. All rights
              reserved.
            </div>
            <div className="flex gap-2 justify-center md:justify-end">
              {[
                { icon: FaLinkedinIn, className: "bg-green-600", href: "https://www.linkedin.com/company/forward-velocity" },
                {
                  icon: FaInstagram,
                  className: "bg-black border border-gray-700",
                  href: "https://www.instagram.com/forwardvelocityllc/",
                },
                {
                  icon: FaFacebookF,
                  className: "bg-black border border-gray-700",
                  href: "#",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.className} rounded-full w-8 h-8 flex items-center justify-center text-white shadow-lg hover:scale-110 hover:rotate-12 transition-transform duration-300`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
