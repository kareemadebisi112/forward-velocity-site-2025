import React from "react";
import { Link } from "react-router-dom";
import { OptimizedRotatingSolar } from "./Optimized3D";
import Header from "./Header";
import Button from "./mini/Button";
import SecondaryButton from "./mini/SecondaryButton";
import { motion } from "framer-motion";
import { useReducedMotion, getOptimizedAnimationProps } from "../hooks/useReducedMotion";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const heroContentProps = getOptimizedAnimationProps(shouldReduceMotion, {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  });

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 right-0 w-full h-full z-0">
        <OptimizedRotatingSolar />
      </div>

      {/* Overlay for transparency */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" />

      {/* Top Navigation - ensure it's above overlays */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {/* Hero Content */}
      <motion.div
        className="absolute inset-0 h-full w-full z-10 flex flex-col justify-center items-center"
        {...heroContentProps}
      >
        <main className="flex flex-col w-full max-w-[1440px] h-full justify-center px-6 md:px-12 lg:px-16">
          <div className="self-start">
            <h1 className="text-white font-bold leading-tight mb-6 font-archivo drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] !text-5xl sm:!text-6xl md:!text-7xl lg:!text-8xl md:pl-6 pl-0">
              Systems
              <br />
              slowing down?
              <br />
              Let's fix that.
            </h1>
          </div>

          <div className="flex self-end flex-col items-start gap-8">
            <p className="text-xl max-w-lg mb-6 md:mb-0 text-white">
              We fix what's broken so you can grow. Expert web development, performance optimization, and system integrations.
            </p>

            <div className="flex gap-4">
              <div>
                <Link to="/start">
                  <Button glow className="px-10 py-5 text-lg">
                    See What's Broken
                  </Button>
                </Link>
              </div>
              <div>
                <Link to="/contact">
                  <SecondaryButton className="px-10 py-5 text-lg">
                    Learn More
                  </SecondaryButton>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default Hero;
