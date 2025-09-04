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
    updateOrCreateMeta('property', 'og:url', canonicalURL);
    updateOrCreateMeta('property', 'twitter:url', canonicalURL);

    console.log(`Canonical URL set for ${location.pathname}: ${canonicalURL}`);

  }, [location.pathname]);
};

// Helper function to update or create meta tags
const updateOrCreateMeta = (attributeName, attributeValue, content) => {
  let metaTag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute(attributeName, attributeValue);
    document.head.appendChild(metaTag);
  }
  
  metaTag.setAttribute('content', content);
};

export default useCanonicalURL;
