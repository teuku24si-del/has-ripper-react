import React from "react";

export default function FilterTab({ activeTab, onTabChange }) {
  const tabs = ["All", "Flights", "Hotels", "Trips"];

  return (
    <div className="flex bg-gray-100 p-1 rounded-xl">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
            activeTab === tab
              ? "bg-white text-indigo-600 shadow-sm"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}