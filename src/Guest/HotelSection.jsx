import React from 'react';
import data from './data/framework.json';

const HotelSection = () => {
  // Filter data khusus hotel
  const hotels = data.filter(item => item.kategori === 'hotel');

  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Hotel & Penginapan Pilihan</h2>
          <p className="text-slate-500 text-sm">Istirahat nyaman dengan fasilitas bintang lima.</p>
        </div>
        <button className="text-emerald-600 font-bold text-sm hover:underline">Eksplor Peta →</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="group cursor-pointer">
            <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-3xl bg-slate-200 shadow-inner">
               {/* Placeholder untuk Image */}
               <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-medium">
                  Image Placeholder
               </div>
               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                  <span className="text-orange-500 font-bold">★ {hotel.ulasan_pengguna?.skor || '4.8'}</span>
               </div>
            </div>

            <div className="px-2">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-lg text-slate-800 group-hover:text-emerald-600 transition-colors">
                  {hotel.nama_item}
                </h3>
              </div>
              <p className="text-sm text-slate-500 mb-3 flex items-center gap-1">
                📍 {hotel.lokasi_fisik.kota}, {hotel.lokasi_fisik.provinsi}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-[10px] border border-slate-200 px-2 py-0.5 rounded text-slate-500 italic">
                  {hotel.fasilitas_kamar.pemandangan}
                </span>
                {hotel.fasilitas_kamar.wifi_gratis && (
                  <span className="text-[10px] border border-slate-200 px-2 py-0.5 rounded text-slate-500">Free WiFi</span>
                )}
              </div>

              <div className="flex items-end justify-between border-t border-slate-100 pt-4">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Mulai dari</p>
                  <p className="text-xl font-black text-emerald-600">Rp {hotel.harga.toLocaleString('id-ID')}</p>
                </div>
                <button className="text-sm font-bold text-white bg-slate-900 px-5 py-2 rounded-xl hover:bg-emerald-600 transition-all">
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