import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '@/hooks/useAppContext';
import { dummyUsers } from '@/data/dummyData';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { ArrowLeft } from 'lucide-react';
import Card from '@/components/ui/Card';

const LoginPage = () => {
  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulasi login sukses
    login(dummyUsers[0]);
    navigate('/dashboard');
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
              Masuk ke Akun Anda
            </h2>
          </div>
          <form className="space-y-4" onSubmit={handleLogin}>
            <Input 
              id="email" 
              type="email" 
              label="Alamat Email" 
              placeholder="email@example.com" 
              defaultValue="admin@organisasi.com"
            />
            <Input 
              id="password" 
              type="password" 
              label="Kata Sandi" 
              placeholder="••••••••" 
              defaultValue="password"
            />
            <div className="flex items-center justify-between text-sm">
                <label htmlFor="remember-me" className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"/>
                    Ingat saya
                </label>
                <a href="#" className="font-medium text-primary hover:text-primary-dark">
                    Lupa kata sandi?
                </a>
            </div>
            <div>
              <Button type="submit" className="w-full">
                Masuk
              </Button>
            </div>
          </form>
          {/* --- BAGIAN YANG DITAMBAHKAN --- */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Belum punya akun?{' '}
            <Link to="/register" className="font-medium text-primary hover:text-primary-dark">
              Daftar di sini
            </Link>
          </p>
          {/* ----------------------------- */}
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;

