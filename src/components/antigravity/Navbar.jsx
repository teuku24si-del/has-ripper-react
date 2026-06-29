import React from 'react';

export const Navbar = ({ children, className = '' }) => {
  return (
    <header className={`w-full bg-white/90 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-100 transition-all duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {children}
      </div>
    </header>
  );
};
