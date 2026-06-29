import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ children, variant = 'primary', className = '', to, onClick, ...props }) => {
  const baseStyles = "flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm shrink-0";
  const variants = {
    primary: "bg-[#7F7CFF] text-white hover:bg-[#6b68e3]",
    outline: "bg-transparent text-gray-800 border border-gray-200 hover:bg-gray-100",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100 shadow-none",
    icon: "bg-[#7F7CFF] text-white p-4 rounded-xl md:rounded-full hover:bg-[#6b68e3] justify-center items-center w-full md:w-auto",
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles} {...props}>
      {children}
    </button>
  );
};
