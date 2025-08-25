import React, { useState } from "react";
import Logo from "./mini/Logo";
import Button from "./mini/Button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Industries", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Testimonials", href: "#" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-center relative px-4 md:px-12 pt-6 md:pt-8 w-full z-10">
      <div className="max-w-[1440px] flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <span className="text-white text-xl font-bold flex items-center gap-0">
            <Logo size={36} />
            Forward Velocity
          </span>
        </div>

        <div className="flex items-center justify-between gap-8">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-white text-base font-medium">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-green">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
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
            <a
              key={link.label}
              href={link.href}
              className="text-white text-2xl font-medium hover:text-green"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="w-3/4 text-lg py-3">Start Now</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
