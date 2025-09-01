import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./mini/Logo";
import Button from "./mini/Button";
import SecondaryButton from "./mini/SecondaryButton";
import ToolboxButton from "./mini/ToolboxButton";
import { FaChevronDown } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const resourcesDropdown = [
  { label: "Blog", href: "/blog", description: "Insights & best practices" },
  { label: "Downloads", href: "/resources", description: "Guides, templates & tools" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-center relative px-4 md:px-12 pt-6 md:pt-8 w-full z-20">
      {/* Blur bg */}
      <div className="absolute top-0 inset-0 pointer-events-none bg-black/30 backdrop-blur-none" />

      <div className="max-w-[1440px] flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-white text-xl font-bold flex items-center gap-0 hover:text-green-400 transition-colors duration-300 font-archivo">
            <Logo size={36} />
            Forward Velocity
          </Link>
        </div>

        <div className="flex items-center justify-between gap-8">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-white text-base font-medium">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.href}
                className="hover:text-green-400 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
            
            {/* Resources Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center gap-1 hover:text-green-400 transition-colors duration-300 relative group"
              >
                Resources
                <FaChevronDown 
                  className={`text-xs transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} 
                />
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
              
              {/* Dropdown Menu */}
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                  {resourcesDropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.href}
                      className="block px-4 py-3 hover:bg-white/10 transition-colors duration-200 group"
                      onClick={() => setResourcesOpen(false)}
                    >
                      <div className="text-white font-medium group-hover:text-green-400 transition-colors duration-200">
                        {item.label}
                      </div>
                      <div className="text-gray-text text-sm">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Dev Tools Toolbox */}
            {/* <ToolboxButton href="https://your-dev-tools-site.com" /> */}
          </nav>

          <div className="hidden md:flex gap-3">
            <Button>Start Now</Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Toggle */}
      <button
        className="md:hidden text-white focus:outline-none z-20"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center gap-8 md:hidden z-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-white text-2xl font-medium hover:text-green-400 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Mobile Resources Section */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-white text-xl font-medium">Resources</span>
            {resourcesDropdown.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-white/80 text-lg hover:text-green-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <Button className="w-3/4 text-lg py-3">Start Now</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
