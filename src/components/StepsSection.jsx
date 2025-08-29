import React from "react";
import CurvedCard from "./mini/CurvedCard";
import { motion } from "framer-motion";

const steps = [
  {
    title: "STEP 1",
    desc: "Run the Check Fill out a short form. We scan your site, systems, and setup to find what's holding you back.",
  },
  {
    title: "STEP 2",
    desc: "Get the Fix Plan. We'll show you what's broken, what it's costing you, and exactly how we'll fix it, including timeline and pricing.",
  },
  {
    title: "STEP 3",
    desc: "We fix it fast, and keep you in the loop. Clear updates, live progress, and zero friction. You'll always know what's happening and why. You stay focused, we'll handle the rest.",
  },
];

const StepsSection = () => (
  <section className="w-full flex flex-col items-center pt-20 px-4 md:px-8">
    <motion.div
      className="max-w-[1440px] bg-white rounded-[2rem] shadow-xl flex flex-col items-center p-8 md:p-14"
      style={{ borderRadius: "2rem" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      whileHover={{
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.4, delay: 0 }
      }}
    >
      <motion.h2
        className="text-black text-4xl md:text-5xl w-96 font-bold text-center mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Getting started is easy.
      </motion.h2>
      <motion.div
        className="text-gray-text text-base text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        We'll walk you through it.
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ y: -10, transition: { duration: 0.4, delay: 0 } }}
          >
            <CurvedCard color="#E7EBE7">
              <div className="relativerounded-2xl p-8 flex flex-col justify-between min-h-[250px]">
                <div>
                  <motion.div
                    className="text-black font-medium text-lg mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + idx * 0.2 }}
                  >
                    {step.title}
                  </motion.div>
                  <motion.div
                    className="text-gray-text-fade text-base font-normal"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + idx * 0.2 }}
                  >
                    {step.desc}
                  </motion.div>
                </div>
                {/* Step number */}
                <motion.div
                  className="absolute bottom-0 right-0 font-clash text-black text-6xl font-bold px-6 pb-2"
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    delay: 0.7 + idx * 0.2,
                  }}
                >
                  {idx + 1}
                </motion.div>
              </div>
            </CurvedCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default StepsSection;
