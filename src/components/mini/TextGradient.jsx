import React from "react";

const TextGradient = ({
  children,
  as = "span",
  from = "white",
  to = "gray-text",
  direction = "to-r",
  className = "",
  ...props
}) => {
  const Tag = as;
  return (
    <Tag
      className={`bg-gradient-${direction} from-${from} to-${to} bg-clip-text text-transparent ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default TextGradient;
