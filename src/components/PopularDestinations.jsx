import React from 'react';

const PopularDestinations = () => {
  const destinations = [
    { name: 'Bali, Indonesia', bookings: '842 bookings this month', status: 'High', color: 'text-blue-500 bg-blue-50', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=80&auto=format&fit=crop&q=60' },
    { name: 'Tokyo, Japan', bookings: '612 bookings this month', status: 'Steady', color: 'text-teal-500 bg-teal-50', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=80&auto=format&fit=crop&q=60' },
    { name: 'Paris, France', bookings: '495 bookings this month', status: 'Rising', color: 'text-orange-500 bg-orange-50', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=80&auto=format&fit=crop&q=60' }
  ];

  return (
    /* Mengubah font dasar komponen menjadi Plus Jakarta Sans */
    <div className="w-80 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between font-['Plus_Jakarta_Sans',sans-serif] shrink-0">
      <div>
        <div className="flex justify-between items-center mb-6">
          {/* Ketentuan 1: Popular Destinations = Plus Jakarta Sans Semibold (font-semibold) */}
          <h3 className="text-sm font-semibold text-[#1B2559]">Popular Destinations</h3>
          
          {/* Ketentuan 2: View All = Plus Jakarta Sans Bold (font-bold) */}
          <button className="text-xs font-bold text-[#7F7CFF] hover:underline">View All</button>
        </div>
        
        <div className="space-y-4">
          {destinations.map((dest, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <img src={dest.img} alt={dest.name} className="w-12 h-12 rounded-xl object-cover" />
              <div className="flex-grow min-w-0">
                {/* Ketentuan 3, 5, 9: Nama Destinasi = Plus Jakarta Sans Bold (font-bold) */}
                <h4 className="text-xs font-bold text-gray-800 truncate">{dest.name}</h4>
                
                {/* Ketentuan 6, 7, 10: Informasi Bookings = Plus Jakarta Sans Regular (font-normal) */}
                <p className="text-[10px] font-normal text-gray-400 truncate mt-0.5">{dest.bookings}</p>
              </div>
              
              {/* Ketentuan 4, 8, 11: Status Badges (High, Steady, Rising) = Plus Jakarta Sans Bold (font-bold) */}
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${dest.color}`}>
                {dest.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Promo Sisi Kanan Bawah */}
      <div className="mt-6 bg-[#1A56DB] text-white p-4 rounded-2xl relative overflow-hidden shadow-md shadow-blue-900/10">
        {/* Ketentuan 12: NEW ROUTE ALERT = Plus Jakarta Sans Bold (font-bold) */}
        <span className="text-[9px] font-bold tracking-widest text-blue-200 uppercase">
          New Route Alert
        </span>
        
        {/* Ketentuan 13: Iceland Expedition = Plus Jakarta Sans Bold (font-bold) */}
        <h4 className="text-sm font-bold mt-1 mb-3">
          Iceland Expedition
        </h4>
        
        {/* Ketentuan 14: Activate Promotion = Plus Jakarta Sans Bold (font-bold) */}
        <button className="w-full bg-white text-blue-700 text-[11px] font-bold py-2 rounded-xl hover:bg-blue-50 transition-colors">
          Activate Promotion
        </button>
      </div>
    </div>
  );
};

export default PopularDestinations;