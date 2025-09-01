import React from "react";
import CurvedCard from "./mini/CurvedCard";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Run the Check",
    desc: "Fill out a quick form. We scan your systems and find what's broken.",
  },
  {
    title: "Get Your Fix Plan",
    desc: "See what's costing you, exactly how we'll fix it, timeline and pricing included.",
  },
  {
    title: "We Fix It",
    desc: "Clear updates, zero surprises. You stay focused, we handle the tech.",
  },
];

const StepsSection = () => (
  <section className="w-full flex flex-col items-center pt-20 px-4 md:px-8">
    <div className="max-w-[1440px] bg-white rounded-[2rem] shadow-xl flex flex-col items-center p-8 md:p-14" style={{ borderRadius: "2rem" }}>
      <h2 className="text-black text-4xl md:text-5xl w-96 font-bold text-center mb-16 font-archivo">
        Getting started is easy.
      </h2>
      {/* <div className="text-black text-base text-center mb-10">
        We'll walk you through it.
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {steps.map((step, idx) => (
          <div key={idx}>
            <CurvedCard color="#E7EBE7">
              <div className="relativerounded-2xl p-8 flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-black font-medium text-lg mb-4">
                    {step.title}
                  </div>
                  <div className="text-black text-base font-normal">
                    {step.desc}
                  </div>
                </div>
                {/* Step number with motion */}
                <motion.div
                  className="absolute bottom-0 right-0 font-bold text-black text-6xl px-6 pb-2"
                  initial={{ opacity: 0, y: 40, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.2, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {idx + 1}
                </motion.div>
              </div>
            </CurvedCard>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
