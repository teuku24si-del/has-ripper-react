import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek untuk mengubah style navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      isScrolled 
      ? 'bg-white/80 backdrop-blur-lg shadow-md py-3' 
      : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* 1. Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
            <span className="text-white font-black text-xl italic">T</span>
          </div>
          <span className={`text-xl font-black tracking-tighter transition-colors ${
            isScrolled ? 'text-blue-600' : 'text-white'
          }`}>
            TRAVELKUI
          </span>
        </div>

        {/* 2. Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-bold transition-colors ${
          isScrolled ? 'text-slate-600' : 'text-blue-50'
        }`}>
          <a href="#" className="hover:text-orange-400 transition-colors">Promo</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Pesawat</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Hotel</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Bantuan</a>
          
          <div className="h-6 w-[1px] bg-slate-300/30"></div>
          
          <button className={`transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
            Masuk
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl shadow-lg shadow-orange-500/20 transition-all active:scale-95">
            Daftar
          </button>
        </div>

        {/* 3. Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-2xl p-2"
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-slate-800' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-slate-800' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-slate-800' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* 4. Mobile Side Menu */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[110] md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8 flex flex-col gap-6">
          <button onClick={() => setIsMobileMenuOpen(false)} className="self-end text-slate-400 text-2xl">&times;</button>
          <a href="#" className="text-lg font-bold text-slate-800">Promo</a>
          <a href="#" className="text-lg font-bold text-slate-800">Pesawat</a>
          <a href="#" className="text-lg font-bold text-slate-800">Hotel</a>
          <hr />
          <button className="text-slate-800 font-bold py-2 border border-slate-200 rounded-xl">Masuk</button>
          <button className="bg-blue-600 text-white font-bold py-3 rounded-xl">Daftar Sekarang</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;