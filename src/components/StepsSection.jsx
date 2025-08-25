import React from "react";
import CurvedCard from "./mini/CurvedCard";

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
    <div
      className="max-w-[1440px] bg-white rounded-[2rem] shadow-xl flex flex-col items-center p-8 md:p-14"
      style={{ borderRadius: "2rem" }}
    >
      <h2 className="text-black text-4xl md:text-5xl w-96 font-bold text-center mb-2">
        Getting started is easy.
      </h2>
      <div className="text-gray-text text-base text-center mb-10">
        We'll walk you through it.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {steps.map((step, idx) => (
          <CurvedCard color="#E7EBE7" key={idx}>
            <div className="relativerounded-2xl p-8 flex flex-col justify-between min-h-[250px]">
              <div>
                <div className="text-black font-medium text-lg mb-4">
                  {step.title}
                </div>
                <div className="text-gray-text-fade text-base font-normal">
                  {step.desc}
                </div>
              </div>
              {/* Step number */}
              <div className="absolute bottom-0 right-0 font-clash text-black text-6xl font-bold px-6 pb-2">
                {idx + 1}
              </div>
            </div>
          </CurvedCard>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
