import React from "react";
import { motion } from "motion/react";

const cards = [
  {
    title: "Custom Solutions",
    desc: "Ready to build something new? We create software that automates your processes and grows with you.",
    icon: "/assets/vector_4.svg",
  },
  {
    title: "Systems & Integration",
    desc: "Your tools talk to each other. No more double work. Everything syncs.",
    icon: "/assets/vector_5.svg",
  },
  {
    title: "Speed & Performance",
    desc: "Your site loads fast. Customers stay. Most fixes done in under 10 days.",
    icon: "/assets/vector_6.svg",
  },
  {
    title: "Cleanup & Fixes",
    desc: "Broken features, mystery bugs, half-built tools—we debug and get you back on track.",
    icon: "/assets/vector_7.svg",
  },
];

const FixSection = () => (
  <section className="relative w-full py-20 px-4 md:px-6">
    {/* Glowing background */}
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {/* Top right green glow */}
      <div
        className="absolute top-0 right-0 w-2/5 h-2/5"
        style={{
          background: "radial-gradient(circle, #15965366 0%, transparent 70%)",
          filter: "blur(90px)",
          opacity: 0.9,
        }}
      />
      {/* Bottom left green glow */}
      <div
        className="absolute bottom-0 left-0 w-2/5 h-2/5"
        style={{
          background: "radial-gradient(circle, #6FD28766 0%, transparent 70%)",
          filter: "blur(90px)",
          opacity: 0.9,
        }}
      />
    </div>

    <div className="relative z-10 flex flex-col justify-center items-center">
      {/* Cards grid */}
      <div className="max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 w-full">
          <div className="col-span-6 md:col-span-3">
            {/* A/B Test: We fix what's slowing you down./ We fix what's costing you customers. */}
            <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
              We fix what's
              <br />
              costing you <span className="text-gray-text">customers.</span>
            </h2>
            {/* Subtext */}
            <div className="max-w-xl text-gray-text text-base mb-8">
              From speed to systems (and even new builds down the line), we
              handle your tech headaches, so you don't have to.
            </div>
          </div>

          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`${
                idx === 0 ? "md:col-span-3" : "md:col-span-2"
              } col-span-6 bg-black p-5 rounded-lg`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-5 flex-col">
                  <img
                    src={card.icon}
                    alt="icon"
                    className="w-20 h-20"
                  />
                  {card.title}
                </div>
              </div>
              {card.desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FixSection;
