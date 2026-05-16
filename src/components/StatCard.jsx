import React from 'react';

const StatCard = ({ title, value, icon, percentage, isPositive }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between font-['Plus_Jakarta_Sans',sans-serif] w-full min-h-[140px]">
      
      {/* Baris Atas: Ikon di Kiri, Tren Persentase di Kanan */}
      <div className="flex justify-between items-center w-full">
        {/* Kontainer Ikon dengan latar belakang soft blue */}
        <div className="p-2.5 bg-[#e6f7ff] text-[#108ee9] rounded-xl shrink-0">
          {icon}
        </div>
        
        {/* Tren Persentase mengikuti figma: menggunakan ikon panah tren murni bawaan tailwind */}
        <div className={`flex items-center gap-0.5 text-xs font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          <span>{isPositive ? '↗' : '↘'}</span>
          <span>{percentage}</span>
        </div>
      </div>

      {/* Baris Tengah & Bawah: Judul dan Angka ditumpuk ke bawah */}
      <div className="mt-4 flex flex-col">
        {/* Ketentuan 3, 5, 7, 9: Title = Plus Jakarta Sans SemiBold (font-semibold) */}
        <span className="text-xs font-semibold text-[#108ee9] tracking-wide">
          {title}
        </span>
        
        {/* Ketentuan 4, 6, 8, 10: Value = Plus Jakarta Sans SemiBold (font-semibold) */}
        <h3 className="text-3xl font-semibold text-[#108ee9] mt-1 tracking-tight">
          {value}
        </h3>
      </div>

    </div>
  );
};

export default StatCard;