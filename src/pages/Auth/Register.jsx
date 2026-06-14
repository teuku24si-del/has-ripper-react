// src/pages/Auth/Register.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { userAPI } from '../../services/UserAPI';
import { toast } from 'sonner';

const Register = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    // Validasi sederhana: kecocokan password
    if (formData.password !== formData.confirmPassword) {
      return toast.error('Konfirmasi password tidak cocok!');
    }

    setIsSubmitting(true);
    try {
      // Menyusun payload data tanpa mengikutkan confirmPassword ke database
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      };

      // Mengirim data pendaftaran admin baru ke tabel Supabase
      await userAPI.createUser(payload);

      toast.success('Registrasi berhasil! Silakan login menggunakan akun Anda.');
      
      // Lempar pengguna ke halaman login setelah sukses mendaftar
      navigate('/login');
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Gagal melakukan registrasi';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-xl border border-gray-100 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Buat Akun Admin</h2>
        <p className="text-xs text-gray-400 mt-1">Daftarkan akun administrator baru untuk dashboard Wanderly.</p>
      </div>

      <form onSubmit={handleRegisterSubmit} className="space-y-4">
        {/* Input Nama Lengkap */}
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Nama Lengkap</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Masukkan nama lengkap"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#7F7CFF] font-medium transition-all"
          />
        </div>

        {/* Input Email */}
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Email Resmi</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="contoh@wanderly.com"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#7F7CFF] font-medium transition-all"
          />
        </div>

        {/* Input Password */}
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="••••••••"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#7F7CFF] font-medium transition-all"
          />
        </div>

        {/* Input Konfirmasi Password */}
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Konfirmasi Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            placeholder="••••••••"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#7F7CFF] font-medium transition-all"
          />
        </div>

        {/* Tombol Register */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 py-3 bg-[#7F7CFF] text-white rounded-xl text-sm font-bold shadow-md hover:bg-[#6b68e3] disabled:bg-gray-300 transition-all uppercase tracking-wider text-center"
        >
          {isSubmitting ? 'Mendaftarkan...' : 'Daftar Sekarang'}
        </button>
      </form>

      {/* Tautan Alternatif */}
      <div className="mt-6 text-center text-xs text-gray-500 font-medium">
        Sudah memiliki akun?{' '}
        <Link to="/login" className="text-[#7F7CFF] font-bold hover:underline">
          Masuk di sini
        </Link>
      </div>
    </div>
  );
};

export default Register;