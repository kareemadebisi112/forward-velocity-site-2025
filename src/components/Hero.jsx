import React from "react";
import RotatingSolar from "./RotatingSolar";
import Header from "./Header";
import Button from "./mini/Button";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 right-0 w-full h-full z-0">
        <RotatingSolar />
      </div>

      {/* Overlay for transparency */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" />

      {/* Top Navigation - ensure it's above overlays */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 h-full w-full z-10 flex flex-col max-w-[1440px] justify-self-center justify-evenly">
        <main className="flex flex-col w-full h-full justify-center">
          <motion.div
            className="self-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Your systems are
              <br />
              slowing you down.
              <br />
              Let's fix that.
            </motion.h1>
          </motion.div>

          <motion.div
            className="flex self-end flex-col items-start gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <motion.p
              className="text-xl max-w-lg mb-6 md:mb-0 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              In today's rapidly evolving world, innovation and adaptation are
              key. Leveraging new trends and tools helps businesses stay ahead
              and thrive in changing environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.4, delay: 0 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Button glow className="px-10 py-5 text-lg">
                See What's Broken
              </Button>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
