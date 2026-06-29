// src/components/LandingPage/FlightSection.jsx
import React, { useState } from 'react';
import { FiMapPin, FiCalendar, FiUsers, FiSearch } from 'react-icons/fi';
import { Input } from '../antigravity/Input';
import { Button } from '../antigravity/Button';

const FlightSection = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    guests: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.from) newErrors.from = 'Keberangkatan wajib diisi';
    if (!formData.to) newErrors.to = 'Tujuan wajib diisi';
    if (!formData.date) newErrors.date = 'Tanggal wajib diisi';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Proceed with search logic if needed
      console.log('Searching flights:', formData);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
      <Input 
        icon={FiMapPin} 
        placeholder="Dari mana?" 
        value={formData.from}
        onChange={(e) => setFormData({...formData, from: e.target.value})}
        error={errors.from}
      />
      <Input 
        icon={FiMapPin} 
        placeholder="Mau ke mana?" 
        value={formData.to}
        onChange={(e) => setFormData({...formData, to: e.target.value})}
        error={errors.to}
      />
      <Input 
        icon={FiCalendar} 
        type="date"
        placeholder="Tanggal Pergi" 
        value={formData.date}
        onChange={(e) => setFormData({...formData, date: e.target.value})}
        error={errors.date}
      />
      <Input 
        icon={FiUsers} 
        type="number"
        placeholder="Penumpang" 
        value={formData.guests}
        onChange={(e) => setFormData({...formData, guests: e.target.value})}
      />
      <Button variant="icon" type="submit" className="h-full">
        <FiSearch size={18} />
      </Button>
    </form>
  );
};

export default FlightSection;
