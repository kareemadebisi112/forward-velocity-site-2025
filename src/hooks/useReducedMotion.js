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

    // Use the newer addEventListener API
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return shouldReduceMotion;
};

export const getOptimizedAnimationProps = (shouldReduceMotion, originalProps = {}) => {
  // Check if this is a crawler/bot (no animation for better SEO)
  const isCrawler = typeof navigator !== 'undefined' && (
    /bot|crawler|spider|crawling/i.test(navigator.userAgent) ||
    window.location.search.includes('ahrefs') ||
    window.location.search.includes('crawler')
  );
  
  if (shouldReduceMotion || isCrawler) {
    // No animation for crawlers or users who prefer reduced motion
    return {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 },
      viewport: { once: true, amount: 0.1 },
      ...originalProps
    };
  }
  
  // Optimized animations with better performance
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      // Optimize for performance - avoid layout thrashing
      willChange: "transform, opacity"
    },
    viewport: { once: true, amount: 0.2 },
    // Add layout optimization
    layout: false,
    ...originalProps
  };
};
