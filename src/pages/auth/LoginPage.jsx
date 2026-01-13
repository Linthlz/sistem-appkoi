import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '@/hooks/useAppContext';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { ArrowLeft } from 'lucide-react';
import Card from '@/components/ui/Card';

const LoginPage = () => {
  const { login, allUsers } = useAppContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const userFound = allUsers.find(u => u.email === email && u.password === password);

    if (userFound) {
      login(userFound);
      navigate(`/dashboard/${userFound.id}`); // Redirect ke dashboard unik
    } else {
      setError('Email atau password salah!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-4">
      <Card className="max-w-md w-full mx-auto shadow-lg relative">
        <div className="p-8 space-y-6">
          <Link to="/" className="absolute top-4 left-4 text-gray-400 hover:text-primary"><ArrowLeft size={24} /></Link>
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Masuk ke Akun</h2>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <form className="space-y-4" onSubmit={handleLogin}>
            <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button type="submit" className="w-full">Masuk</Button>
          </form>
          <p className="text-center text-sm text-gray-600">
            Belum punya akun? <Link to="/register" className="text-primary">Daftar</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;