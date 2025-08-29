import React, { useState } from "react";
import CurvedCard from "./mini/CurvedCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";

const testimonials = [
  {
    text: '"They just made it easy. Clear updates, no black box stuff, and everything actually worked when they said it would. The time saved alone paid for the project twice over."',
    author: "Wellness Startup",
    role: "Marketing Lead",
    avatar: "/assets/vector_1.svg",
    rating: 5,
  },
  {
    text: '"Forward Velocity helped us launch faster than we thought possible. Their team is sharp, communicative, and genuinely cares about our success."',
    author: "Tech Founder",
    role: "CEO",
    avatar: "/assets/vector_2.svg",
    rating: 5,
  },
  {
    text: '"We went from chaos to clarity. The process was smooth, and the results exceeded our expectations. Highly recommended!"',
    author: "E-commerce Brand",
    role: "Operations Manager",
    avatar: "/assets/vector_3.svg",
    rating: 5,
  },
  {
    text: '"The best agency experience I have ever had. Fast, friendly, and the product was flawless."',
    author: "SaaS Startup",
    role: "CTO",
    avatar: "/assets/vector_4.svg",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setAnimating(false);
    }, 350);
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setAnimating(false);
    }, 350);
  };

  return (
    <section className="w-full flex flex-col items-center py-0 px-4 md:px-0">
      <motion.div
        className="max-w-7xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <CurvedCard color="#E7EBE7" invert>
          <div className="w-full mx-auto flex flex-col items-center md:justify-center md:flex-row gap-8 p-0 md:p-8">
            {/* Left: Headline & Navigation */}
            <motion.div
              className="flex-1 flex flex-col h-full justify-between p-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.div
                  className="text-black text-md mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  5.0 Based on 256 Reviews
                </motion.div>
                <motion.div
                  className="flex gap-1 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-red-500 text-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <motion.h2
                  className="text-black text-4xl md:text-5xl font-bold mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Here's what our clients say after we step in.
                </motion.h2>
              </div>
              <motion.div
                className="flex gap-4 mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#e6ffe6", transition: { duration: 0.4, delay: 0 } }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md transition-all duration-300`}
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  disabled={animating}
                >
                  <FaArrowLeft className="text-black text-xl" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#10b981", transition: { duration: 0.4, delay: 0 } }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-md transition-all duration-300`}
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  disabled={animating}
                >
                  <FaArrowRight className="text-white text-xl" />
                </motion.button>
              </motion.div>
              <motion.div
                className="flex gap-2 mt-6 justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                {testimonials.map((_, idx) => (
                  <motion.button
                    key={idx}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1 + idx * 0.1 }}
                    whileHover={{ scale: 1.2, transition: { duration: 0.4, delay: 0 } }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                      current === idx
                        ? "bg-green-500 border-green-500 scale-125"
                        : "bg-gray-300 border-gray-300"
                    }`}
                    onClick={() => !animating && setCurrent(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Testimonial Card */}
            <div
              className={`flex-1 flex flex-col w-11/12 mb-4 md:mb-0 justify-between p-10 bg-white rounded-3xl shadow-md relative overflow-hidden`}
            >
              <div
                className={`mb-8 transition-all duration-500 ease-in-out ${
                  animating
                    ? "opacity-0 scale-95 blur-sm"
                    : "opacity-100 scale-100"
                }`}
                key={current}
              >
                <p className="text-gray-600 text-xl italic">
                  {testimonials[current].text}
                </p>
              </div>
              <div
                className={`flex items-center gap-4 transition-all duration-500 ease-in-out ${
                  animating
                    ? "opacity-0 scale-95 blur-sm"
                    : "opacity-100 scale-100"
                }`}
              >
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-black text-md">
                    {testimonials[current].author}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[current].role}
                  </div>
                </div>
                <div className="flex gap-1 ml-auto">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <span key={i} className="text-red-500 text-lg">
                        ★
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </CurvedCard>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
