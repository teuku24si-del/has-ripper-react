import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full bg-blue-700 overflow-hidden">
      {/* Ornamen Latar Belakang (Abstract Shapes) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-500 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Sisi Kiri: Teks Utama */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-400/30 px-4 py-2 rounded-full mb-6">
              <span className="text-blue-200 text-xs font-bold uppercase tracking-widest">✈️ Promo Ramadhan Travelkui</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Jelajahi Dunia <br /> 
              <span className="text-blue-300">Tanpa Khawatir</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Satu aplikasi untuk seluruh kebutuhan perjalananmu. Booking tiket pesawat dan hotel pilihan dengan harga termurah hari ini.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white">✓</div>
                <span className="text-white text-sm font-medium">Harga Jujur</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white">✓</div>
                <span className="text-white text-sm font-medium">Konfirmasi Instan</span>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Form Pencarian Modern */}
          <div className="flex-1 w-full max-w-lg">
            <div className="bg-white p-8 rounded-[2rem] shadow-2xl shadow-blue-900/20 border border-white/20">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Cari Keberangkatan</h3>
              
              <div className="space-y-4">
                {/* Input Lokasi */}
                <div className="relative">
                  <label className="text-[10px] font-bold text-slate-400 uppercase ml-4 absolute -top-2 bg-white px-2">Tujuan</label>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 focus-within:border-blue-500 transition-all">
                    <span className="text-xl">📍</span>
                    <input type="text" placeholder="Cari kota atau hotel..." className="bg-transparent w-full outline-none text-slate-700 font-medium placeholder:text-slate-300" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Input Tanggal */}
                  <div className="relative">
                    <label className="text-[10px] font-bold text-slate-400 uppercase ml-4 absolute -top-2 bg-white px-2">Pergi</label>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <input type="date" className="bg-transparent w-full outline-none text-slate-700 text-sm font-medium" />
                    </div>
                  </div>
                  {/* Input Tamu */}
                  <div className="relative">
                    <label className="text-[10px] font-bold text-slate-400 uppercase ml-4 absolute -top-2 bg-white px-2">Penumpang</label>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <select className="bg-transparent w-full outline-none text-slate-700 text-sm font-medium">
                        <option>1 Orang</option>
                        <option>2 Orang</option>
                        <option>3+ Orang</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-orange-200 transition-all active:scale-95 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196 7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  CARI SEKARANG
                </button>
              </div>

              <p className="text-center text-[10px] text-slate-400 mt-4">
                *Syarat dan ketentuan berlaku untuk setiap pemesanan.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Gelombang / Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 w-full leading-[0]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;