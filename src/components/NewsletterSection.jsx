import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "./mini/Button";
import SecondaryButton from "./mini/SecondaryButton";
import { OptimizedBlob3D } from "./Optimized3D";
import { useReducedMotion, getOptimizedAnimationProps } from "../hooks/useReducedMotion";

const NewsletterSection = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const rightSideProps = getOptimizedAnimationProps(shouldReduceMotion, {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.7,
      delay: 0.3,
      type: "spring",
      stiffness: 100,
    },
    viewport: { once: true, amount: 0.3 }
  });

  return (
    <section className="w-full py-10 px-4 md:px-0 flex items-center justify-center min-h-[400px]">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-white font-bold text-5xl md:text-6xl mb-6 leading-tight">
            Stop losing customers to slow systems
          </h1>
          <p className="text-gray-text text-base md:text-lg mb-8 max-w-xl">
            Most fixes take under 4 weeks. Most projects start within days of your tech check.
          </p>
          <div className="flex flex-col sm:flex-row w-full gap-4">
            <div className="hover:scale-105 transition-transform duration-300">
              <Link to="/start">
                <Button>See What's Broken</Button>
              </Link>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <SecondaryButton>Have questions? Let's talk.</SecondaryButton>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          className="flex-1 flex items-center justify-center md:pr-8"
          {...rightSideProps}
        >
          <OptimizedBlob3D />
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
