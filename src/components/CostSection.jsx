import React, { useState } from "react";

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
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 8"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
    />
  </svg>
);

const downIcon = () => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 8"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
    />
  </svg>
);

const CostSection = () => {
  const [open, setOpen] = useState(cards[0].title);

  return (

    <section className="relative w-full overflow-hidden flex justify-center items-stretch pt-10 px-4 md:px-0">
      <div className="relative max-w-[1440px] flex flex-col lg:flex-row">
        {/* Left: Headline, arrows, glow */}
        <div className="flex-1 flex flex-col min-h-[50rem] px-2 md:px-12">
          {/* Red torch glow */}
          <div
            className="absolute rotate-[20deg] bg-red-600 -left-60 top-50 w-[900px] h-[200px] pointer-events-none z-10"
            style={{
              filter: "blur(100px)",
              opacity: 0.7,
            }}
          />
          {/* Large arrow image, far left, receives red glow */}
          <img
            src="/assets/big_arrow.svg"
            alt="Big Arrow"
            className="absolute h-[600px] w-[300px] left-6 top-0 z-0"
          />
          {/* Small arrow image, to right of big arrow, receives red glow */}
          <img
            src="/assets/big_arrow.svg"
            alt="Small Arrow"
            className="absolute h-[300px] w-[150px] object-cover left-60 top-0 z-0"
          />

          <div className="z-20 ms-18 mt-50 pt-0">
            <h2 className="text-white text-6xl w-full md:w-92 md:text-5xl font-medium mb-4">
              It's costing you more than you think.
            </h2>
            <div className="text-gray-text text-base max-w-md">
              Founders come to us with slow tools, manual workarounds, and tech
              that just can't keep up. The kicker? It's bleeding more time and
              money than they realized.
            </div>
          </div>
        </div>

        {/* Right: Toggleable cards */}
        <div className="flex-1 flex flex-col gap-1 justify-center items-center px-2 md:px-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-xl w-full max-w-2xl shadow-lg p-10 transition-all bg-dark-gray ${
                open === card.title ? "" : "opacity-60"
              }`}
              onClick={() => setOpen(open === card.title ? null : card.title)}
            >
              <button
                className="w-full flex justify-between items-center text-white text-2xl font-bold mb-6"
                onClick={() => setOpen(open === card.title ? null : card.title)}
              >
                <span>{card.title}</span>
                {open === card.title ? downIcon() : upIcon()}
              </button>

              {open === card.title && (
                <ul className="flex flex-col max-w-xl gap-4">
                  {card.content.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-4 text-gray-text text-lg"
                    >
                      <img
                        src="/assets/vector_8.svg"
                        alt="dot"
                        className="w-7 h-7"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default CostSection;
