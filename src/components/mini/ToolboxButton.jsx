import React from "react";
import { FaWrench, FaHammer } from "react-icons/fa";
import { 
  HiCode, 
  HiCog, 
  HiLightningBolt,
  HiDatabase
} from "react-icons/hi";

const ToolboxButton = ({ href = "https://your-dev-tools-site.com", className = "" }) => {
  return (
    <div className={`relative group ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative transition-all duration-300 hover:scale-105"
      >
        {/* Custom Toolbox SVG */}
        <div className="relative w-16 h-12 group-hover:animate-pulse">
          {/* Toolbox Base - Simplified */}
          <div className="absolute inset-x-2 bottom-0 h-7 bg-gray-700 rounded-lg border-2 border-gray-600 group-hover:border-green-400 transition-colors duration-300 shadow-lg">
            {/* Toolbox Handle - Simplified */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-5 h-2 bg-gray-600 rounded-t-md border border-gray-500 group-hover:border-green-300 transition-colors duration-300"></div>
            
            {/* Toolbox Latch */}
            <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-yellow-400 rounded-full group-hover:bg-yellow-300 transition-colors duration-300"></div>
          </div>
          
          {/* Dev Tools Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xs font-bold leading-tight">
            <span className="group-hover:text-green-300 transition-colors duration-300">Dev</span>
            <span className="group-hover:text-green-300 transition-colors duration-300">Tools</span>
          </div>
          
          {/* Jumping Tools */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            <HiCode 
              className="absolute text-blue-400 text-base opacity-0 group-hover:opacity-100 transition-all duration-600 transform translate-y-0 group-hover:-translate-y-5 group-hover:-translate-x-1 group-hover:rotate-12"
              style={{
                top: '18px',
                left: '6px',
                transitionDelay: '0ms'
              }}
            />
            <FaWrench 
              className="absolute text-yellow-400 text-base opacity-0 group-hover:opacity-100 transition-all duration-600 transform translate-y-0 group-hover:-translate-y-6 group-hover:translate-x-1 group-hover:-rotate-12"
              style={{
                top: '16px',
                right: '6px',
                transitionDelay: '150ms'
              }}
            />
            <HiCog 
              className="absolute text-purple-400 text-base opacity-0 group-hover:opacity-100 transition-all duration-600 transform translate-y-0 group-hover:-translate-y-7 group-hover:rotate-90"
              style={{
                top: '14px',
                left: '50%',
                transform: 'translateX(-50%)',
                transitionDelay: '300ms'
              }}
            />
            <HiLightningBolt 
              className="absolute text-green-400 text-base opacity-0 group-hover:opacity-100 transition-all duration-600 transform translate-y-0 group-hover:-translate-y-5 group-hover:translate-x-1 group-hover:rotate-45"
              style={{
                top: '18px',
                right: '2px',
                transitionDelay: '450ms'
              }}
            />
            <FaHammer 
              className="absolute text-red-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-600 transform translate-y-0 group-hover:-translate-y-4 group-hover:-translate-x-1"
              style={{
                top: '20px',
                left: '2px',
                transitionDelay: '600ms'
              }}
            />
            <HiDatabase 
              className="absolute text-indigo-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-600 transform translate-y-0 group-hover:-translate-y-5 group-hover:translate-x-2"
              style={{
                top: '22px',
                right: '10px',
                transitionDelay: '750ms'
              }}
            />
          </div>

          {/* Sparkle Effects */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 overflow-visible">
            <div className="absolute top-1 left-3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0ms' }}></div>
            <div className="absolute top-3 right-3 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
            <div className="absolute top-5 left-5 w-1 h-1 bg-green-300 rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
            <div className="absolute top-2 right-5 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '600ms' }}></div>
            <div className="absolute top-7 left-7 w-1 h-1 bg-red-300 rounded-full animate-ping" style={{ animationDelay: '800ms' }}></div>
          </div>

          {/* Cartoony glow effect */}
          <div className="absolute inset-0 bg-green-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md"></div>
        </div>
      </a>
    </div>
  );
};

export default ToolboxButton;
