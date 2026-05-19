import React, { useState } from "react";

export default function CouponClipper({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative border-2 border-dashed border-indigo-200 bg-indigo-50/50 rounded-xl px-4 py-2 flex items-center justify-between gap-4 overflow-hidden">
      {/* Efek Lingkaran Guntingan Kupon Kiri Kanan */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-r border-indigo-200"></div>
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-l border-indigo-200"></div>
      
      <span className="font-mono font-bold text-indigo-700 tracking-wider text-sm pl-2">{code}</span>
      <button 
        onClick={handleCopy}
        className={`text-xs font-bold px-3 py-1 rounded-lg transition-colors ${
          copied ? "bg-green-600 text-white" : "bg-indigo-600 hover:bg-indigo-700 text-white"
        }`}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}