import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import appkoiLogo from '/logo.png';

const PublicFooter = () => (
  // PERUBAHAN: Mengganti bg-gray-900 menjadi bg-slate-800
  <footer className="bg-slate-700 text-white">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center space-x-2">
            <img src={appkoiLogo} alt="APKOI Logo" className="h-8 w-auto" />
            <span className="self-center text-2xl font-bold whitespace-nowrap tracking-wider">APKOI</span>
          </Link>
          {/* PERUBAHAN: Menyesuaikan warna teks agar lebih terang */}
          <p className="mt-4 max-w-xs text-slate-400">
            Asosiasi Pendidikan Kepelatihan Olahraga Indonesia. Membentuk pelatih profesional untuk prestasi bangsa.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Profil</h2>
            <ul className="text-slate-400 font-medium">
              <li className="mb-4">
                <Link to="/profil/selayang-pandang" className="hover:underline">Selayang Pandang</Link>
              </li>
              <li>
                <Link to="/profil/visi-misi" className="hover:underline">Visi & Misi</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Program</h2>
            <ul className="text-slate-400 font-medium">
              <li className="mb-4">
                <Link to="/sertifikat" className="hover:underline">Sertifikasi</Link>
              </li>
              <li>
                <Link to="/program/workshop" className="hover:underline">Workshop</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
            <ul className="text-slate-400 font-medium">
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
      {/* PERUBAHAN: Menyesuaikan warna garis pemisah */}
      <hr className="my-6 border-slate-700 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-slate-400 sm:text-center">© 2025 <Link to="/" className="hover:underline">APKOI™</Link>. All Rights Reserved.</span>
        <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5 rtl:space-x-reverse">
          <a href="#" className="text-slate-400 hover:text-white">
            <Facebook />
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-white">
            <Instagram />
            <span className="sr-only">Instagram page</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-white">
            <Twitter />
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-white">
            <Youtube />
            <span className="sr-only">YouTube channel</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default PublicFooter;

