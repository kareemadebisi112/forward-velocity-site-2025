import React from "react";
import TextGradient from "./mini/TextGradient";
import CurvedCard from "./mini/CurvedCard";
import { motion } from "motion/react";

const issues = [
  {
    icon: "/assets/vector_1.svg",
    text: "Pages are loading slowly, and customers are bouncing",
  },
  {
    icon: "/assets/vector_2.svg",
    text: "Your tools don't connect, and you're doing everything twice",
  },
  {
    icon: "/assets/vector_3.svg",
    text: "You're growing fast, but your systems are lagging behind",
  },
];

const FoundersSection = () => (
  <section className="w-full flex bg-transparent flex-col items-center py-20 px-4 md:px-0">
    {/* Headline */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <TextGradient
        as="h1"
        from="white"
        to="dark-gray"
        direction="to-r"
        className="text-5xl md:text-7xl font-bold text-center mb-6"
      >
        Built for founders
        <br />
        and small teams
      </TextGradient>
    </motion.div>

    {/* Supporting text */}
    <motion.div
      className="max-w-2xl text-center text-gray-text text-base mb-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      You're not trying to build a spaceship. You just want your tools to work,
      your site to load, and your team to stop wasting hours fighting bad
      systems.
    </motion.div>
    <motion.div
      className="max-w-2xl text-center text-gray-text text-base mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      We work with startups, e-commerce shops, B2B platforms, and growing
      service businesses — anyone feeling the friction of tech that can't keep
      up.
    </motion.div>

    {/* Card */}
    <motion.div
      className="w-full max-w-2xl mt-10 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl"
      style={{ borderRadius: "2rem 2rem 2rem 4rem" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <CurvedCard>
        <div className="flex flex-col lg:py-14 py-4 px-6 lg:px-20 md:flex-row gap-8 mb-9 md:mb-0 md:gap-0">
          {/* Left */}
          <motion.div
            className="flex-1 flex flex-col justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-black font-medium lg:text-6xl md:text-5xl text-4xl mb-4">
              The tech's not working - and you can feel it.
            </h2>
            <div className="text-dark-gray text-sm mt-2">
              These are the kinds of problems our clients come to us with:
            </div>
          </motion.div>

          {/* Right */}
          <div className="flex-1 flex flex-col justify-between gap-3">
            {issues.map((issue, idx) => (
              <motion.div
                key={idx}
                className={`$${
                  idx !== 0 ? "border-t pt-10 border-gray-text/20" : "pb-10"
                } flex items-center gap-4 flex-wrap min-w-0`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="flex-shrink-0 w-[70px] h-[50px] p-4 rounded-lg bg-fade-gray"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 0.6 + idx * 0.2,
                  }}
                >
                  <motion.img
                    src={issue.icon}
                    alt="issue icon"
                    className="w-full h-full object-contain"
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + idx * 0.2 }}
                  />
                </motion.div>
                <motion.div
                  className="flex-1 min-w-0 text-black text-lg font-normal break-words whitespace-normal px-2 py-1 md:text-2xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + idx * 0.2 }}
                >
                  {issue.text}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </CurvedCard>
    </motion.div>
  </section>
);

export default FoundersSection;
