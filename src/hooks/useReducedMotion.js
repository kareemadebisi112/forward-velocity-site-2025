import { useState, useEffect } from 'react';

export const useReducedMotion = () => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = () => {
      setShouldReduceMotion(mediaQuery.matches);
    };

    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  return shouldReduceMotion;
};

export const getOptimizedAnimationProps = (shouldReduceMotion, originalProps = {}) => {
  if (shouldReduceMotion) {
    // Reduce animation complexity for users who prefer reduced motion
    return {
      initial: { opacity: 0.5 },
      whileInView: { opacity: 1 },
      transition: { duration: 0.2, ease: "linear" },
      viewport: { once: true, amount: 0.1 },
      ...originalProps
    };
  }
  
  // Standard animations for all devices
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
    ...originalProps
  };
};
