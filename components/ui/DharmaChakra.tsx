import React from "react";

// Update props interface to include className
export const DharmaChakra = ({
  size = 200,
  color = "#000080",
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeWidth="8"
      className={className} /* <-- Pass className here */
    >
      {/* Outer Circle */}
      <circle cx="100" cy="100" r="90" />

      {/* Center Hub */}
      <circle cx="100" cy="100" r="12" fill={color} />

      {/* Spokes */}
      <g stroke={color} strokeWidth="4">
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="100"
            x2="100"
            y2="15"
            transform={`rotate(${i * 15} 100 100)`}
          />
        ))}
      </g>
    </svg>
  );
};
