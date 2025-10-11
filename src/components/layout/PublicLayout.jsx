import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PublicHeader from './PublicHeader.jsx';
import PublicFooter from './PublicFooter.jsx';
import AnimatedPage from './AnimatedPage.jsx'; // ✅ pastikan path benar

const PublicLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    // ✨ Seluruh layout dibungkus animasi
    <AnimatedPage>
      <div className="bg-gray-50 dark:bg-gray-800 min-h-screen flex flex-col">
        <PublicHeader />

        {/* 
          PERBAIKAN:
          - Tidak ada padding-top di halaman beranda agar slider fullscreen tetap pas.
          - Halaman lain tetap diberi padding agar konten tidak tertutup header.
        */}
        <main className={`flex-grow ${!isHomePage ? 'pt-20' : ''}`}>
          <Outlet />
        </main>

        <PublicFooter />
      </div>
    </AnimatedPage>
  );
};

export default PublicLayout;
