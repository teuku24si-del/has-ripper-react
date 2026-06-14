// src/components/LoadingSpinner.jsx
import React from 'react';

export default function LoadingSpinner({ text = "Memuat data administrator..." }) {
    return (
        <div className="flex flex-col items-center justify-center p-12 text-center w-full">
            <div className="animate-spin rounded-full h-9 w-9 border-b-2 border-[#7F7CFF] mx-auto mb-3"></div>
            <p className="text-sm text-gray-500 font-medium">{text}</p>
        </div>
    );
}