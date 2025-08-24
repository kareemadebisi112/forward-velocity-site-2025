import React from "react";
import RotatingSolar from "./RotatingSolar";
import Header from "./Header";
import Button from "./mini/Button";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 right-0 w-full h-full">
        <RotatingSolar />
      </div>

      {/* Overlay for transparency */}
      <div className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 h-full w-full pointer-events-none">
        {/* Top Navigation */}
        <Header />

        {/* Hero Content */}
        <main className="flex flex-col w-full h-full justify-around px-12">
          <div className=" self-start">
            <h1 className="bg-gradient-to-r from-white to-gray-text bg-clip-text text-transparent text-5xl md:text-7xl font-bold leading-tight mb-6">
              Your systems are
              <br />
              slowing you down.
              <br />
              Let's fix that.
            </h1>
          </div>

          <div className="flex self-end flex-col items-start gap-8">
            <p className="text-xl max-w-lg mb-6 md:mb-0 bg-gradient-to-r from-white to-gray-text bg-clip-text text-transparent">
              In today’s rapidly evolving world, innovation and adaptation are
              key. Leveraging new trends and tools helps businesses stay ahead
              and thrive in changing environments.
            </p>

            <Button glow className="px-10 py-5 text-lg">See What's Broken</Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
