import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '@/hooks/useAppContext';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { ArrowLeft } from 'lucide-react';
import Card from '@/components/ui/Card';

const LoginPage = () => {
  const { login, isAuthenticated, currentUser } = useAppContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Redirect otomatis jika sudah login
  useEffect(() => {
    if (isAuthenticated && currentUser) {
      navigate(`/dashboard/${currentUser.id}`);
    }
  }, [isAuthenticated, currentUser, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email dan kata sandi wajib diisi.');
      return;
    }

    const result = login(email, password);

    if (!result.success) {
      setError('Email atau kata sandi salah. Silakan coba lagi.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4">
      <Card className="max-w-md w-full relative">
        <div className="p-8 space-y-6">
          <Link to="/" className="absolute top-4 left-4 text-gray-400 hover:text-primary">
            <ArrowLeft size={24} />
          </Link>

          <div className="text-center">
            <h2 className="text-3xl font-bold">Masuk ke Akun</h2>
            <p className="text-sm text-gray-500">Silakan masukkan kredensial Anda</p>

            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Alamat Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Kata Sandi"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit" className="w-full">
              Masuk Sekarang
            </Button>
          </form>

          <p className="text-center text-sm">
            Belum punya akun?{' '}
            <Link to="/register" className="text-primary font-bold">
              Daftar di sini
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
