// src/pages/User.jsx
import React, { useState, useEffect } from 'react';
import { userAPI } from '../services/UserAPI';
import GenericTable from '../components/GenericTable';
import AlertBox from '../components/AlertBox';
import EmptyState from '../components/EmptyState';
import LoadingSpinner from '../components/LoadingSpinner';
import { FiEdit2, FiTrash2 } from 'react-icons/fi'; // Import ikon Edit dan Hapus
import { toast } from 'sonner';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('loading'); 
  const [errorMessage, setErrorMessage] = useState('');

  // State untuk Modal Form (Tambah / Edit)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('create'); // 'create' | 'edit'
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  // State untuk Modal Konfirmasi Hapus
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Tambahkan kolom 'Aksi' di header tabel
  const tableColumns = ['Nama Lengkap', 'Email', 'Tanggal Dibuat', 'Aksi'];

  const loadAdminData = async () => {
    setStatus('loading');
    try {
      const data = await userAPI.fetchUsers();
      if (!data || data.length === 0) {
        setStatus('empty');
      } else {
        setUsers(data);
        setStatus('success');
      }
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Gagal menyambungkan ke server Supabase';
      setErrorMessage(message);
      setStatus('error');
    }
  };

  useEffect(() => {
    loadAdminData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Memicu Modal Mode Tambah Data
  const openCreateModal = () => {
    setModalMode('create');
    setFormData({ name: '', email: '', password: '' });
    setIsModalOpen(true);
  };

  // Memicu Modal Mode Edit Data beserta penempatan data lama ke form
  const openEditModal = (user) => {
    setModalMode('edit');
    setSelectedUserId(user.id);
    setFormData({
      name: user.name,
      email: user.email,
      password: user.password || '' // Menjaga jika field password kosong/ter-hash
    });
    setIsModalOpen(true);
  };

  // Memicu Konfirmasi Hapus Data
  const openDeleteModal = (user) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  // Handler Submit Utama (Membelah Logika Create vs Update)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (modalMode === 'create') {
        await userAPI.createUser(formData);
        toast.success('Admin baru berhasil ditambahkan!');
      } else {
        // Pada mode edit, kita perbarui record berdasarkan ID pilihan
        const updateData = { name: formData.name, email: formData.email };
        if (formData.password) updateData.password = formData.password; // Update password hanya jika diisi baru
        
        await userAPI.updateUser(selectedUserId, updateData);
        toast.success('Data admin berhasil diperbarui!');
      }
      
      setIsModalOpen(false);
      loadAdminData();
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Terjadi kesalahan sistem';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Eksekusi Penghapusan Data ke Supabase
  const handleDeleteExecute = async () => {
    setIsSubmitting(true);
    try {
      await userAPI.deleteUser(userToDelete.id);
      toast.success(`Akun admin ${userToDelete.name} berhasil dihapus.`);
      setIsDeleteModalOpen(false);
      loadAdminData();
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Gagal menghapus admin';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderUserRow = (user, index) => (
    <>
      <td className="px-6 py-4 font-semibold text-gray-800">{user.name}</td>
      <td className="px-6 py-4 text-gray-600">{user.email}</td>
      <td className="px-6 py-4 text-gray-400 text-xs">
        {new Date(user.created_at).toLocaleDateString('id-ID', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </td>
      {/* Kolom Aksi dengan Tombol Edit & Hapus */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => openEditModal(user)}
            className="p-2 text-blue-500 hover:bg-blue-50 rounded-xl transition-all"
            title="Edit Data Admin"
          >
            <FiEdit2 size={16} />
          </button>
          <button 
            onClick={() => openDeleteModal(user)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-all"
            title="Hapus Admin"
          >
            <FiTrash2 size={16} />
          </button>
        </div>
      </td>
    </>
  );

  return (
    <div className="p-8 w-full font-['Plus_Jakarta_Sans',sans-serif] relative">
      {/* Header Halaman */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Management Admin</h1>
          <p className="text-xs text-gray-500 mt-1">Kelola hak akses dan akun administrator dashboard Wanderly.</p>
        </div>
        <button 
          onClick={openCreateModal}
          className="bg-[#7F7CFF] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:bg-[#6b68e3] transition-all"
        >
          + Tambah Admin
        </button>
      </div>

      {/* Konten Utama Tabel */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-h-[350px] flex flex-col justify-center items-center">
        {status === 'loading' && <LoadingSpinner text="Sedang mengambil data administrator..." />}
        {status === 'error' && <div className="w-full"><AlertBox type="error">{errorMessage}</AlertBox></div>}
        {status === 'empty' && <EmptyState text="Belum ada administrator yang terdaftar di database" />}
        {status === 'success' && <GenericTable columns={tableColumns} data={users} renderRow={renderUserRow} />}
      </div>

      {/* ==================== MODAL POP-UP FORM (TAMBAH & EDIT) ==================== */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[450px] p-6 rounded-2xl shadow-xl border border-gray-100 transform scale-100 transition-all duration-200">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-bold text-gray-800">
                {modalMode === 'create' ? 'Tambah Administrator' : 'Ubah Data Administrator'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold text-lg p-1">✕</button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Masukkan nama admin"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#7F7CFF] font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="admin@wanderly.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#7F7CFF] font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Password {modalMode === 'edit' && <span className="text-[10px] text-gray-400 italic">(Kosongkan jika tidak diubah)</span>}
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required={modalMode === 'create'}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#7F7CFF] font-medium"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-gray-100 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-all"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-[#7F7CFF] text-white rounded-xl text-sm font-bold shadow-md hover:bg-[#6b68e3] disabled:bg-gray-300 transition-all"
                >
                  {isSubmitting ? 'Menyimpan...' : modalMode === 'create' ? 'Simpan Akun' : 'Perbarui Akun'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================== MODAL KONFIRMASI HAPUS ==================== */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[400px] p-6 rounded-2xl shadow-xl border border-gray-100 text-center">
            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiTrash2 size={24} />
            </div>
            <h3 className="text-base font-bold text-gray-800 mb-2">Hapus Akun Administrator?</h3>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Apakah Anda yakin ingin menghapus <strong>{userToDelete?.name}</strong>? Tindakan ini tidak dapat dibatalkan dan pengguna kehilangan akses login dashboard.
            </p>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-gray-50 border border-gray-100 transition-all flex-1"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleDeleteExecute}
                disabled={isSubmitting}
                className="px-4 py-2.5 bg-red-500 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-red-600 disabled:bg-gray-300 transition-all flex-1"
              >
                {isSubmitting ? 'Menghapus...' : 'Ya, Hapus'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;