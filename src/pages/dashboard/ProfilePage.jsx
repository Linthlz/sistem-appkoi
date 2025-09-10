import React, { useState } from 'react';
import { useAppContext } from '@/hooks/useAppContext';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { User, Mail, Shield, Camera, Trash2 } from 'lucide-react';

const ProfilePage = () => {
  const { currentUser, logout } = useAppContext();
  
  // State untuk menyimpan pratinjau gambar avatar yang baru
  const [avatarPreview, setAvatarPreview] = useState(`https://i.pravatar.cc/150?u=${currentUser.email}`);
  
  // State untuk data form
  const [name, setName] = useState(currentUser.name);

  // Fungsi untuk menangani saat pengguna memilih file gambar baru
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // FileReader digunakan untuk membaca file gambar dan membuat URL sementara untuk pratinjau
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Di aplikasi nyata, di sini Anda akan memanggil API untuk menyimpan perubahan
    alert(`Profil berhasil diperbarui! Nama baru: ${name}`);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Logika untuk mengubah kata sandi
    alert('Kata sandi berhasil diubah! (Simulasi)');
  };
  
  const handleDeleteAccount = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus akun Anda? Tindakan ini tidak dapat diurungkan.')) {
        alert('Akun berhasil dihapus. Anda akan dialihkan ke halaman utama.');
        logout(); // Memanggil fungsi logout dari context
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Profil Saya</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* KOLOM KIRI: FOTO PROFIL */}
        <div className="lg:col-span-1">
          <Card className="p-5 text-center flex flex-col items-center">
            <div className="relative mb-4">
              <img
                className="h-32 w-32 rounded-full object-cover mx-auto"
                src={avatarPreview}
                alt="Avatar Pengguna"
              />
              <label htmlFor="avatar-upload" className="absolute -bottom-2 -right-2 p-2 bg-primary text-white rounded-full cursor-pointer hover:bg-primary-dark transition-colors">
                <Camera size={16} />
                <input id="avatar-upload" type="file" className="hidden" accept="image/*" onChange={handleAvatarChange} />
              </label>
            </div>
            <h2 className="text-xl font-bold">{currentUser.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{currentUser.email}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary">{currentUser.role}</p>
          </Card>
        </div>

        {/* KOLOM KANAN: FORMULIR */}
        <div className="lg:col-span-2 space-y-6">
          {/* Form Informasi Pribadi */}
          <Card>
            <form onSubmit={handleProfileUpdate}>
              <div className="p-5 border-b dark:border-gray-700">
                <h2 className="text-xl font-bold flex items-center"><User className="mr-2 text-primary"/>Informasi Pribadi</h2>
              </div>
              <div className="p-5 space-y-4">
                <Input 
                  id="name" 
                  label="Nama Lengkap" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input 
                  id="email" 
                  type="email" 
                  label="Alamat Email" 
                  defaultValue={currentUser.email} 
                  disabled 
                  className="bg-gray-100 dark:bg-gray-700"
                />
              </div>
              <div className="p-5 bg-gray-50 dark:bg-gray-700/50 text-right rounded-b-lg">
                <Button type="submit">Simpan Perubahan</Button>
              </div>
            </form>
          </Card>

          {/* Form Ubah Kata Sandi */}
          <Card>
            <form onSubmit={handlePasswordChange}>
              <div className="p-5 border-b dark:border-gray-700">
                <h2 className="text-xl font-bold flex items-center"><Shield className="mr-2 text-primary"/>Ubah Kata Sandi</h2>
              </div>
              <div className="p-5 space-y-4">
                <Input id="currentPassword" type="password" label="Kata Sandi Saat Ini" placeholder="••••••••" />
                <Input id="newPassword" type="password" label="Kata Sandi Baru" placeholder="••••••••" />
                <Input id="confirmPassword" type="password" label="Konfirmasi Kata Sandi Baru" placeholder="••••••••" />
              </div>
              <div className="p-5 bg-gray-50 dark:bg-gray-700/50 text-right rounded-b-lg">
                <Button type="submit">Ubah Kata Sandi</Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

