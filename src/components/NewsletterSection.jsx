import React from "react";
import Button from "./mini/Button";
import Blob3D from "./Blob3D";

const NewsletterSection = () => (
  <section className="w-full py-10 px-4 md:px-0 flex items-center justify-center min-h-[400px]">
    <div className="max-w-7xl w-full md:px-0 px-10 mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <h1 className="text-white font-bold text-5xl md:text-6xl mb-6 leading-tight">
          Let's find out what's holding you back.
        </h1>
        <p className="text-gray-text text-base md:text-lg mb-8 max-w-xl">
          Run a free tech check. We'll scan your systems, show you what's
          slowing you down, and map out exactly how to fix it. No pressure. Just
          clarity. Most fixes take under 2 weeks, and most projects start within
          a few days of your tech check. You'll always know the cost before we
          start.
        </p>
        <div className="flex flex-col sm:flex-row w-full gap-4">
          <Button>See What's Broken</Button>
          <Button>Have questions? Let's talk.</Button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center md:pr-8">
        <Blob3D size={500} />
      </div>
    </div>
  </section>
);

export default NewsletterSection;
