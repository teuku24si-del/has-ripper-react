// src/components/antigravity/Banner.jsx
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

export const Banner = ({ children, dismissible = true, onClose, className = '' }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className={`w-full py-2 px-4 flex items-center justify-between transition-all ${className}`}>
      <div className="flex-1 flex justify-center items-center text-sm font-medium">
        {children}
      </div>
      {dismissible && (
        <button onClick={handleClose} className="p-1 hover:bg-black/10 rounded-full transition-colors outline-none shrink-0">
          <FiX size={16} />
        </button>
      )}
    </div>
  );
};
