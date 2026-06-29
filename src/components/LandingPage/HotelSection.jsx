// src/components/LandingPage/HotelSection.jsx
import React, { useState } from 'react';
import { FiMapPin, FiCalendar, FiUsers, FiSearch } from 'react-icons/fi';
import { Input } from '../antigravity/Input';
import { Button } from '../antigravity/Button';

const HotelSection = () => {
  const [formData, setFormData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.location) newErrors.location = 'Lokasi wajib diisi';
    if (!formData.checkIn) newErrors.checkIn = 'Check-in wajib diisi';
    if (!formData.checkOut) newErrors.checkOut = 'Check-out wajib diisi';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Proceed with search logic if needed
      console.log('Searching hotels:', formData);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
      <Input 
        icon={FiMapPin} 
        placeholder="Kota atau nama hotel" 
        value={formData.location}
        onChange={(e) => setFormData({...formData, location: e.target.value})}
        error={errors.location}
      />
      <Input 
        icon={FiCalendar} 
        type="date"
        placeholder="Check-in" 
        value={formData.checkIn}
        onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
        error={errors.checkIn}
      />
      <Input 
        icon={FiCalendar} 
        type="date"
        placeholder="Check-out" 
        value={formData.checkOut}
        onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
        error={errors.checkOut}
      />
      <Input 
        icon={FiUsers} 
        type="number"
        placeholder="Tamu & Kamar" 
        value={formData.guests}
        onChange={(e) => setFormData({...formData, guests: e.target.value})}
      />
      <Button variant="icon" type="submit" className="h-full">
        <FiSearch size={18} />
      </Button>
    </form>
  );
};

export default HotelSection;
