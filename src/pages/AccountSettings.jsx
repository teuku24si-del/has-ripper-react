// src/pages/AccountSettings.jsx
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner"; 

// Import komponen-komponen baru shadcn/ui yang kamu sediakan
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Skema Validasi menggunakan Zod
const profileFormSchema = z.object({
  username: z.string().min(3, { message: "Username minimal harus 3 karakter." }),
  email: z.string().email({ message: "Format email tidak valid." }),
});

const AccountSettings = () => {
  // Inisialisasi React Hook Form
  const profileForm = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: "Teuku Muhammad Hasbi",
      email: "hasbi@wanderly.com",
    },
  });

  // Aksi saat form profil disimpan
  const onProfileSubmit = (data) => {
    toast.success("Berhasil disimpan!", {
      description: `Profil admin atas nama ${data.username} telah diperbarui.`,
    });
  };

  return (
    <div className="p-6 font-['Plus_Jakarta_Sans',sans-serif] w-full max-w-4xl">
      {/* Header Utama */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Account Settings</h1>
        <p className="text-sm text-gray-500 mt-1">
          Kelola informasi profil personal, kendali otomatisasi email, dan konfigurasi maintenance platform Wanderly.
        </p>
      </div>

      {/* IMPLEMENTASI SHADCN/UI TABS */}
      <Tabs defaultValue="profile" className="w-full">
        {/* Kontainer baris tab dengan penyesuaian warna ungu halus */}
        <TabsList className="bg-gray-100/80 p-1 rounded-xl mb-6">
          <TabsTrigger value="profile" className="px-5 py-2 font-semibold text-xs uppercase tracking-wider">
            Profil Admin
          </TabsTrigger>
          <TabsTrigger value="preferences" className="px-5 py-2 font-semibold text-xs uppercase tracking-wider">
            Preferensi Sistem
          </TabsTrigger>
        </TabsList>

        {/* ================= TAB CONTENT: PROFIL ADMIN ================= */}
        <TabsContent value="profile" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 focus-visible:outline-none">
          <div className="mb-6">
            <h2 className="text-base font-bold text-gray-800">Informasi Personal</h2>
            <p className="text-xs text-gray-400 mt-0.5">Perbarui kredensial akun utama yang mengelola portal data ini.</p>
          </div>

          <Form {...profileForm}>
            <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-5 max-w-md">
              <FormField
                control={profileForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="space-y-1.5">
                    <FormLabel className="text-xs font-bold text-gray-600 uppercase tracking-wider">Nama Pengguna</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Masukkan username" 
                        {...field} 
                        className="rounded-xl h-10 border-gray-200 focus-visible:border-[#7F7CFF] focus-visible:ring-[#7F7CFF]/20" 
                      />
                    </FormControl>
                    <FormMessage className="text-xs font-medium text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={profileForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1.5">
                    <FormLabel className="text-xs font-bold text-gray-600 uppercase tracking-wider">Alamat Email Resmi</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Masukkan alamat email" 
                        {...field} 
                        className="rounded-xl h-10 border-gray-200 focus-visible:border-[#7F7CFF] focus-visible:ring-[#7F7CFF]/20" 
                      />
                    </FormControl>
                    <FormMessage className="text-xs font-medium text-red-500" />
                  </FormItem>
                )}
              />

              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="bg-[#7F7CFF] hover:bg-[#6C69E6] text-white font-bold px-6 py-5 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Simpan Perubahan
                </Button>
              </div>
            </form>
          </Form>
        </TabsContent>

        {/* ================= TAB CONTENT: PREFERENSI SISTEM ================= */}
        <TabsContent value="preferences" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 focus-visible:outline-none">
          <div className="mb-2">
            <h2 className="text-base font-bold text-gray-800">Otomatisasi & Status</h2>
            <p className="text-xs text-gray-400 mt-0.5">Atur kendali global operasional aplikasi secara langsung.</p>
          </div>

          <div className="divide-y divide-gray-100">
            {/* Opsi Switch 1 - Maintenance */}
            <div className="flex items-center justify-between py-4">
              <div className="space-y-1 pr-4">
                <label className="text-sm font-bold text-gray-700">Sistem Perbaikan (Maintenance)</label>
                <p className="text-xs text-gray-400 max-w-lg">
                  Mengunci portal web pelanggan untuk sementara waktu selama pembaruan basis data rute perjalanan berlangsung.
                </p>
              </div>
              <Switch 
                onCheckedChange={(checked) => {
                  if (checked) {
                    toast.warning("Sistem Terkunci", {
                      description: "Mode perbaikan aktif. Pelanggan umum diarahkan ke halaman siaga.",
                    });
                  } else {
                    toast.info("Sistem Normal", {
                      description: "Portal Wanderly kembali dibuka untuk umum.",
                    });
                  }
                }}
              />
            </div>

            {/* Opsi Switch 2 - Email Automations */}
            <div className="flex items-center justify-between py-4">
              <div className="space-y-1 pr-4">
                <label className="text-sm font-bold text-gray-700">Buletin Email Otomatis</label>
                <p className="text-xs text-gray-400 max-w-lg">
                  Kirimkan pemberitahuan kupon promosi dan paket flash sale secara berkala langsung ke kotak masuk member terdaftar.
                </p>
              </div>
              <Switch 
                defaultChecked
                onCheckedChange={(checked) => {
                  if (checked) {
                    toast.success("Otomatisasi Aktif", {
                      description: "Kampanye email newsletter mingguan akan berjalan normal.",
                    });
                  } else {
                    toast.error("Otomatisasi Dimatikan", {
                      description: "Pengiriman email blast dihentikan sementara.",
                    });
                  }
                }}
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountSettings;