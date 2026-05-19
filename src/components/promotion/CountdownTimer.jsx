import React from "react";

export default function CountdownTimer({ hours, minutes }) {
  return (
    <div className="flex items-center gap-1 bg-red-50 border border-red-100 text-red-600 px-2.5 py-1 rounded-lg text-xs font-bold animate-pulse">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Ends in: {hours}h {minutes}m</span>
    </div>
  );
}