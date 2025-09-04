import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export const resourcesDropdown = [
  { label: "Blog", href: "/blog", description: "Insights & best practices" },
  { label: "Downloads", href: "/resources", description: "Guides, templates & tools" },
  { label: "Tools", href: "/tools", description: "Developer utilities & resources" }
];

const ResourcesDropdown = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setResourcesOpen(!resourcesOpen)}
        className="flex items-center gap-1 hover:text-green-400 transition-colors duration-300 relative group"
      >
        Resources
        <FaChevronDown 
          className={`text-xs transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} 
        />
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </button>
      
      {/* Dropdown Menu */}
      {resourcesOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl overflow-hidden">
          {resourcesDropdown.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="block px-4 py-3 hover:bg-white/10 transition-colors duration-200 group"
              onClick={() => setResourcesOpen(false)}
            >
              <div className="text-white font-medium group-hover:text-green-400 transition-colors duration-200">
                {item.label}
              </div>
              <div className="text-gray-text text-sm">
                {item.description}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResourcesDropdown;
