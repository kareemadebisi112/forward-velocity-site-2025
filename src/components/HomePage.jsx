import Hero from "./Hero";
import FoundersSection from "./FoundersSection";
import FixSection from "./FixSection";
import TechnologiesSection from "./TechnologiesSection";
import StepsSection from "./StepsSection";
import CostSection from "./CostSection";
import TestimonialsSection from "./TestimonialsSection";
import NewsletterSection from "./NewsletterSection";
import FooterSection from "./FooterSection";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useReducedMotion, getOptimizedAnimationProps } from "../hooks/useReducedMotion";

function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get optimized animation props
  const containerProps = getOptimizedAnimationProps(shouldReduceMotion, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  });

  const sectionProps = getOptimizedAnimationProps(shouldReduceMotion, {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 }
  });

  const sectionPropsDelayed = getOptimizedAnimationProps(shouldReduceMotion, {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.1 },
    viewport: { once: true, amount: 0.3 }
  });

  return (
    <div className="">
      <Hero />
      <motion.div {...containerProps}>
        <motion.div {...sectionProps}>
          <FoundersSection />
        </motion.div>

        <motion.div {...sectionPropsDelayed}>
          <FixSection />
        </motion.div>

        <motion.div {...sectionPropsDelayed}>
          <StepsSection />
        </motion.div>

        <motion.div {...sectionPropsDelayed}>
          <CostSection />
        </motion.div>

        <motion.div {...sectionPropsDelayed}>
          <TestimonialsSection />
        </motion.div>

        <motion.div {...sectionPropsDelayed}>
          <NewsletterSection />
        </motion.div>
      </motion.div>

      <FooterSection />
    </div>
  );
}

export default HomePage;
