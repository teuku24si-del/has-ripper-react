import React from "react";

export default function ProgressBar({ current, total }) {
  const percentage = Math.min((current / total) * 100, 100);
  
  return (
    <div className="w-full space-y-1.5">
      <div className="flex justify-between text-xs text-gray-500 font-medium">
        <span>Claimed limit</span>
        <span className="font-bold text-gray-700">{current} / {total} Coupons</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-indigo-600 h-2 rounded-full transition-all duration-500" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}