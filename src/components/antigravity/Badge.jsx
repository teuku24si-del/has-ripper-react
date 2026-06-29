import React from 'react';

export const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: "bg-[#7F7CFF]/10 text-[#7F7CFF]",
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    gray: "bg-gray-100 text-gray-500"
  };

  return (
    <span className={`px-2.5 py-1 text-[10px] font-bold rounded-md uppercase tracking-wider ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </span>
  );
};
