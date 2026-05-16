import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayouts = () => {
  return (
    // Background utama menggunakan gradasi biru yang dalam dan elegan
    <div className="min-h-screen bg-gradient-to-tr from-blue-900 via-blue-700 to-blue-600 flex flex-col justify-center items-center p-6 relative overflow-hidden select-none">
      
      {/* Ornamen Estetik Gelombang/Lingkaran di Sudut Kiri Bawah */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-[16px] border-blue-400/20 pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full border-[12px] border-blue-400/10 pointer-events-none"></div>
      
      {/* Ornamen Gelombang Halus di Sisi Kanan */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Konten Utama (Form Login akan langsung menyatu tanpa card putih) */}
      <div className="w-full max-w-sm z-10">
        <Outlet /> 
      </div>
      
      {/* Footer disesuaikan agar teks putih transparan yang elegan */}
      <footer className="mt-12 text-blue-200/60 text-xs font-['Montserrat'] font-light tracking-wide z-10">
        &copy; 2026 Wanderly. Semua hak dilindungi.
      </footer>
    </div>
  );
};

export default AuthLayouts;