import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

// 1. Impor gambar logo dari folder assets
import appkoiLogo from '/logo.png'; // Pastikan nama file gambarnya sesuai

const PublicFooter = () => (
  <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          {/* 2. Gunakan tag <img> untuk menampilkan logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={appkoiLogo} alt="APPKOI Logo" className="h-8 w-auto" />
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white tracking-wider">APKOI</span>
          </Link>
          <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
            Asosiasi Pendidikan Kepelatihan Olahraga Indonesia. Membentuk pelatih profesional untuk prestasi bangsa.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Profil</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/profil/selayang-pandang" className="hover:underline">Selayang Pandang</Link>
              </li>
              <li>
                <Link to="/profil/visi-misi" className="hover:underline">Visi & Misi</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Program</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/services" className="hover:underline">Sertifikasi</Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">Workshop</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">APPKOI™</Link>. All Rights Reserved.</span>
        <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5 rtl:space-x-reverse">
          <a href="#" className="text-gray-500 hover:text-primary dark:hover:text-white">
            <Facebook />
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-primary dark:hover:text-white">
            <Instagram />
            <span className="sr-only">Instagram page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-primary dark:hover:text-white">
            <Twitter />
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-primary dark:hover:text-white">
            <Youtube />
            <span className="sr-only">YouTube channel</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default PublicFooter;

