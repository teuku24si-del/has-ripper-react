import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsFillExclamationDiamondFill } from "react-icons/bs"; 
import { ImSpinner2 } from "react-icons/im"; 
// Import icon untuk melengkapi tampilan input sesuai gambar acuan
import { FiUser, FiLock } from "react-icons/fi"; 
//IMPORT FILE LOGO 
import logoWanderly from '../../assets/logo-wanderly.png';

const Login = () => {
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: '', 
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
    
    try {
      const response = await axios.post('https://dummyjson.com/user/login', {
        username: formData.email, 
        password: formData.password
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.status === 200) {
        localStorage.setItem('token', response.data.accessToken);
        
        // JALUR DIUBAH: Mengarah ke rute dashboard admin yang valid di App.jsx
        navigate('/admin/dashboard'); 
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Terjadi kesalahan pada server");
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
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 2. MENGGANTI TEKS WANDERLY DENGAN ELEMEN LOGO GAMBAR */}
      <div className="mb-10 flex justify-center items-center">
        <img 
          src={logoWanderly} 
          alt="Wanderly Logo" 
          className="h-28 sm:h-32 w-auto object-contain drop-shadow-md"
        />
      </div>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleLogin} className="w-full space-y-5">
        
        {/* Input Username (Montserrat Light - Weight 300) */}
        <div className="relative flex items-center">
          <span className="absolute left-4 text-white/70 text-lg">
            <FiUser />
          </span>
          <input 
            type="text" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            className={`w-full pl-12 pr-4 py-3.5 rounded-lg border bg-transparent text-white outline-none transition-all placeholder:text-white/60 tracking-wide font-['Montserrat'] font-light text-sm uppercase ${
              error 
                ? 'border-red-400 focus:ring-1 focus:ring-red-400' 
                : 'border-white/40 focus:border-white focus:ring-1 focus:ring-white'
            }`}
            placeholder="USERNAME" 
            required
          />
        </div>

        {/* Input Password (Montserrat Light - Weight 300) */}
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
            className={`w-full pl-12 pr-4 py-3.5 rounded-lg border bg-transparent text-white outline-none transition-all placeholder:text-white/60 tracking-wide font-['Montserrat'] font-light text-sm uppercase ${
              error 
                ? 'border-red-400 focus:ring-1 focus:ring-red-400' 
                : 'border-white/40 focus:border-white focus:ring-1 focus:ring-white'
            }`} 
            placeholder="PASSWORD" 
            required
          />
        </div>

        {/* Tombol Submit Utama / LOGIN (Montserrat SemiBold - Weight 600) */}
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

        {/* Forgot Password (Montserrat Medium - Weight 500) */}
        <div className="text-center pt-2">
          <Link 
            to="/forgot-password" 
            className="text-xs text-white/80 hover:text-white transition-colors font-['Montserrat'] font-medium tracking-wide"
          >
            Forgot password?
          </Link>
        </div>
      </form>

      {/* Info Akun Demo disesuaikan agar kontras di background biru */}
      <p className="mt-12 text-[10px] text-white/50 text-center uppercase tracking-widest font-['Montserrat'] font-light">
        Gunakan <span className="text-white font-medium underline decoration-white/40">emilys</span> & <span className="text-white font-medium underline decoration-white/40">emilyspass</span>
      </p>
    </div>
  );
};

export default Login;