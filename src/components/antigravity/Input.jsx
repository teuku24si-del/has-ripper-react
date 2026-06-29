import React from 'react';

export const Input = ({ icon: Icon, error, className = '', ...props }) => {
  return (
    <div className="flex flex-col w-full">
      <div className={`flex items-center gap-3 px-4 py-2 w-full border rounded-lg transition-all ${
        error ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-transparent'
      } ${className}`}>
        {Icon && <Icon className={error ? "text-red-500" : "text-[#7F7CFF]"} size={18} />}
        <input 
          className="w-full text-sm bg-transparent outline-none text-gray-700 font-medium placeholder:text-gray-400" 
          {...props} 
        />
      </div>
      {error && <span className="text-[10px] text-red-500 mt-1 ml-1">{error}</span>}
    </div>
  );
};
