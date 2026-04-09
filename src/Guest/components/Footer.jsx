import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Kolom 1: Brand & Desc */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg italic">T</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                Travelkui
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-70">
              Solusi cerdas untuk perjalanan impian Anda. Kami menyediakan layanan pemesanan tiket pesawat dan hotel terbaik dengan konfirmasi instan dan harga transparan.
            </p>
            <div className="flex gap-4">
              {['fb', 'tw', 'ig', 'yt'].map((social) => (
                <div key={social} className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                  <span className="text-[10px] font-bold uppercase">{social}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom 2: Layanan */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Layanan</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tiket Pesawat</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Booking Hotel</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tiket Kereta</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sewa Mobil</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Atraksi & Hiburan</a></li>
            </ul>
          </div>

          {/* Kolom 3: Perusahaan */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Perusahaan</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Karir</a></li>
            </ul>
          </div>

          {/* Kolom 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Dapatkan Promo</h4>
            <p className="text-sm opacity-70 mb-4 italic">Berlangganan newsletter untuk info diskon hingga 50%.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none" 
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-900/20">
                Berlangganan
              </button>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50">
            &copy; 2026 Travelkui Indonesia. All rights reserved.
          </p>
          <div className="flex gap-6 opacity-50">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6 grayscale hover:grayscale-0 transition-all" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6 grayscale hover:grayscale-0 transition-all" />
            <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" className="h-6 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;