import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useAppContext } from '@/hooks/useAppContext'; 

const RegisterPage = () => {
  const navigate = useNavigate();
  const { registerUser } = useAppContext();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
      id: `user-${Date.now()}`, // ID Unik berdasarkan timestamp
      role: 'Anggota'
    };
    registerUser(newUser);
    alert('Pendaftaran berhasil! Silakan masuk.');
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
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Buat Akun Baru</h2>
          </div>
          <form className="space-y-4" onSubmit={handleRegister}>
            <Input label="Nama Lengkap" type="text" placeholder="John Doe" 
              value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            <Input label="Alamat Email" type="email" placeholder="email@example.com" 
              value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            <Input label="Kata Sandi" type="password" placeholder="••••••••" 
              value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required />
            <Button type="submit" className="w-full">Daftar</Button>
          </form>
          <p className="text-center text-sm">
            Sudah punya akun? <Link to="/login" className="text-primary">Masuk di sini</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;