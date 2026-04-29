import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsFillExclamationDiamondFill } from "react-icons/bs"; // Icon Error
import { ImSpinner2 } from "react-icons/im"; // Icon Loading

const Login = () => {
  const navigate = useNavigate();
  
  // State dari kode teman Anda
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // State Form (Tetap menggunakan username untuk DummyJSON)
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
    
    // Reset state sebelum mulai
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
        console.log("Login Berhasil:", response.data);
        localStorage.setItem('token', response.data.accessToken);
        
        // Redirect ke /home sesuai rute Anda sebelumnya
        navigate('/home'); 
      }
    } catch (err) {
      // Penanganan error detail seperti kode teman Anda
      if (err.response) {
        setError(err.response.data.message || "Terjadi kesalahan pada server");
      } else {
        setError(err.message || "Koneksi gagal");
      }
    } finally {
      // Pastikan loading berhenti
      setLoading(false);
    }
  };

  // Komponen info error & loading (Logic dari teman Anda)
  const errorInfo = error ? (
    <div className="bg-red-900/30 border border-red-500 mb-5 p-4 text-sm font-light text-red-200 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-500 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-blue-900/30 border border-blue-500 mb-5 p-4 text-sm text-blue-200 rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin text-blue-500" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-6 text-center tracking-tight">
        Welcome Back 👋
      </h2>

      {/* Tampilkan notifikasi jika ada */}
      {errorInfo}
      {loadingInfo}

      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label className="block text-gray-400 text-sm mb-1 font-medium">Username</label>
          <input 
            type="text" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            className={`w-full bg-black border ${error ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-all`} 
            placeholder="Contoh: emilys" 
            required
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-1 font-medium">Kata Sandi</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange}
            disabled={loading}
            className={`w-full bg-black border ${error ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-all`} 
            placeholder="••••••••" 
            required
          />
        </div>
        
        <div className="text-right">
          <Link to="/forgot-password" virtual="true" className="text-sm text-blue-500 hover:text-blue-400">
            Lupa kata sandi?
          </Link>
        </div>

        <button 
          type="submit"
          disabled={loading}
          className={`w-full ${loading ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-3 rounded-lg transition-all mt-4 flex justify-center items-center`}
        >
          {loading ? <ImSpinner2 className="animate-spin text-xl" /> : "Masuk"}
        </button>
      </form>

      <p className="mt-6 text-[10px] text-gray-600 text-center uppercase tracking-widest">
        Gunakan <span className="text-blue-900 font-bold">emilys</span> & <span className="text-blue-900 font-bold">emilyspass</span>
      </p>
    </div>
  );
};

export default Login;