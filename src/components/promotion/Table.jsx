import React from "react";

export default function Table({ headers, children }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse bg-white">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50/70">
            {headers.map((header, index) => (
              <th 
                key={index} 
                className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
}