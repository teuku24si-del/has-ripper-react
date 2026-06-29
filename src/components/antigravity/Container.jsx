import React from 'react';

export const Container = ({ children, className = '', fluid = false }) => {
  const baseClass = fluid ? "w-full" : "max-w-7xl mx-auto px-4 md:px-6";
  return (
    <div className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
};
