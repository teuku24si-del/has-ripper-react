import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AuthLayouts = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center p-6">
      <div className="mb-8">
        <Link to="/" className="text-3xl font-bold text-blue-500 tracking-wider">
          TRAVEL-GO
        </Link>
      </div>
      
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-2xl">
        <Outlet /> {/* Halaman Login/Register/Forgot akan muncul di sini */}
      </div>
      
      <footer className="mt-8 text-gray-500 text-sm">
        &copy; 2026 Travel-Go. Semua hak dilindungi.
      </footer>
    </div>
  );
};

export default AuthLayouts;