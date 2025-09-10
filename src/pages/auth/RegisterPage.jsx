import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
// Kita akan membuat fungsi registerUser di AppContext selanjutnya
// import { useAppContext } from '@/hooks/useAppContext'; 

const RegisterPage = () => {
  const navigate = useNavigate();
  // const { registerUser } = useAppContext(); // Akan diaktifkan nanti

  const handleRegister = (e) => {
    e.preventDefault();
    // Logika untuk mendaftarkan user (untuk saat ini hanya simulasi)
    alert('Pendaftaran berhasil! Silakan masuk.');
    // registerUser(formData);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-4">
      <Card className="max-w-md w-full mx-auto shadow-lg relative">
        <div className="p-8 space-y-6">
          <Link to="/" className="absolute top-4 left-4 text-gray-400 hover:text-primary">
            <ArrowLeft size={24} />
          </Link>
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
              Buat Akun Baru
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Daftar untuk menjadi anggota APPKOI.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleRegister}>
            <Input id="name" type="text" label="Nama Lengkap" placeholder="John Doe" required />
            <Input id="email" type="email" label="Alamat Email" placeholder="email@example.com" required />
            <Input id="password" type="password" label="Kata Sandi" placeholder="••••••••" required />
            <div>
              <Button type="submit" className="w-full">
                Daftar
              </Button>
            </div>
          </form>
          <p className="text-center text-sm">
            Sudah punya akun?{' '}
            <Link to="/login" className="font-medium text-primary hover:text-primary-dark">
              Masuk di sini
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;
