import React from "react";

const Logo = ({ size = 35, className = "" }) => (
  <img
    src="/logo.svg"
    alt="Forward Velocity Logo"
    width={size}
    height={size}
    className={className}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  />
);

export default Logo;
