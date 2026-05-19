import React from "react";

export default function Badge({ children, type = "primary" }) {
  const types = {
    primary: "bg-blue-50 text-blue-700 border-blue-100",
    secondary: "bg-gray-50 text-gray-600 border-gray-100",
    success: "bg-emerald-50 text-emerald-700 border-emerald-100",
    danger: "bg-rose-50 text-rose-700 border-rose-100",
    warning: "bg-amber-50 text-amber-700 border-amber-100",
  };

  return (
    <span className={`${types[type]} border px-2.5 py-1 rounded-lg text-xs font-bold inline-block whitespace-nowrap`}>
      {children}
    </span>
  );
}