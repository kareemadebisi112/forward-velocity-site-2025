import React from "react";
import CurvedCard from "./mini/CurvedCard";

const testimonials = [
  {
    text: '"They just made it easy. Clear updates, no black box stuff, and everything actually worked when they said it would. The time saved alone paid for the project twice over."',
    author: "Wellness Startup",
    role: "Marketing Lead",
    avatar: "/assets/vector_1.png",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="w-full flex flex-col items-center py-0 px-4 md:px-0 bg-black">
    <div className="max-w-7xl">
      <CurvedCard color="#E7EBE7" invert>
        <div className="w-full mx-auto flex flex-col items-center md:justify-center md:flex-row gap-8 p-0 md:p-8">
          {/* Left: Headline & Navigation */}
          <div className="flex-1 flex flex-col h-full justify-between p-10">
            <div>
              <div className=" text-black text-md mt-4">
                5.0 Based on 256 Reviews
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-red-500 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <h2 className="text-black text-4xl md:text-5xl font-bold mb-8">
                Here's what our clients say after we step in.
              </h2>
            </div>
            <div className="flex gap-4 mt-8">
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                <div className="text-black grid items-center p-0 text-xl">
                  ←
                </div>
              </button>
              <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-md">
                <div className="text-white grid items-center p-0 text-xl">
                  <div>→</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right: Testimonial Card */}
          <div className="flex-1 flex flex-col w-11/12 mb-4 md:mb-0 justify-between p-10 bg-white rounded-3xl shadow-md">
            <div className="mb-8">
              <p className="text-gray-600 text-xl italic">
                {testimonials[0].text}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[0].avatar}
                alt={testimonials[0].author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-black text-md">
                  {testimonials[0].author}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonials[0].role}
                </div>
              </div>
              <div className="flex gap-1 ml-auto">
                {Array.from({ length: testimonials[0].rating }).map((_, i) => (
                  <span key={i} className="text-red-500 text-lg">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CurvedCard>
    </div>
  </section>
);

export default TestimonialsSection;
