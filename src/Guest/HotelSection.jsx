import React from 'react';
import data from './data/framework.json';

const HotelSection = () => {
  // Filter data khusus kategori hotel
  const hotels = data.filter(item => item.kategori === 'hotel');

  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Hotel & Penginapan Pilihan</h2>
          <p className="text-slate-500 text-sm">Istirahat nyaman dengan fasilitas bintang lima.</p>
        </div>
        <button className="text-emerald-600 font-bold text-sm hover:underline transition-all">
          Eksplor Peta →
        </button>
      </div>

      {/* Grid Grid Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="group cursor-pointer">
            {/* Bagian Gambar / Visual */}
            <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-3xl bg-slate-200 shadow-inner">
              {/* Logika menampilkan gambar atau placeholder jika gambar tidak ada */}
              {hotel.gambar ? (
                <img 
                  src={hotel.gambar} 
                  alt={hotel.nama_item} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-medium">
                  Image Not Available
                </div>
              )}

              {/* Badge Rating */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                <span className="text-orange-500 text-xs">★</span>
                <span className="text-slate-800 font-bold text-sm">
                  {hotel.ulasan_pengguna?.skor || '4.8'}
                </span>
              </div>
            </div>

            {/* Bagian Informasi Detail */}
            <div className="px-2">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-lg text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                  {hotel.nama_item}
                </h3>
              </div>
              
              <p className="text-sm text-slate-500 mb-3 flex items-center gap-1">
                <span className="text-emerald-500 italic">📍</span> 
                {hotel.lokasi_fisik.kota}, {hotel.lokasi_fisik.provinsi}
              </p>
              
              {/* Tags Fasilitas */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-[10px] bg-slate-100 border border-slate-200 px-2 py-1 rounded-md text-slate-600 font-medium italic">
                  {hotel.fasilitas_kamar.pemandangan}
                </span>
                {hotel.fasilitas_kamar.wifi_gratis && (
                  <span className="text-[10px] bg-blue-50 border border-blue-100 px-2 py-1 rounded-md text-blue-600 font-medium">
                    Free WiFi
                  </span>
                )}
              </div>

              {/* Divider & Harga */}
              <div className="flex items-end justify-between border-t border-slate-100 pt-4 mt-2">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Mulai dari</p>
                  <p className="text-xl font-black text-emerald-600">
                    Rp {hotel.harga.toLocaleString('id-ID')}
                  </p>
                </div>
                <button className="text-sm font-bold text-white bg-slate-900 px-6 py-2.5 rounded-xl hover:bg-emerald-600 shadow-md transition-all active:scale-95">
                  Cek Kamar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelSection;