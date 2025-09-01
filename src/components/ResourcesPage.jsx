import React, { useState, useEffect } from "react";
import Header from "./Header";
import FooterSection from "./FooterSection";
import TextGradient from "./mini/TextGradient";
import Button from "./mini/Button";
import { FaDownload, FaFilePdf, FaStar, FaEye } from "react-icons/fa";

// Mock data - replace this with your actual backend API call
const mockResources = [
  {
    id: 1,
    title: "Complete Business Automation Checklist",
    description: "A comprehensive 25-page guide covering every aspect of business process automation, from identification to implementation.",
    price: 29.99,
    originalPrice: 49.99,
    category: "Automation",
    type: "PDF Guide",
    pages: 25,
    downloadCount: 1247,
    rating: 4.8,
    reviews: 156,
    imageUrl: "/api/placeholder/300/400",
    features: [
      "Step-by-step automation roadmap",
      "Process identification templates", 
      "ROI calculation worksheets",
      "Implementation timeline",
      "Bonus: 15 automation tools comparison"
    ],
    preview: "Get a sneak peek of the first 5 pages",
    tags: ["automation", "productivity", "templates"]
  },
  {
    id: 2,
    title: "Scaling Systems Blueprint",
    description: "Learn how to build systems that grow with your business. Includes templates, frameworks, and real-world case studies.",
    price: 39.99,
    originalPrice: 69.99,
    category: "Scaling",
    type: "PDF + Templates",
    pages: 42,
    downloadCount: 892,
    rating: 4.9,
    reviews: 203,
    imageUrl: "/api/placeholder/300/400",
    features: [
      "Scalability assessment framework",
      "System architecture templates",
      "Growth planning worksheets",
      "6 detailed case studies",
      "Bonus: Video walkthrough (45 min)"
    ],
    preview: "Preview available",
    tags: ["scaling", "systems", "growth"]
  },
  {
    id: 3,
    title: "Workflow Optimization Toolkit",
    description: "Transform chaotic processes into streamlined workflows. Includes mapping tools, optimization techniques, and measurement frameworks.",
    price: 24.99,
    originalPrice: 39.99,
    category: "Workflows",
    type: "PDF + Spreadsheets",
    pages: 18,
    downloadCount: 1689,
    rating: 4.7,
    reviews: 289,
    imageUrl: "/api/placeholder/300/400",
    features: [
      "Process mapping templates",
      "Bottleneck identification guide",
      "Optimization techniques library",
      "Performance measurement tools",
      "Ready-to-use spreadsheet templates"
    ],
    preview: "Free sample chapter",
    tags: ["workflow", "optimization", "efficiency"]
  },
  {
    id: 4,
    title: "Tech Stack Decision Framework",
    description: "Make informed technology decisions with this comprehensive evaluation framework. Perfect for growing businesses choosing their tech stack.",
    price: 34.99,
    originalPrice: 54.99,
    category: "Technology",
    type: "PDF + Checklists",
    pages: 31,
    downloadCount: 567,
    rating: 4.6,
    reviews: 98,
    imageUrl: "/api/placeholder/300/400",
    features: [
      "Technology evaluation matrix",
      "Cost-benefit analysis templates",
      "Integration assessment guides",
      "Vendor comparison checklists",
      "Implementation planning tools"
    ],
    preview: "View table of contents",
    tags: ["technology", "decision-making", "planning"]
  },
  {
    id: 5,
    title: "Revenue Operations Playbook",
    description: "Align your sales, marketing, and customer success teams with proven RevOps strategies and implementation guides.",
    price: 44.99,
    originalPrice: 79.99,
    category: "Revenue Ops",
    type: "PDF + Templates",
    pages: 55,
    downloadCount: 423,
    rating: 5.0,
    reviews: 67,
    imageUrl: "/api/placeholder/300/400",
    features: [
      "RevOps strategy framework",
      "Team alignment worksheets",
      "KPI tracking templates",
      "Process documentation guides",
      "Quarterly planning templates"
    ],
    preview: "Executive summary available",
    tags: ["revenue", "operations", "alignment"]
  },
  {
    id: 6,
    title: "Data Analytics Starter Kit",
    description: "Transform your business data into actionable insights. Includes dashboard templates, analysis frameworks, and reporting tools.",
    price: 27.99,
    originalPrice: 44.99,
    category: "Analytics",
    type: "PDF + Dashboards",
    pages: 33,
    downloadCount: 1156,
    rating: 4.8,
    reviews: 178,
    imageUrl: "/api/placeholder/300/400",
    features: [
      "Analytics implementation roadmap",
      "KPI selection framework",
      "Dashboard design templates",
      "Report automation guides",
      "Google Analytics setup checklist"
    ],
    preview: "Sample dashboard included",
    tags: ["analytics", "data", "reporting"]
  }
];

const ResourceCard = ({ resource }) => {
  const [showPreview, setShowPreview] = useState(false);
  
  const discountPercentage = Math.round(((resource.originalPrice - resource.price) / resource.originalPrice) * 100);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
      {/* Resource Image */}
      <div className="aspect-[3/4] bg-gradient-to-br from-green-500/20 to-green-600/20 relative overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
            {resource.category}
          </span>
        </div>
        {discountPercentage > 0 && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              -{discountPercentage}%
            </span>
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3">
            <div className="flex items-center justify-between text-white text-sm">
              <span className="flex items-center gap-1">
                <FaFilePdf className="text-red-400" />
                {resource.type}
              </span>
              <span>{resource.pages} pages</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {/* Title and Description */}
        <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
          {resource.title}
        </h3>
        
        <p className="text-gray-text text-sm mb-4 leading-relaxed">
          {resource.description}
        </p>
        
        {/* Rating and Downloads */}
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="text-white">{resource.rating}</span>
            <span className="text-gray-text">({resource.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-gray-text">
            <FaDownload className="text-green-400" />
            <span>{resource.downloadCount.toLocaleString()} downloads</span>
          </div>
        </div>
        
        {/* Features List */}
        <div className="mb-4">
          <h4 className="text-white text-sm font-semibold mb-2">What's included:</h4>
          <ul className="space-y-1">
            {resource.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-gray-text text-xs flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                {feature}
              </li>
            ))}
            {resource.features.length > 3 && (
              <li className="text-green-400 text-xs">
                +{resource.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>
        
        {/* Price and Actions */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-white text-2xl font-bold">${resource.price}</span>
            {resource.originalPrice > resource.price && (
              <span className="text-gray-text text-lg line-through">${resource.originalPrice}</span>
            )}
          </div>
          
          <button 
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors duration-300 text-sm"
          >
            <FaEye />
            Preview
          </button>
        </div>
        
        {/* Preview Section */}
        {showPreview && (
          <div className="bg-white/5 rounded-lg p-3 mb-4">
            <p className="text-gray-text text-xs">{resource.preview}</p>
          </div>
        )}
        
        {/* Tags */}
        <div className="flex gap-2 mb-4">
          {resource.tags.slice(0, 2).map((tag, index) => (
            <span 
              key={index}
              className="bg-white/10 text-white/70 px-2 py-1 rounded text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        {/* Purchase Button */}
        <Button className="w-full bg-green-500 text-black font-semibold hover:bg-green-400 transition-colors duration-300">
          <FaDownload className="mr-2" />
          Purchase & Download
        </Button>
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

const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [loading, setLoading] = useState(true);

  // Get unique categories
  const categories = ["All", ...new Set(mockResources.map(resource => resource.category))];

  // Simulate API call - replace with your actual backend call
  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Replace this with your actual API call:
      // const response = await fetch('/api/resources');
      // const data = await response.json();
      // setResources(data);
      
      setResources(mockResources);
      setFilteredResources(mockResources);
      setLoading(false);
    };

    fetchResources();
  }, []);

  // Filter and sort resources
  useEffect(() => {
    let filtered = selectedCategory === "All" 
      ? resources 
      : resources.filter(resource => resource.category === selectedCategory);

    // Sort resources
    switch (sortBy) {
      case "price-low":
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        filtered = filtered.sort((a, b) => b.downloadCount - a.downloadCount);
        break;
      default:
        // Keep original order for "featured"
        break;
    }

    setFilteredResources(filtered);
  }, [selectedCategory, sortBy, resources]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TextGradient>
              Premium Resources
            </TextGradient>
          </h1>
          <p className="text-gray-text text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Download our carefully crafted guides, templates, and toolkits to accelerate 
            your business growth and streamline your operations.
          </p>
          
          {/* Filters and Sorting */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
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
            
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/10 text-white px-4 py-2 rounded-lg border border-white/20 focus:border-green-400 focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="pb-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-gray-text">
                  {selectedCategory === "All" 
                    ? `Showing all ${filteredResources.length} resources`
                    : `Showing ${filteredResources.length} resources in ${selectedCategory}`
                  }
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
              
              {filteredResources.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-text text-lg">
                    No resources found in the {selectedCategory} category.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-2xl p-8 border border-green-500/20">
          <h2 className="text-3xl font-bold mb-4">
            <TextGradient>
              Need Something Custom?
            </TextGradient>
          </h2>
          <p className="text-gray-text mb-6">
            Can't find what you're looking for? We create custom guides, templates, 
            and resources tailored to your specific business needs.
          </p>
          <Button className="bg-green-500 text-black font-semibold px-8 py-3">
            Request Custom Resource
          </Button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ResourcesPage;
