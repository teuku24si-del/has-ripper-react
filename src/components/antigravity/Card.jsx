import React from 'react';

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
