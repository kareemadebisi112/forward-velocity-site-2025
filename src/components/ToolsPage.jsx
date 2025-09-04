import React, { useState } from "react";
import Header from "./Header";
import FooterSection from "./FooterSection";
import TextGradient from "./mini/TextGradient";
import { FaExternalLinkAlt, FaCalculator, FaTachometerAlt, FaChartLine, FaShieldAlt, FaSearch, FaCog, FaMobile } from "react-icons/fa";

const ToolCard = ({ tool, featured = false }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group ${featured ? 'ring-2 ring-green-500/30' : ''}`}>
      {featured && (
        <div className="mb-4">
          <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-green-500/20 p-3 rounded-lg">
          <tool.icon className="text-green-400 text-xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
            {tool.name}
          </h3>
          <p className="text-gray-text text-sm mb-3 leading-relaxed">
            {tool.description}
          </p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-white/10 text-white/70 px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-gray-text-fade text-sm">
          {tool.type}
        </div>
        
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm"
        >
          Use Tool
          <FaExternalLinkAlt className="text-xs" />
        </a>
      </div>
    </div>
  );
};

const FilterButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-green-500 text-black"
        : "bg-white/10 text-white hover:bg-white/20"
    }`}
  >
    {label}
  </button>
);

const ToolsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const tools = [
    {
      id: 1,
      name: "PageSpeed Insights",
      description: "Analyze your website's performance and get suggestions for improvement. Get detailed reports on Core Web Vitals and user experience metrics.",
      url: "https://pagespeed.web.dev/",
      type: "Google Tool",
      category: "Performance",
      tags: ["Speed", "SEO", "Core Web Vitals"],
      icon: FaTachometerAlt,
      featured: true
    },
    {
      id: 2,
      name: "GTmetrix",
      description: "Comprehensive website speed test with waterfall charts, performance scores, and actionable recommendations for optimization.",
      url: "https://gtmetrix.com/",
      type: "Third-party Tool",
      category: "Performance",
      tags: ["Speed", "Analysis", "Optimization"],
      icon: FaTachometerAlt
    },
    {
      id: 3,
      name: "ROI Calculator",
      description: "Calculate the return on investment for your technology projects. Input costs, benefits, and timeframes to get detailed ROI analysis.",
      url: "https://calculator.net/roi-calculator.html",
      type: "Calculator",
      category: "Business",
      tags: ["ROI", "Investment", "Finance"],
      icon: FaCalculator,
      featured: true
    },
    {
      id: 4,
      name: "SSL Server Test",
      description: "Analyze your SSL certificate configuration and identify security vulnerabilities. Get detailed SSL/TLS assessment reports.",
      url: "https://www.ssllabs.com/ssltest/",
      type: "Security Tool",
      category: "Security",
      tags: ["SSL", "Security", "Certificates"],
      icon: FaShieldAlt
    },
    {
      id: 5,
      name: "Google Analytics",
      description: "Track and analyze your website traffic, user behavior, and conversion metrics. Essential for data-driven decision making.",
      url: "https://analytics.google.com/",
      type: "Analytics Platform",
      category: "Analytics",
      tags: ["Analytics", "Tracking", "Metrics"],
      icon: FaChartLine
    },
    {
      id: 6,
      name: "Mobile-Friendly Test",
      description: "Check if your website is mobile-friendly and get suggestions for improving mobile user experience.",
      url: "https://search.google.com/test/mobile-friendly",
      type: "Google Tool",
      category: "Mobile",
      tags: ["Mobile", "Responsive", "UX"],
      icon: FaMobile
    },
    {
      id: 7,
      name: "Pingdom Website Speed Test",
      description: "Test your website's load time from multiple locations worldwide. Get detailed performance analysis and suggestions.",
      url: "https://tools.pingdom.com/",
      type: "Third-party Tool",
      category: "Performance",
      tags: ["Speed", "Global", "Monitoring"],
      icon: FaTachometerAlt
    },
    {
      id: 8,
      name: "Google Search Console",
      description: "Monitor your website's search performance, identify issues, and optimize for better search visibility.",
      url: "https://search.google.com/search-console",
      type: "Google Tool",
      category: "SEO",
      tags: ["SEO", "Search", "Indexing"],
      icon: FaSearch
    },
    {
      id: 9,
      name: "Automation ROI Calculator",
      description: "Calculate the return on investment for business automation projects. Factor in time savings, error reduction, and efficiency gains.",
      url: "https://www.uipath.com/resources/automation-hub/roi-calculator",
      type: "Specialized Calculator",
      category: "Business",
      tags: ["Automation", "ROI", "Efficiency"],
      icon: FaCog,
      featured: true
    },
    {
      id: 10,
      name: "WebPageTest",
      description: "Advanced website performance testing with detailed waterfall charts, filmstrip view, and optimization suggestions.",
      url: "https://www.webpagetest.org/",
      type: "Performance Tool",
      category: "Performance",
      tags: ["Speed", "Detailed Analysis", "Waterfall"],
      icon: FaTachometerAlt
    },
    {
      id: 11,
      name: "Lighthouse",
      description: "Automated website auditing for performance, accessibility, progressive web apps, SEO, and best practices.",
      url: "https://developers.google.com/web/tools/lighthouse",
      type: "Google Tool",
      category: "Audit",
      tags: ["Audit", "Performance", "SEO", "Accessibility"],
      icon: FaSearch
    },
    {
      id: 12,
      name: "Security Headers Scanner",
      description: "Analyze your website's HTTP security headers and get recommendations for improving security posture.",
      url: "https://securityheaders.com/",
      type: "Security Tool",
      category: "Security",
      tags: ["Security", "Headers", "HTTPS"],
      icon: FaShieldAlt
    }
  ];

  // Get unique categories
  const categories = ["All", ...new Set(tools.map(tool => tool.category))];

  // Filter tools by category
  const filteredTools = selectedCategory === "All" 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TextGradient>
              Essential Tools
            </TextGradient>
          </h1>
          <p className="text-gray-text text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Curated collection of tools to analyze, optimize, and improve your website's performance, 
            security, and business metrics. Everything you need to make data-driven decisions.
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <FilterButton
                key={category}
                label={category}
                isActive={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pb-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-gray-text">
              {selectedCategory === "All" 
                ? `Showing all ${filteredTools.length} tools`
                : `Showing ${filteredTools.length} tools in ${selectedCategory}`
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard 
                key={tool.id} 
                tool={tool} 
                featured={tool.featured}
              />
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="text-center py-20">
              <div className="mb-4">
                <FaSearch className="w-12 h-12 text-gray-500 mx-auto mb-3" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                No Tools Found
              </h3>
              <p className="text-gray-text text-lg mb-4">
                No tools found in the {selectedCategory} category.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                View All Tools
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-16 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Implementing These Tools?
          </h2>
          <p className="text-gray-text text-lg mb-8">
            Our team can help you set up monitoring, optimize your website performance, 
            and create automated reporting systems that save you time and improve your results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/start"
              className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Expert Help
            </a>
            <a
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ToolsPage;
