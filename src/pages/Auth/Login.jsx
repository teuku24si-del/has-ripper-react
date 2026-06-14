// src/pages/Auth/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // PERBAIKAN: Dialihkan ke library axios yang benar
import { BsFillExclamationDiamondFill } from "react-icons/bs"; 
import { ImSpinner2 } from "react-icons/im"; 
import { FiUser, FiLock } from "react-icons/fi"; 
import logoWanderly from '../../assets/logo-wanderly.png';

const Login = () => {
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: '', // Berfungsi sebagai input email login
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // Kredensial Supabase Anda
    const API_URL = "https://mxakqvcstxgyobxzrodw.supabase.co/rest/v1/User";
    const API_KEY = "sb_publishable_T-3OWnAwnCCVK09Sp_5NzQ_zZji8bib";

    try {
      // Menembak data dengan mencocokkan email dan password secara bersamaan
      const response = await axios.get(
        `${API_URL}?email=eq.${formData.email}&password=eq.${formData.password}`, 
        {
          headers: { 
            "apikey": API_KEY,
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json" 
          }
        }
      );
      
      // Jika respons sukses dan data ditemukan (array tidak kosong)
      if (response.status === 200) {
        if (response.data.length > 0) {
          const loggedInUser = response.data[0];
          
          // Menyimpan token dummy atau ID admin yang berhasil login ke localStorage
          localStorage.setItem('token', `session_admin_${loggedInUser.id}`);
          
          // Melempar masuk admin ke dalam dashboard utama
          navigate('/admin/dashboard'); 
        } else {
          // Jika data di database mengembalikan array kosong [], berarti akun salah
          setError("Email atau Password yang Anda masukkan salah.");
        }
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Terjadi kesalahan koneksi database.");
      } else {
        setError(err.message || "Koneksi gagal");
      }
    } finally {
      setLoading(false);
    }
  };

  const errorInfo = error ? (
    <div className="w-full bg-red-500/20 border border-red-500/30 mb-5 p-4 text-sm text-red-200 rounded-lg flex items-center backdrop-blur-sm">
      <BsFillExclamationDiamondFill className="text-red-300 me-2 text-lg shrink-0" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="w-full bg-blue-500/20 border border-blue-400/30 mb-5 p-4 text-sm text-blue-200 rounded-lg flex items-center backdrop-blur-sm">
      <ImSpinner2 className="me-2 animate-spin text-blue-300 shrink-0" />
      Memverifikasi Akun...
    </div>
  ) : null;

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Logo Gambar */}
      <div className="mb-10 flex justify-center items-center">
        <img 
          src={logoWanderly} 
          alt="Wanderly Logo" 
          className="h-50 sm:h-50 w-auto object-contain drop-shadow-md"
        />
      </div>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleLogin} className="w-full space-y-5">
        
        {/* Input Email / Username */}
        <div className="relative flex items-center">
          <span className="absolute left-4 text-white/70 text-lg">
            <FiUser />
          </span>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            className={`w-full pl-12 pr-4 py-3.5 rounded-lg border bg-transparent text-white outline-none transition-all placeholder:text-white/60 tracking-wide font-['Montserrat'] font-light text-sm ${
              error 
                ? 'border-red-400 focus:ring-1 focus:ring-red-400' 
                : 'border-white/40 focus:border-white focus:ring-1 focus:ring-white'
            }`}
            placeholder="EMAIL ADDRESS" 
            required
          />
        </div>

        {/* Input Password */}
        <div className="relative flex items-center">
          <span className="absolute left-4 text-white/70 text-lg">
            <FiLock />
          </span>
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange}
            disabled={loading}
            className={`w-full pl-12 pr-4 py-3.5 rounded-lg border bg-transparent text-white outline-none transition-all placeholder:text-white/60 tracking-wide font-['Montserrat'] font-light text-sm ${
              error 
                ? 'border-red-400 focus:ring-1 focus:ring-red-400' 
                : 'border-white/40 focus:border-white focus:ring-1 focus:ring-white'
            }`} 
            placeholder="PASSWORD" 
            required
          />
        </div>

        {/* Tombol LOGIN */}
        <div className="pt-2">
          <button 
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-lg bg-white text-blue-900 tracking-widest font-['Montserrat'] font-semibold text-sm uppercase shadow-lg shadow-blue-950/20 transition-all active:scale-[0.99] ${
              loading ? 'bg-white/80 cursor-not-allowed' : 'hover:bg-blue-50'
            }`}
          >
            {loading ? <ImSpinner2 className="animate-spin text-xl mx-auto text-blue-900" /> : "LOGIN"}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-center pt-2">
          <Link 
            to="/forgot-password" 
            className="text-xs text-white/80 hover:text-white transition-colors font-['Montserrat'] font-medium tracking-wide"
          >
            Forgot password?
          </Link>
        </div>
      </form>

      {/* Info Tambahan Registrasi */}
      <div className="mt-8 text-center text-xs text-white/60 font-medium">
        Belum punya akun admin?{' '}
        <Link to="/register" className="text-white font-bold hover:underline">
          Daftar di sini
        </Link>
      </div>
    </div>
  );
};

export default Login;