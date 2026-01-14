import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useAppContext } from '@/hooks/useAppContext'; 

const RegisterPage = () => {
  const navigate = useNavigate();
  const { registerUser, allUsers } = useAppContext();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    // 1. Validasi Input Kosong
    if (!formData.name || !formData.email || !formData.password) {
      setError('Semua kolom wajib diisi.');
      return;
    }

    // 2. Validasi Panjang Password
    if (formData.password.length < 6) {
      setError('Kata sandi minimal harus 6 karakter.');
      return;
    }

    // 3. Cek apakah email sudah terdaftar
    const isEmailTaken = allUsers.some(u => u.email.toLowerCase() === formData.email.toLowerCase());
    if (isEmailTaken) {
      setError('Email ini sudah terdaftar. Silakan gunakan email lain atau masuk.');
      return;
    }

    // LOGIKA PENENTU ROLE
    const determinedRole = formData.email.toLowerCase().includes('admin') ? 'Admin' : 'Anggota';

    const newUser = {
      ...formData,
      id: `user-${Date.now()}`,
      role: determinedRole
    };

    registerUser(newUser);
    alert(`Pendaftaran berhasil sebagai ${determinedRole}! Silakan masuk.`);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-4 transition-colors duration-300">
      <Card className="max-w-md w-full mx-auto shadow-lg relative overflow-hidden">
        <div className="p-8 space-y-6">
          <Link to="/" className="absolute top-4 left-4 text-gray-400 hover:text-primary transition-colors">
            <ArrowLeft size={24} />
          </Link>
          
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Buat Akun Baru</h2>
            <p className="text-sm text-gray-500 mt-2">Daftar untuk mengakses dashboard Anda</p>
            
            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}
          </div>

          <form className="space-y-4" onSubmit={handleRegister}>
            <Input 
              label="Nama Lengkap" 
              type="text" 
              placeholder="John Doe" 
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
              required 
            />
            <Input 
              label="Alamat Email" 
              type="email" 
              placeholder="email@example.com" 
              value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
              required 
            />
            <Input 
              label="Kata Sandi" 
              type="password" 
              placeholder="Min. 6 karakter" 
              value={formData.password} 
              onChange={(e) => setFormData({...formData, password: e.target.value})} 
              required 
            />
            
            <div className="pt-2 text-xs text-gray-500">
              * Tips: Gunakan email yang mengandung kata <span className="font-bold text-primary italic">'admin'</span> untuk mencoba akses sebagai Administrator.
            </div>

            <Button type="submit" className="w-full py-3 shadow-md hover:bg-primary-dark transition-all">
              Daftar Akun
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Sudah punya akun? <Link to="/login" className="text-primary font-bold hover:underline transition-all">Masuk di sini</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;