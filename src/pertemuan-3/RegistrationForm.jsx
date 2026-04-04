import React, { useState, useEffect } from 'react';
import InputField from './component/InputField'; 
import SelectField from './component/SelectField';

const RegistrationForm = () => {
  // State untuk menyimpan data input
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    umur: '',
    program: '',
    jadwal: ''
  });

  // State untuk menyimpan pesan error
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi Validasi (3 validasi per input)
  const validate = () => {
    let newErrors = {};

    // Validasi Nama
    if (!formData.nama) newErrors.nama = "Nama wajib diisi";
    else if (/\d/.test(formData.nama)) newErrors.nama = "Nama tidak boleh mengandung angka";
    else if (formData.nama.length < 3) newErrors.nama = "Nama minimal 3 karakter";

    // Validasi Email
    if (!formData.email) newErrors.email = "Email wajib diisi";
    else if (!formData.email.includes('@')) newErrors.email = "Email harus mengandung karakter @";
    else if (!formData.email.endsWith('.com')) newErrors.email = "Email harus berakhiran .com";

    // Validasi Umur
    if (!formData.umur) newErrors.umur = "Umur wajib diisi";
    else if (isNaN(formData.umur)) newErrors.umur = "Umur harus berupa angka";
    else if (parseInt(formData.umur) < 17) newErrors.umur = "Minimal umur adalah 17 tahun";

    // Validasi Dropdown
    if (!formData.program) newErrors.program = "Pilih program kursus";
    if (!formData.jadwal) newErrors.jadwal = "Pilih jadwal kursus";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Jalankan validasi setiap kali formData berubah
  useEffect(() => {
    validate();
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const isValid = Object.keys(errors).length === 0;

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' }}>
      <h2>Form Pendaftaran Kursus</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Nama Lengkap" name="nama" value={formData.nama} onChange={handleInputChange} error={errors.nama} />
        <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleInputChange} error={errors.email} />
        <InputField label="Umur" name="umur" value={formData.umur} onChange={handleInputChange} error={errors.umur} />
        
        <SelectField 
          label="Program Studi" 
          name="program" 
          options={['React JS', 'Laravel', 'UI/UX Design']} 
          value={formData.program} 
          onChange={handleInputChange} 
          error={errors.program} 
        />
        
        <SelectField 
          label="Waktu Kursus" 
          name="jadwal" 
          options={['Pagi (09:00)', 'Siang (13:00)', 'Malam (19:00)']} 
          value={formData.jadwal} 
          onChange={handleInputChange} 
          error={errors.jadwal} 
        />

        {/* Tombol hanya tampil jika semua inputan valid (Conditional Rendering) */}
        {isValid && (
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
            Daftar Sekarang
          </button>
        )}
      </form>

      {/* Tampilkan hasil jika submit berhasil (Conditional Rendering) */}
      {isSubmitted && isValid && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e9ecef', borderRadius: '5px' }}>
          <h3>🎉 Pendaftaran Berhasil!</h3>
          <p><strong>Nama:</strong> {formData.nama}</p>
          <p><strong>Program:</strong> {formData.program}</p>
          <p><strong>Jadwal:</strong> {formData.jadwal}</p>
          <p>Konfirmasi telah dikirim ke: <em>{formData.email}</em></p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;