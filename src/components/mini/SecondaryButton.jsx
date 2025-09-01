import React from "react";

const SecondaryButton = ({ 
  children, 
  className = "", 
  onClick,
  ...props 
}) => {
  return (
    <button
      className={`
        px-6 py-3 
        bg-transparent 
        border-2 border-white 
        text-white 
        font-semibold 
        rounded-lg 
        transition-all duration-300 
        hover:bg-white 
        hover:text-black 
        hover:shadow-lg
        focus:outline-none 
        focus:ring-2 
        focus:ring-white 
        focus:ring-opacity-50
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
