import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Daftar Akun Baru</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-400 text-sm mb-2">Nama Lengkap</label>
          <input type="text" className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="Nama Lengkap Anda" />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-2">Email</label>
          <input type="email" className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="email@contoh.com" />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-2">Kata Sandi</label>
          <input type="password" className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="Buat kata sandi" />
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all mt-4">
          Buat Akun
        </button>
      </form>
      <p className="text-center text-gray-400 mt-6 text-sm">
        Sudah punya akun? <Link to="/login" className="text-blue-500 hover:underline font-medium">Masuk</Link>
      </p>
    </div>
  );
};

export default Register;