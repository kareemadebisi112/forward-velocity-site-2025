import React from "react";
import { motion } from "motion/react";

const cards = [
  {
    title: "Custom Solutions",
    desc: "That Scale Ready to build something new? Once your foundation is solid, we create custom software that automates your processes, serves your customers better, and grows with your business. From internal tools to customer-facing platforms — built to your exact needs.",
    icon: "/assets/vector_4.svg",
  },
  {
    title: "Systems & Integration",
    desc: "Your tools should talk to each other. We connect the dots between your CRM, website, forms, and internal systems — no more double work. Not technical? We'll walk you through everything in plain English.",
    icon: "/assets/vector_5.svg",
  },
  {
    title: "Speed & Performance",
    desc: "Your site shouldn't make people wait. We optimize load times, fix clunky pages, and speed up the tech behind your customer experience. Most performance fixes take less than 10 days.",
    icon: "/assets/vector_6.svg",
  },
  {
    title: "Cleanup & Fixes",
    desc: "Old dev work? We clean it up. Broken features, half-built tools, mysterious bugs — you bring it in, debug, and get it back on track. You'll get clear scopes and pricing before anything starts — and if you want to keep going, we're here for long-term support too.",
    icon: "/assets/vector_7.svg",
  },
];

const FixSection = () => (
  <section className="relative w-full py-20 px-4 md:px-6">
    {/* Glowing background */}
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {/* Top right green glow */}
      <motion.div
        className="absolute animate-cloudglow top-0 right-0 w-2/5 h-2/5"
        style={{
          background: "radial-gradient(circle, #15965366 0%, transparent 70%)",
          filter: "blur(90px)",
          opacity: 0.9,
        }}
        animate={{
          scale: [1, 0.9, 1],
          opacity: [0.9, 0.7, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      {/* Bottom left green glow */}
      <motion.div
        className="absolute animate-cloudglow bottom-0 left-0 w-2/5 h-2/5"
        style={{
          background: "radial-gradient(circle, #6FD28766 0%, transparent 70%)",
          filter: "blur(90px)",
          opacity: 0.9,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.9, 0.7, 0.9],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>

    <div className="relative z-10 flex flex-col justify-center items-center">
      {/* Cards grid */}
      <motion.div
        className="max-w-7xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 w-full">
          <motion.div
            className="col-span-6 md:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="text-white text-4xl md:text-6xl font-bold mb-4"
            >
              We fix what's
              <br />
              slowing you <span className="text-gray-text">down.</span>
            </h2>
            {/* Subtext */}
            <motion.div
              className="max-w-xl text-gray-text text-base mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              From speed to systems (and even new builds down the line), we
              handle your tech headaches, so you don't have to.
            </motion.div>
          </motion.div>

          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className={`${
                idx === 0 ? "md:col-span-3" : "md:col-span-2"
              } col-span-6 bg-black-dark p-5 rounded-lg`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: 0 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.4, delay: 0 }
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-5 flex-col">
                  <motion.img
                    src={card.icon}
                    alt="icon"
                    className="w-14 h-14"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.3 + idx * 0.15,
                    }}
                  />
                  <motion.span
                    className="text-white text-xl font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + idx * 0.15 }}
                  >
                    {card.title}
                  </motion.span>
                </div>
              </div>
              <motion.div
                className="text-gray-text text-base font-normal"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + idx * 0.15 }}
              >
                {card.desc}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default FixSection;
