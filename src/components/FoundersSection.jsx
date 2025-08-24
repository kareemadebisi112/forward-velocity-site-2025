import React from "react";
import TextGradient from "./mini/TextGradient";

const issues = [
  {
    icon: "/assets/vector_1.svg",
    text: "Pages are loading slowly, and customers are bouncing",
  },
  {
    icon: "/assets/vector_2.svg",
    text: "Your tools don’t connect, and you're doing everything twice",
  },
  {
    icon: "/assets/vector_3.svg",
    text: "You’re growing fast, but your systems are lagging behind",
  },
];

const FoundersSection = () => (
  <section className="w-full flex flex-col items-center py-20 px-4 md:px-0">
    {/* Headline */}
    <TextGradient
      as="h1"
      from="white"
      to="gray-text"
      direction="to-r"
      className="text-5xl md:text-7xl font-bold text-center mb-6"
    >
      Built for founders
      <br />
      and small teams
    </TextGradient>
    {/* Supporting text */}
    <div className="max-w-2xl text-center text-gray-text text-base mb-2">
      You’re not trying to build a spaceship. You just want your tools to work,
      your site to load, and your team to stop wasting hours fighting bad
      systems.
    </div>
    <div className="max-w-2xl text-center text-gray-text text-base mb-8">
      We work with startups, e-commerce shops, B2B platforms, and growing
      service businesses — anyone feeling the friction of tech that can’t keep
      up.
    </div>
    {/* Card */}
    <div
      className="w-full max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl bg-white rounded-[2rem] shadow-xl flex flex-col md:flex-row p-8 md:p-14 gap-8 md:gap-0"
      style={{ borderRadius: "2rem 2rem 2rem 4rem" }}
    >
      {/* Left */}
      <div className="flex-1 flex flex-col justify-start">
        <h2 className="text-black font-medium text-6xl mb-4">
          The tech's not
          <br />
          working - and
          <br />
          you can feel it.
        </h2>
        <div className="text-gray-text text-sm mt-2">
          These are the kinds of problems our clients come to us with:
        </div>
      </div>
      {/* Right */}
      <div className="flex-1 flex flex-col justify-between gap-3">
        {issues.map((issue, idx) => (
          <div
            key={idx}
            className={`${
              idx !== 0 ? "border-t py-7 border-gray-text/20" : "pb-7"
            } flex w-100 h-full items-center gap-8`}
          >
            <div className="flex w-[70px] h-[50px] p-4 rounded-lg bg-fade-gray">
              <img
                src={issue.icon}
                alt="issue icon"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-black text-md font-normal">{issue.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FoundersSection;
