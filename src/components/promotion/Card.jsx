import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white border border-gray-100 p-6 rounded-2xl shadow-sm ${className}`}>
      {children}
    </div>
  );
}