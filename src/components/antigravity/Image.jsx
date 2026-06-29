import React from 'react';

export const Image = ({ src, alt, className = '' }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
      />
    </div>
  );
};
