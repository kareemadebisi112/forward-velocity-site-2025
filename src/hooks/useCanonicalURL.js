import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useCanonicalURL = () => {
  const location = useLocation();

  useEffect(() => {
    // Build canonical URL - always use non-www
    const baseURL = 'https://forward-velocity.com';
    const pathname = location.pathname === '/' ? '/' : location.pathname;
    const canonicalURL = pathname === '/' ? baseURL + '/' : baseURL + pathname;

    // Remove existing canonical link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Create new canonical link for current page
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', canonicalURL);
    
    // Add to head
    document.head.appendChild(canonical);

    // Also update Open Graph URL
    let ogURL = document.querySelector('meta[property="og:url"]');
    if (!ogURL) {
      ogURL = document.createElement('meta');
      ogURL.setAttribute('property', 'og:url');
      document.head.appendChild(ogURL);
    }
    ogURL.setAttribute('content', canonicalURL);

    // Update Twitter URL
    let twitterURL = document.querySelector('meta[property="twitter:url"]');
    if (!twitterURL) {
      twitterURL = document.createElement('meta');
      twitterURL.setAttribute('property', 'twitter:url');
      document.head.appendChild(twitterURL);
    }
    twitterURL.setAttribute('content', canonicalURL);

    // Debug log to verify correct URLs
    console.log(`Canonical URL set for ${location.pathname}: ${canonicalURL}`);

  }, [location.pathname]);
};

export default useCanonicalURL;
