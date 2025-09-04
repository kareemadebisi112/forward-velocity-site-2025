import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import FooterSection from "./FooterSection";
import TextGradient from "./mini/TextGradient";

// Mock data - replace this with your actual backend API call
const mockBlogs = [
//   {
//     id: 1,
//     title: "The Hidden Costs of Broken Systems",
//     excerpt: "Discover how inefficient workflows and outdated processes are silently draining your business resources and what you can do about it.",
//     author: "Forward Velocity Team",
//     publishDate: "2024-03-15",
//     readTime: "5 min read",
//     category: "Operations",
//     imageUrl: "/api/placeholder/400/250",
//     tags: ["efficiency", "automation", "business-ops"]
//   },
//   {
//     id: 2,
//     title: "Scaling Smart: Tech Solutions for Growing Businesses",
//     excerpt: "Learn how to implement scalable technology solutions that grow with your business without breaking the bank.",
//     author: "Sarah Johnson",
//     publishDate: "2024-03-10",
//     readTime: "7 min read",
//     category: "Technology",
//     imageUrl: "/api/placeholder/400/250",
//     tags: ["scaling", "technology", "growth"]
//   },
//   {
//     id: 3,
//     title: "From Chaos to Clarity: Streamlining Your Workflow",
//     excerpt: "A step-by-step guide to identifying bottlenecks and creating efficient processes that save time and reduce stress.",
//     author: "Mike Chen",
//     publishDate: "2024-03-05",
//     readTime: "6 min read",
//     category: "Productivity",
//     imageUrl: "/api/placeholder/400/250",
//     tags: ["workflow", "productivity", "efficiency"]
//   },
//   {
//     id: 4,
//     title: "The ROI of Automation: When to Invest in Tech",
//     excerpt: "Understanding when and where to implement automation to maximize your return on investment and boost productivity.",
//     author: "Alex Rivera",
//     publishDate: "2024-02-28",
//     readTime: "8 min read",
//     category: "Automation",
//     imageUrl: "/api/placeholder/400/250",
//     tags: ["automation", "roi", "investment"]
//   },
//   {
//     id: 5,
//     title: "Building Resilient Systems That Scale",
//     excerpt: "How to design and implement systems that can handle growth while maintaining reliability and performance.",
//     author: "Jordan Kim",
//     publishDate: "2024-02-20",
//     readTime: "9 min read",
//     category: "Architecture",
//     imageUrl: "/api/placeholder/400/250",
//     tags: ["architecture", "scalability", "resilience"]
//   },
//   {
//     id: 6,
//     title: "Data-Driven Decisions: Making Sense of Your Metrics",
//     excerpt: "Transform your business data into actionable insights that drive growth and improve decision-making.",
//     author: "Lisa Park",
//     publishDate: "2024-02-15",
//     readTime: "6 min read",
//     category: "Analytics",
//     imageUrl: "/api/placeholder/400/250",
//     tags: ["data", "analytics", "metrics"]
//   }
];

const BlogCard = ({ blog }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Link to={`/blog/${blog.id}`} className="block">
      <article className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
        <div className="aspect-video bg-gradient-to-br from-green-500/20 to-green-600/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
              {blog.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span>{formatDate(blog.publishDate)}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors duration-300">
            {blog.title}
          </h3>
          
          <p className="text-gray-text text-sm mb-4 leading-relaxed">
            {blog.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-text-fade text-sm">
              By {blog.author}
            </span>
            
            <div className="flex gap-2">
              {blog.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index}
                  className="bg-white/10 text-white/70 px-2 py-1 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-4 text-green-400 group-hover:text-green-300 transition-colors duration-300 text-sm font-medium">
            Read More →
          </div>
        </div>
      </article>
    </Link>
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

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Get unique categories
  const categories = ["All", ...new Set(mockBlogs.map(blog => blog.category))];

  // Simulate API call - replace with your actual backend call
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Replace this with your actual API call:
      // const response = await fetch('/api/blogs');
      // const data = await response.json();
      // setBlogs(data);
      
      setBlogs(mockBlogs);
      setFilteredBlogs(mockBlogs);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  // Filter blogs by category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === selectedCategory));
    }
  }, [selectedCategory, blogs]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TextGradient>
              Insights & Ideas
            </TextGradient>
          </h1>
          <p className="text-gray-text text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Discover actionable insights on streamlining operations, leveraging technology, 
            and building systems that scale with your business.
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

      {/* Blog Grid */}
      <section className="pb-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20">
              <div className="mb-6">
                <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                No Blog Posts Yet
              </h3>
              <p className="text-gray-text text-lg mb-6">
                We're working on bringing you valuable insights. Check back soon for our latest articles!
              </p>
              <div className="flex justify-center gap-4">
                <Link 
                  to="/projects" 
                  className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  View Our Projects
                </Link>
                <Link 
                  to="/start" 
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-gray-text">
                  {selectedCategory === "All" 
                    ? `Showing all ${filteredBlogs.length} articles`
                    : `Showing ${filteredBlogs.length} articles in ${selectedCategory}`
                  }
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
              
              {filteredBlogs.length === 0 && (
                <div className="text-center py-20">
                  <div className="mb-4">
                    <svg className="w-12 h-12 text-gray-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    No Articles Found
                  </h3>
                  <p className="text-gray-text text-lg mb-4">
                    No articles found in the {selectedCategory} category.
                  </p>
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                  >
                    View All Articles
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default BlogPage;
