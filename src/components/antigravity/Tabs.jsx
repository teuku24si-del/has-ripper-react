import React, { useState } from 'react';

export const Tabs = ({ tabs, defaultTab = 0, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2 py-3 px-6 text-sm font-bold transition-all duration-300 outline-none ${
              activeTab === idx 
                ? 'text-[#7F7CFF] border-b-2 border-[#7F7CFF]' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.icon && <tab.icon size={16} />}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};
