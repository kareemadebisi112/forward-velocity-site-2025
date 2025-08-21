import React from "react";
import RotatingSolar from "./RotatingSolar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 right-0 w-full h-full">
        <RotatingSolar />
      </div>
      {/* Overlay for transparency */}
      <div className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 flex flex-col justify-between h-full w-full pointer-events-none">
        {/* Top Navigation */}
        <header className="flex items-center justify-between px-12 pt-8">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <span className="text-green text-xl font-bold flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L22 20H2L12 2Z"
                  stroke="#159653"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              Forward Velocity
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-white text-base font-medium">
            <a href="#" className="hover:text-green">
              Home
            </a>
            <a href="#" className="hover:text-green">
              Services
            </a>
            <a href="#" className="hover:text-green">
              Industries
            </a>
            <a href="#" className="hover:text-green">
              How It Works
            </a>
            <a href="#" className="hover:text-green">
              Contact
            </a>
            <a href="#" className="hover:text-green">
              Testimonials
            </a>
          </nav>
          <button className="bg-light-green text-black font-semibold px-6 py-2 rounded-lg shadow-lg pointer-events-auto">
            Start Now
          </button>
        </header>

        {/* Hero Content */}
        <main className="flex flex-col items-start justify-center px-12 pt-32 md:pt-40 lg:pt-48 max-w-3xl">
          <h1
            className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ textShadow: "0 2px 16px #101010" }}
          >
            Your systems are
            <br />
            slowing you down.
            <br />
            Let's fix that.
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <p className="text-gray-text text-lg max-w-md mb-6 md:mb-0">
              In today’s rapidly evolving world, innovation and adaptation are
              key. Leveraging new trends and tools helps businesses stay ahead
              and thrive in changing environments.
            </p>
            <button className="bg-green text-white font-semibold px-8 py-3 rounded-lg shadow-lg pointer-events-auto hover:bg-light-green transition">
              See What's Broken
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
