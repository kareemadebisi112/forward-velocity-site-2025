import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const hiddenCost = [
  "Slow sites lose 7% of customers for every extra second of load time",
  "Manual workarounds waste 2-3 hours per team member, every week",
  "Poor integrations mean you're paying for tools that aren't even syncing",
  "Tech debt compounds. A $2k fix now becomes a $10K rebuild later",
];

const roi = [
  "Faster sites increase conversion and retention",
  "Automated processes save hours every week",
  "Integrated tools reduce wasted spend",
  "Fixing tech debt early saves thousands later",
];

const cards = [
  {
    title: "The Hidden Cost",
    content: hiddenCost,
  },
  {
    title: "The Real ROI of Fixing This",
    content: roi,
  },
];

const upIcon = () => (
  <motion.svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 8"
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
    />
  </motion.svg>
);

const downIcon = () => (
  <motion.svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 8"
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
    />
  </motion.svg>
);

const CostSection = () => {
  const [open, setOpen] = useState(cards[0].title);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      className="relative w-full overflow-hidden flex justify-center items-stretch pt-10 px-4 md:px-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative max-w-[1440px] flex flex-col lg:flex-row">
        {/* Left: Headline, arrows, glow */}
        <motion.div
          className="flex-1 flex flex-col min-h-[50rem] px-2 md:px-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Red torch glow */}
          <motion.div
            className="absolute rotate-[20deg] bg-red-600 -left-60 top-50 w-[900px] h-[200px] pointer-events-none z-10"
            style={{
              filter: "blur(50px)",
              opacity: 0.7,
            }}
            animate={{
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.05, 1],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          {/* Large arrow image, far left, receives red glow */}
          <motion.img
            src="/assets/big_arrow.svg"
            alt="Big Arrow"
            className="absolute h-[600px] w-[300px] left-6 top-0 z-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 50,
            }}
          />
          {/* Small arrow image, to right of big arrow, receives red glow */}
          <motion.img
            src="/assets/big_arrow.svg"
            alt="Small Arrow"
            className="absolute h-[300px] w-[150px] object-cover left-60 top-0 z-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              type: "spring",
              stiffness: 50,
            }}
          />

          <motion.div
            className="z-20 ms-18 mt-50 pt-0"
            variants={containerVariants}
          >
            <motion.h2
              className="text-white text-6xl w-full md:w-92 md:text-5xl font-medium mb-4"
              variants={itemVariants}
            >
              It's costing you more than you think.
            </motion.h2>
            <motion.div
              className="text-gray-text text-base max-w-md"
              variants={itemVariants}
            >
              Founders come to us with slow tools, manual workarounds, and tech
              that just can't keep up. The kicker? It's bleeding more time and
              money than they realized.
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: Toggleable cards */}
        <motion.div
          className="flex-1 flex flex-col gap-1 justify-center items-center px-2 md:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className={`rounded-xl w-full md:w-2xl shadow-lg p-10 transition-all bg-dark-gray ${
                open === card.title ? "" : "opacity-60"
              }`}
              onClick={() => setOpen(open === card.title ? null : card.title)}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.button
                className="w-full flex justify-between items-center text-white text-2xl font-bold mb-6"
                onClick={() => setOpen(open === card.title ? null : card.title)}
                whileHover={{ color: "#6FD287" }}
              >
                <span>{card.title}</span>
                {open === card.title ? downIcon() : upIcon()}
              </motion.button>

              <AnimatePresence>
                {open === card.title && (
                  <motion.ul
                    className="flex flex-col max-w-xl gap-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {card.content.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-4 text-gray-text text-lg"
                        variants={listItemVariants}
                        custom={idx}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, x: -10 }}
                        transition={{
                          delay: idx * 0.1,
                          duration: 0.2,
                        }}
                      >
                        <motion.img
                          src="/assets/vector_8.svg"
                          alt="dot"
                          className="w-7 h-7"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.1 + idx * 0.1,
                          }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CostSection;
