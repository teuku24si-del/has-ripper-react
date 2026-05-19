import React from "react";

export default function Button({ children, type = "primary", onClick }) {
  const types = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-700",
    success: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm",
    danger: "bg-rose-600 hover:bg-rose-700 text-white shadow-sm",
    warning: "bg-amber-500 hover:bg-amber-600 text-white shadow-sm",
  };

  return (
    <button 
      onClick={onClick}
      className={`${types[type]} px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200`}
    >
      {children}
    </button>
  );
}