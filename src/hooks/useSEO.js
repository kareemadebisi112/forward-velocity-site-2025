import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Page-specific SEO data
const pageData = {
  '/': {
    title: 'Forward Velocity - Expert Web Development & Performance Optimization',
    description: 'Forward Velocity delivers lightning-fast websites, seamless integrations, and custom solutions. Get your tech stack optimized and your business moving forward.',
    h1: 'Systems slowing down? Let\'s fix that.',
    keywords: 'web development, website optimization, performance, systems integration, custom solutions',
    type: 'website'
  },
  '/services': {
    title: 'Web Development Services - Forward Velocity',
    description: 'Professional web development, performance optimization, and system integration services. We build lightning-fast websites and seamless digital solutions.',
    h1: 'Services',
    keywords: 'web development services, website optimization, performance tuning, system integration',
    type: 'webpage'
  },
  '/contact': {
    title: 'Contact Forward Velocity - Get Your Custom Plan',
    description: 'Ready to optimize your tech stack? Contact Forward Velocity for custom web development solutions. Get your project plan within 24 hours.',
    h1: 'Let\'s build something amazing together',
    keywords: 'contact web developer, custom solutions, project consultation, web development quote',
    type: 'webpage'
  },
  '/start': {
    title: 'Start Your Project - Forward Velocity Intake Portal',
    description: 'Begin your web development project with Forward Velocity. Complete our intake form to get a custom solution plan tailored to your needs.',
    h1: 'Let\'s get started on your project',
    keywords: 'start project, web development intake, project planning, custom solutions',
    type: 'webpage'
  },
  '/blog': {
    title: 'Web Development Blog - Forward Velocity',
    description: 'Learn about web development, performance optimization, and technical insights from Forward Velocity. Stay updated with the latest industry trends.',
    h1: 'Insights & Updates',
    keywords: 'web development blog, technical insights, performance tips, development tutorials',
    type: 'webpage'
  },
  '/tools': {
    title: 'Development Tools & Resources - Forward Velocity',
    description: 'Discover powerful development tools and resources curated by Forward Velocity. Boost your productivity with our recommended tech stack.',
    h1: 'Tools & Resources',
    keywords: 'development tools, web development resources, productivity tools, tech stack',
    type: 'webpage'
  },
  '/projects': {
    title: 'Our Work - Forward Velocity Project Portfolio',
    description: 'Explore Forward Velocity\'s portfolio of successful web development projects. See how we\'ve helped businesses optimize their digital presence.',
    h1: 'Our work — built with precision and innovation',
    keywords: 'web development portfolio, project examples, case studies, client work',
    type: 'webpage'
  },
  '/resources': {
    title: 'Web Development Resources - Forward Velocity',
    description: 'Access valuable web development resources, guides, and tools from Forward Velocity. Everything you need for successful digital projects.',
    h1: 'Resources',
    keywords: 'web development resources, guides, documentation, development tools',
    type: 'webpage'
  }
};

export const useSEO = () => {
  const location = useLocation();

  // Use useLayoutEffect for immediate DOM updates before browser paint
  useLayoutEffect(() => {
    const currentPath = location.pathname;
    const seoData = pageData[currentPath] || pageData['/'];

    // Update document title immediately
    document.title = seoData.title;

    // Build canonical URL
    const baseURL = 'https://forward-velocity.com';
    const canonicalURL = currentPath === '/' ? baseURL + '/' : baseURL + currentPath;

    // Update all meta tags immediately
    updateOrCreateMeta('name', 'description', seoData.description);
    updateOrCreateMeta('name', 'keywords', seoData.keywords);
    updateOrCreateMeta('name', 'title', seoData.title);

    // Update Open Graph tags
    updateOrCreateMeta('property', 'og:title', seoData.title);
    updateOrCreateMeta('property', 'og:description', seoData.description);
    updateOrCreateMeta('property', 'og:url', canonicalURL);
    updateOrCreateMeta('property', 'og:type', seoData.type);
    
    // Update Twitter tags
    updateOrCreateMeta('property', 'twitter:title', seoData.title);
    updateOrCreateMeta('property', 'twitter:description', seoData.description);
    updateOrCreateMeta('property', 'twitter:url', canonicalURL);

    // Update canonical link
    updateOrCreateCanonical(canonicalURL);

    // Update primary heading meta tag (for crawlers)
    updateOrCreateMeta('name', 'primary-heading', seoData.h1);

    // Add structured data for better crawling
    updateOrCreateMeta('name', 'page-topic', seoData.h1);
    updateOrCreateMeta('name', 'content-language', 'en');

    // Force a small delay to ensure crawlers see the changes
    setTimeout(() => {
      console.log(`SEO updated for ${currentPath}:`, {
        title: seoData.title,
        description: seoData.description,
        canonical: canonicalURL,
        h1: seoData.h1
      });
    }, 100);

  }, [location.pathname]);

  // Additional useEffect for any late-loading crawlers
  useEffect(() => {
    // Add a marker that JavaScript has executed
    updateOrCreateMeta('name', 'spa-ready', 'true');
    updateOrCreateMeta('name', 'last-updated', new Date().toISOString());
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

// Helper function for canonical links
const updateOrCreateCanonical = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  
  canonical.setAttribute('href', url);
};

export default useSEO;
