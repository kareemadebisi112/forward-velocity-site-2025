import React from "react";
import Button from "./mini/Button";

const NewsletterSection = () => (
  <section className="w-full flex flex-col items-center py-0 px-4 md:px-0 bg-black">
    <div className="max-w-7xl">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-white font-bold text-5xl md:text-6xl mb-6 leading-tight">
            Let's find out what's
            <br />
            holding you back.
          </h1>
          <p className="text-gray-text text-base md:text-lg mb-8 max-w-xl">
            Run a free tech check. We'll scan your systems, show you what's
            slowing you down, and map out exactly how to fix it. No pressure.
            Just clarity. Most fixes take under 2 weeks, and most projects start
            within a few days of your tech check. You'll always know the cost
            before we start.
          </p>
          <div className="flex gap-4">
            <Button>See What's Broken</Button>
            <Button>Have questions? Let's talk.</Button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center mt-12 md:mt-0">
          <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-br from-green-600 via-green-400 to-black flex items-center justify-center shadow-2xl relative">
            <div className="absolute left-1/3 top-1/3 w-12 h-24 rounded-full bg-white opacity-80 blur-xl" />
            <div className="absolute left-2/3 top-1/3 w-12 h-24 rounded-full bg-white opacity-80 blur-xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewsletterSection;
