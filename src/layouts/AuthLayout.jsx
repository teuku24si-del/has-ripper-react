import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AuthLayouts = () => {
  return (
    // Background utama dibuat abu-abu sangat terang agar card putih terlihat jelas
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-6">
      <div className="mb-8">
       
      </div>
      
      {/* Aturan 1: Card diubah menjadi bg-white dengan border yang lebih soft */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <Outlet /> {/* Komponen Login akan dirender di sini */}
      </div>
      
      <footer className="mt-8 text-gray-500 text-sm">
        &copy; 2026 Travel-Go. Semua hak dilindungi.
      </footer>
    </div>
  );
};

export default AuthLayouts;