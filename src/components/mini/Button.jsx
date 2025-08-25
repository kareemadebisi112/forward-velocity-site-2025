import React from "react";

const Button = ({ children, className = "", glow = false, ...props }) => {
  return (
    <button
      className={`px-8 py-3 rounded-lg font-semibold shadow-lg pointer-events-auto transition-all ${className} ${
        glow ? "button-glow" : ""
      }`}
      style={{
        background: "linear-gradient(90deg, #159653 0%, #6FD287 100%)",
        color: "#fff",
        border: "none",
        boxShadow: glow
          ? "0 0 16px 4px #15965388, 0 0 32px 8px #6FD28755"
          : undefined,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
