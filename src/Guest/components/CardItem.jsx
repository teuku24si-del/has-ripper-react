import React from 'react';

const CardItem = ({ item }) => {
  const isFlight = item.kategori === 'pesawat';

  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
      {/* 1. Bagian Visual / Header Card */}
      <div className="relative aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
        {isFlight ? (
          // Representasi Visual Pesawat
          <div className="flex flex-col items-center animate-pulse">
            <span className="text-4xl">✈️</span>
            <span className="text-[10px] font-bold text-slate-400 mt-2 tracking-widest uppercase">Penerbangan</span>
          </div>
        ) : (
          // Representasi Visual Hotel
          <div className="flex flex-col items-center animate-pulse">
            <span className="text-4xl">🏨</span>
            <span className="text-[10px] font-bold text-slate-400 mt-2 tracking-widest uppercase">Penginapan</span>
          </div>
        )}
        
        {/* Badge Rating */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm flex items-center gap-1">
          <span className="text-orange-500 text-xs">★</span>
          <span className="text-slate-800 text-xs font-bold">
            {isFlight ? item.ulasan_pengguna.skor : '4.8'}
          </span>
        </div>
      </div>

      {/* 2. Konten Informasi */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter ${isFlight ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`}>
            {item.kategori}
          </span>
          {!item.status_ketersediaan && (
            <span className="text-[10px] font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded uppercase">Penuh</span>
          )}
        </div>

        <h3 className="font-bold text-slate-800 leading-tight mb-3 group-hover:text-blue-600 transition-colors truncate">
          {item.nama_item}
        </h3>

        {/* Info Detail Spesifik */}
        <div className="space-y-2 mb-4">
          {isFlight ? (
            <>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>📍</span>
                <span className="truncate">{item.detail_perjalanan.rute}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>⏱️</span>
                <span>{item.detail_perjalanan.durasi} • {item.detail_perjalanan.kelas}</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>📍</span>
                <span className="truncate">{item.lokasi_fisik.kota}, {item.lokasi_fisik.provinsi}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-blue-500 font-medium italic">
                <span>✨</span>
                <span>{item.fasilitas_kamar.pemandangan}</span>
              </div>
            </>
          )}
        </div>

        <hr className="border-slate-100 mb-4" />

        {/* 3. Harga & Action */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] text-slate-400 font-bold uppercase">Harga Mulai</p>
            <p className={`text-lg font-black ${isFlight ? 'text-blue-600' : 'text-emerald-600'}`}>
              Rp {item.harga.toLocaleString('id-ID')}
            </p>
          </div>
          
          <button 
            disabled={!item.status_ketersediaan}
            className={`p-2.5 rounded-xl transition-all ${
              item.status_ketersediaan 
              ? 'bg-slate-900 text-white hover:bg-blue-600 shadow-lg shadow-slate-200' 
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;