import React from 'react';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4 text-center">Lupa Kata Sandi</h2>
      <p className="text-gray-400 text-sm text-center mb-6">
        Masukkan email Anda. Kami akan mengirimkan tautan untuk mengatur ulang kata sandi.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-400 text-sm mb-2 text-left">Alamat Email</label>
          <input type="email" className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="email@contoh.com" />
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all mt-2">
          Kirim Link Reset
        </button>
      </form>
      <div className="mt-6 text-center">
        <Link to="/login" className="text-sm text-blue-500 hover:underline inline-flex items-center">
          ← Kembali ke Halaman Masuk
        </Link>
      </div>
    </div>
  );
};

export default Forgot;