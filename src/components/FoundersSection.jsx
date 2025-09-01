import React from "react";
import CurvedCard from "./mini/CurvedCard";

const issues = [
  {
    icon: "/assets/vector_1.svg",
    text: "Pages are loading slowly, and customers are bouncing",
  },
  {
    icon: "/assets/vector_2.svg",
    text: "Nothing connects, and you're doing everything twice",
  },
  {
    icon: "/assets/vector_3.svg",
    text: "You're scaling, but your systems are breaking",
  },
];

const FoundersSection = () => (
  <section className="w-full flex bg-transparent flex-col items-center py-20 px-4 md:px-0">
    {/* Headline */}
    <div>
      <h1
        className="text-white text-5xl md:text-7xl font-bold text-center mb-6"
      >
        Built for founders
        <br />
        who need systems that work
      </h1>
    </div>

    {/* Supporting text */}
    <div className="max-w-2xl text-center text-gray-text text-base mb-2">
      You shouldn't be debugging when you could be closing deals. 
      Every minute your team spends on workarounds is a minute not spent growing your business.
    </div>
    {/* <div className="max-w-2xl text-center text-gray-text text-base mb-8">
      We work with startups, e-commerce shops, B2B platforms, and growing
      service businesses — anyone feeling the friction of tech that can't keep
      up.
    </div> */}

    {/* Card */}
    <div
      className="w-full max-w-2xl mt-10 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl"
      style={{ borderRadius: "2rem 2rem 2rem 4rem" }}
    >
      <CurvedCard>
        <div className="flex flex-col lg:py-14 py-4 px-6 lg:px-20 md:flex-row gap-8 mb-12 md:mb-0 md:gap-0">
          {/* Left */}
          <div className="flex-1 flex flex-col justify-start">
            <h2 className="text-black font-medium lg:text-6xl md:text-5xl text-4xl mb-4">
              The tech's not working and you can feel it.
            </h2>
            {/* <div className="text-black text-sm mt-2">
              The problems keeping our clients up at night:
            </div> */}
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col justify-between gap-3">
            {issues.map((issue, idx) => (
              <div
                key={idx}
                className={`${
                  idx !== 0 ? "border-t pt-10 border-gray-text/20" : "pb-10"
                } flex items-center gap-4 flex-wrap min-w-0`}
              >
                <div className="flex-shrink-0 w-[80px] h-[80px] p-4 rounded-lg bg-fade-gray">
                  <img
                    src={issue.icon}
                    alt="issue icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0 text-black text-lg font-normal break-words whitespace-normal px-2 py-1 md:text-2xl">
                  {issue.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CurvedCard>
    </div>
  </section>
);

export default FoundersSection;
