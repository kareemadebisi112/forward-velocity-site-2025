import React from "react";
import { motion } from "motion/react";
import Button from "./mini/Button";
import Blob3D from "./Blob3D";

const NewsletterSection = () => (
  <section className="w-full py-10 px-4 md:px-0 flex items-center justify-center min-h-[400px]">
    <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Left Side */}
      <motion.div
        className="flex-1 flex flex-col items-start justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="text-white font-bold text-5xl md:text-6xl mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Let's find out what's holding you back.
        </motion.h1>
        <motion.p
          className="text-gray-text text-base md:text-lg mb-8 max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Run a free tech check. We'll scan your systems, show you what's
          slowing you down, and map out exactly how to fix it. No pressure. Just
          clarity. Most fixes take under 2 weeks, and most projects start within
          a few days of your tech check. You'll always know the cost before we
          start.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row w-full gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button>See What's Broken</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button>Have questions? Let's talk.</Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="flex-1 flex items-center justify-center md:pr-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Blob3D />
      </motion.div>
    </div>
  </section>
);

export default NewsletterSection;
