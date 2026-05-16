import React from 'react';
import { Outlet } from 'react-router-dom'; // IMPORT OUTLET DI SINI
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const MainLayouts = () => {
  return (
    <div className="flex bg-[#F4F7FE] min-h-screen font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden antialiased select-none">
      {/* Sidebar Kiri - Menetap */}
      <Sidebar />

      {/* Konten Sisi Kanan */}
      <div className="flex-grow flex flex-col min-w-0">
        {/* Navbar Atas - Menetap */}
        <Navbar />

        {/* Area Utama yang berganti isi secara dinamis */}
        <main className="flex-grow p-8 overflow-y-auto">
          <Outlet /> {/* Halaman Overview atau Customers akan muncul bergantian di sini */}
        </main>
      </div>
    </div>
  );
};

export default MainLayouts;