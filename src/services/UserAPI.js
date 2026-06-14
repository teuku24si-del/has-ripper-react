import axios from 'axios';

// Konfigurasi endpoint URL dan API Key proyek Supabase Anda
const API_URL = "https://mxakqvcstxgyobxzrodw.supabase.co/rest/v1/User";
const API_KEY = "sb_publishable_T-3OWnAwnCCVK09Sp_5NzQ_zZji8bib"; 

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
};

export const userAPI = {
    // Fungsi untuk mengambil/menampilkan seluruh data admin login
    async fetchUsers() {
        const response = await axios.get(API_URL, { headers });
        return response.data;
    },

    // Fungsi untuk membuat/menambahkan akun admin baru
    async createUser(data) {
        const response = await axios.post(API_URL, data, { headers });
        return response.data;
    },

    // ===== TAMBAHAN FUNGSI EDIT =====
    async updateUser(id, data) {
        const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers });
        return response.data;
    },

    // ===== TAMBAHAN FUNGSI HAPUS =====
    async deleteUser(id) {
        const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
        return response.data;
    }
};