import React from "react";

const Button = ({ children, className = "", glow = false, ...props }) => {
  return (
    <button
      className={`px-8 py-3 rounded-lg cursor-pointer font-semibold shadow-lg pointer-events-auto transition-all duration-300 ease-out hover:shadow-2xl ${className} ${
        glow ? "button-glow" : ""
      }`}
      style={{
        background: "linear-gradient(90deg, #159653 0%, #6FD287 100%)",
        color: "#fff",
        border: "none",
        boxShadow: glow
          ? "0 0 16px 4px #15965388, 0 0 32px 8px #6FD28755"
          : undefined,
        transition: "box-shadow 0.3s, transform 0.3s, background 0.3s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background =
          "linear-gradient(90deg, #6FD287 0%, #159653 100%)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background =
          "linear-gradient(90deg, #159653 0%, #6FD287 100%)")
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
