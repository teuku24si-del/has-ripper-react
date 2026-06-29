import React from 'react';

export const Typography = ({ variant = 'p', children, className = '', ...props }) => {
  const baseStyles = {
    h1: "text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md leading-tight text-white",
    h2: "text-3xl font-bold tracking-tight text-gray-800",
    h4: "font-bold text-gray-800 text-base",
    p: "mt-4 text-sm md:text-base text-gray-600 font-medium",
    navLink: "pb-1 text-base font-bold uppercase tracking-wider text-gray-600 transition-all duration-300 hover:text-[#7F7CFF] border-b-2",
  };

  const Component = variant.startsWith('h') || variant === 'p' ? variant : (variant === 'navLink' ? 'span' : 'p');

  return (
    <Component className={`${baseStyles[variant] || ''} ${className}`} {...props}>
      {children}
    </Component>
  );
};
