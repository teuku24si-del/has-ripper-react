// src/components/EmptyState.jsx
import React from 'react';
import { BsDatabaseExclamation } from "react-icons/bs"; 

export default function EmptyState({ text = "Belum ada administrator terdaftar" }) {
    return (
        <div className="flex flex-col items-center justify-center p-12 text-center w-full bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <div className="text-4xl text-gray-400 mb-3 animate-pulse">
                <BsDatabaseExclamation />   
            </div>
            <p className="text-sm font-semibold text-gray-700">{text}</p>
            <p className="text-xs text-gray-400 mt-1">Silakan tambahkan user admin baru melalui tombol di atas.</p>
        </div>
    );
}