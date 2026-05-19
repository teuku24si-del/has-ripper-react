import React from "react";

export default function Avatar({ name }) {
  const initial = name ? name.charAt(0).toUpperCase() : "U";
  return (
    <div className="w-9 h-9 bg-indigo-100 text-indigo-700 font-bold rounded-full flex items-center justify-center text-sm shadow-inner shrink-0">
      {initial}
    </div>
  );
}