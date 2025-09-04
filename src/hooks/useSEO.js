import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Page-specific SEO data
const pageData = {
  '/': {
    title: 'Forward Velocity - Expert Web Development & Performance Optimization',
    description: 'Forward Velocity delivers lightning-fast websites, seamless integrations, and custom solutions. Get your tech stack optimized and your business moving forward.',
    h1: 'Systems slowing down? Let\'s fix that.',
    keywords: 'web development, website optimization, performance, systems integration, custom solutions'
  },
  '/services': {
    title: 'Web Development Services - Forward Velocity',
    description: 'Professional web development, performance optimization, and system integration services. We build lightning-fast websites and seamless digital solutions.',
    h1: 'Services',
    keywords: 'web development services, website optimization, performance tuning, system integration'
  },
  '/contact': {
    title: 'Contact Forward Velocity - Get Your Custom Plan',
    description: 'Ready to optimize your tech stack? Contact Forward Velocity for custom web development solutions. Get your project plan within 24 hours.',
    h1: 'Let\'s build something amazing together',
    keywords: 'contact web developer, custom solutions, project consultation, web development quote'
  },
  '/start': {
    title: 'Start Your Project - Forward Velocity Intake Portal',
    description: 'Begin your web development project with Forward Velocity. Complete our intake form to get a custom solution plan tailored to your needs.',
    h1: 'Let\'s get started on your project',
    keywords: 'start project, web development intake, project planning, custom solutions'
  },
  '/blog': {
    title: 'Web Development Blog - Forward Velocity',
    description: 'Learn about web development, performance optimization, and technical insights from Forward Velocity. Stay updated with the latest industry trends.',
    h1: 'Insights & Updates',
    keywords: 'web development blog, technical insights, performance tips, development tutorials'
  },
  '/tools': {
    title: 'Development Tools & Resources - Forward Velocity',
    description: 'Discover powerful development tools and resources curated by Forward Velocity. Boost your productivity with our recommended tech stack.',
    h1: 'Tools & Resources',
    keywords: 'development tools, web development resources, productivity tools, tech stack'
  },
  '/projects': {
    title: 'Our Work - Forward Velocity Project Portfolio',
    description: 'Explore Forward Velocity\'s portfolio of successful web development projects. See how we\'ve helped businesses optimize their digital presence.',
    h1: 'Our work — built with precision and innovation',
    keywords: 'web development portfolio, project examples, case studies, client work'
  },
  '/resources': {
    title: 'Web Development Resources - Forward Velocity',
    description: 'Access valuable web development resources, guides, and tools from Forward Velocity. Everything you need for successful digital projects.',
    h1: 'Resources',
    keywords: 'web development resources, guides, documentation, development tools'
  }
};

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const seoData = pageData[currentPath] || pageData['/'];

    // Update document title
    document.title = seoData.title;

    // Update meta description
    updateOrCreateMeta('name', 'description', seoData.description);
    updateOrCreateMeta('name', 'keywords', seoData.keywords);

    // Update Open Graph tags
    updateOrCreateMeta('property', 'og:title', seoData.title);
    updateOrCreateMeta('property', 'og:description', seoData.description);
    
    // Update Twitter tags
    updateOrCreateMeta('property', 'twitter:title', seoData.title);
    updateOrCreateMeta('property', 'twitter:description', seoData.description);

    // Update primary heading meta tag (for crawlers)
    updateOrCreateMeta('name', 'primary-heading', seoData.h1);

    // Update page type
    const pageType = currentPath === '/' ? 'website' : 'webpage';
    updateOrCreateMeta('property', 'og:type', pageType);

    console.log(`SEO updated for ${currentPath}:`, {
      title: seoData.title,
      description: seoData.description,
      h1: seoData.h1
    });

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

export default useSEO;
