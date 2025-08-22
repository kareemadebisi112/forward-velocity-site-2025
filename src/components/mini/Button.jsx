import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg font-semibold shadow-lg pointer-events-auto transition-all ${className}`}
      style={{
        background: "linear-gradient(90deg, #159653 0%, #6FD287 100%)",
        color: "#fff",
        border: "none",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
