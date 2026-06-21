// src/components/LandingPage/Contact.jsx
import React from 'react';
import NavbarL from './NavbarL';
import FooterL from './FooterL';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="w-full bg-white text-gray-800 font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden pt-20">
      <NavbarL />
      
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">Get in Touch</h1>
          <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">Have questions about your next adventure? Our team is here to help you 24/7.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-sm border border-gray-100 p-2 md:p-4 overflow-hidden">
          {/* Contact Information */}
          <div className="bg-[#7F7CFF] rounded-2xl p-8 md:p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
              <p className="text-white/80 text-sm mb-10">Fill up the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4"><FiPhone size={20} className="text-white/80" /><span className="text-sm font-medium">+1 (800) 123-4567</span></div>
                <div className="flex items-center gap-4"><FiMail size={20} className="text-white/80" /><span className="text-sm font-medium">support@wanderly.com</span></div>
                <div className="flex items-center gap-4"><FiMapPin size={20} className="text-white/80" /><span className="text-sm font-medium leading-relaxed">123 Explorer Street,<br />Travelers District, NY 10001</span></div>
              </div>
            </div>
            <div className="mt-16 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-xs font-bold text-gray-700 mb-2">First Name</label><input type="text" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-xl text-sm outline-none focus:border-[#7F7CFF]" placeholder="John" /></div>
                <div><label className="block text-xs font-bold text-gray-700 mb-2">Last Name</label><input type="text" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-xl text-sm outline-none focus:border-[#7F7CFF]" placeholder="Doe" /></div>
              </div>
              <div><label className="block text-xs font-bold text-gray-700 mb-2">Email Address</label><input type="email" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-xl text-sm outline-none focus:border-[#7F7CFF]" placeholder="john@example.com" /></div>
              <div><label className="block text-xs font-bold text-gray-700 mb-2">Message</label><textarea rows="4" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-xl text-sm outline-none focus:border-[#7F7CFF] resize-none" placeholder="How can we help you?"></textarea></div>
              <button type="button" className="bg-[#7F7CFF] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-[#6b68e3] transition-all flex items-center justify-center gap-2 w-full md:w-auto"><FiSend size={16} /> Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <FooterL />
    </div>
  );
};

export default Contact;