const CurvedCard = ({ children, color = "#fff", invert = false }) => (
  <div className="relative w-full flex flex-col items-center justify-center min-h-0 h-auto">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 800"
      className="absolute inset-0"
      style={{
        zIndex: 0,
        transform: invert ? "scaleX(-1) scaleY(-1)" : undefined,
      }}
      preserveAspectRatio="none"
    >
      <path
        d="M60 0 H1140 Q1200 0 1200 60 V740 Q1200 800 1140 800 H600 Q580 800 560 780 L540 760 Q520 740 500 740 H60 Q0 740 0 680 V60 Q0 0 60 0 Z"
        fill={color}
        stroke="#101010"
        strokeWidth="2"
      />
    </svg>
    <div className="relative z-10 w-full flex flex-col p-2 flex-grow h-auto min-h-0">
      {children}
    </div>
  </div>
);

export default CurvedCard;
