import React from 'react';
import PublicHeader from './PublicHeader.jsx';
import PublicFooter from './PublicFooter.jsx';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <PublicHeader />
      <main className="pt-20">
        {/* Outlet akan merender komponen halaman anak di sini */}
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;

