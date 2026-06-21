// src/pages/Auth/RegisterL.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { userAPI } from '../../services/UserAPI';
import { toast } from 'sonner';
import { ImSpinner2 } from "react-icons/im"; 
import { FiUser, FiMail, FiLock } from "react-icons/fi"; 
import logoWanderly from '../../assets/logo-wanderly.png';

const RegisterL = () => {
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
      return toast.error('Password confirmation does not match!');
    }

    setIsSubmitting(true);
    try {
      // Menyusun payload data tanpa mengikutkan confirmPassword ke database
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      };

      // Mengirim data pendaftaran member baru menggunakan API yang sama
      await userAPI.createUser(payload);

      toast.success('Account created successfully! Please log in.');
      
      // Lempar pengguna ke halaman login member setelah sukses mendaftar
      // Pastikan '/login-member' sesuai dengan rute LoginL Anda di App.jsx
      navigate('/login-member'); 
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Registration failed';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#F8F9FD] font-['Plus_Jakarta_Sans',sans-serif] p-6 relative overflow-hidden">
      
      {/* Ornamen Dekorasi Background */}
      <div className="absolute top-0 left-0 w-full h-96 bg-[#7F7CFF] rounded-b-[100px] z-0"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl z-0"></div>
      <div className="absolute top-40 left-20 w-48 h-48 bg-white/20 rounded-full blur-3xl z-0"></div>

      {/* Card Form Register */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 z-10 relative my-10">
        
        {/* Logo & Header */}
        <div className="mb-8 flex flex-col justify-center items-center text-center">
          <Link to="/">
            <img 
              src={logoWanderly} 
              alt="Wanderly Logo" 
              className="h-10 w-auto object-contain drop-shadow-sm mb-6"
            />
          </Link>
          <h2 className="text-2xl font-extrabold text-gray-800">Join Wanderly</h2>
          <p className="text-sm text-gray-500 mt-1">Create an account to start your journey.</p>
        </div>

        <form onSubmit={handleRegisterSubmit} className="w-full space-y-4">
          
          {/* Input Full Name */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Full Name</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400 text-lg">
                <FiUser />
              </span>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-100 bg-gray-50 text-gray-800 outline-none transition-all placeholder:text-gray-400 text-sm font-medium focus:border-[#7F7CFF] focus:bg-white focus:ring-4 focus:ring-blue-50"
                placeholder="John Doe" 
                required
              />
            </div>
          </div>

          {/* Input Email */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Email Address</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400 text-lg">
                <FiMail />
              </span>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-100 bg-gray-50 text-gray-800 outline-none transition-all placeholder:text-gray-400 text-sm font-medium focus:border-[#7F7CFF] focus:bg-white focus:ring-4 focus:ring-blue-50"
                placeholder="john@example.com" 
                required
              />
            </div>
          </div>

          {/* Input Password */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Password</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400 text-lg">
                <FiLock />
              </span>
              <input 
                type="password" 
                name="password" 
                value={formData.password}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-100 bg-gray-50 text-gray-800 outline-none transition-all placeholder:text-gray-400 text-sm font-medium focus:border-[#7F7CFF] focus:bg-white focus:ring-4 focus:ring-blue-50" 
                placeholder="••••••••" 
                required
              />
            </div>
          </div>

          {/* Input Confirm Password */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Confirm Password</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400 text-lg">
                <FiLock />
              </span>
              <input 
                type="password" 
                name="confirmPassword" 
                value={formData.confirmPassword}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-100 bg-gray-50 text-gray-800 outline-none transition-all placeholder:text-gray-400 text-sm font-medium focus:border-[#7F7CFF] focus:bg-white focus:ring-4 focus:ring-blue-50" 
                placeholder="••••••••" 
                required
              />
            </div>
          </div>

          {/* Tombol REGISTER */}
          <div className="pt-4">
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] flex justify-center items-center ${
                isSubmitting ? 'bg-[#7F7CFF]/70 cursor-not-allowed' : 'bg-[#7F7CFF] hover:bg-[#6b68e3]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <ImSpinner2 className="animate-spin text-xl mr-2 text-white" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </div>
        </form>

        {/* Info Tambahan Login */}
        <div className="mt-8 text-center text-sm text-gray-500 font-medium">
          Already have an account?{' '}
          <Link to="/login-member" className="text-[#7F7CFF] font-bold hover:underline">
            Log in here
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default RegisterL;