import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";
import AnimatedPage from "../components/layout/AnimatedPage.jsx";
import ScrollToTop from "../components/layout/ScrollToTop.jsx"; // 🔝 Tambahkan ini

// Layouts
import PublicLayout from "../components/layout/PublicLayout.jsx";
import DashboardLayout from "../components/layout/DashboardLayout.jsx";

// Public Pages
import LandingPage from "../pages/public/LandingPage.jsx";
import ServicesPage from "../pages/public/ServicesPage.jsx";
import NewsPage from "../pages/public/NewsPage.jsx";
import NewsDetailPage from "../pages/public/NewsDetailPage.jsx";
import SelayangPandangPage from "../pages/public/SelayangPandangPage.jsx";
import VisiMisiPage from "../pages/public/VisiMisiPage.jsx";
import StrukturOrganisasiPage from "../pages/public/StrukturOrganisasiPage.jsx";
import CertificateGalleryPage from "../pages/public/CertificateGalleryPage.jsx";
import WorkshopPage from "../pages/public/WorkshopPage.jsx";
import KurikulumPage from "../pages/public/KurikulumPage.jsx";

// Auth Pages
import LoginPage from "../pages/auth/LoginPage.jsx";
import RegisterPage from "../pages/auth/RegisterPage.jsx";

// Dashboard Pages
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import UserManagement from "../pages/dashboard/UserManagement.jsx";
import NewsManagement from "../pages/dashboard/NewsManagement.jsx";
import ServicesManagement from "../pages/dashboard/ServicesManagement.jsx";
import ProfilePage from "../pages/dashboard/ProfilePage.jsx";
import SettingsPage from "../pages/dashboard/SettingsPage.jsx";

const AppRoutes = () => {
  return (
    <>
      {/* ✅ Komponen ini memastikan setiap pindah halaman, posisi scroll balik ke atas */}
      <ScrollToTop />

      <Routes>
        {/* 🌐 PUBLIC PAGES */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="profil/selayang-pandang" element={<SelayangPandangPage />} />
          <Route path="profil/visi-misi" element={<VisiMisiPage />} />
          <Route path="profil/struktur-organisasi" element={<StrukturOrganisasiPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:id" element={<NewsDetailPage />} />
          <Route path="sertifikat" element={<CertificateGalleryPage />} />
          <Route path="program/workshop" element={<WorkshopPage />} />
          <Route path="program/kurikulum" element={<KurikulumPage />} />
        </Route>

        {/* 🔐 AUTH */}
        <Route path="/login" element={<AnimatedPage><LoginPage /></AnimatedPage>} />
        <Route path="/register" element={<AnimatedPage><RegisterPage /></AnimatedPage>} />

        {/* 🧭 DASHBOARD (PROTECTED) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AnimatedPage><Dashboard /></AnimatedPage>} />
          <Route path="users" element={<AnimatedPage><UserManagement /></AnimatedPage>} />
          <Route path="news" element={<AnimatedPage><NewsManagement /></AnimatedPage>} />
          <Route path="news/:id" element={<AnimatedPage><NewsDetailPage /></AnimatedPage>} />
          <Route path="services" element={<AnimatedPage><ServicesManagement /></AnimatedPage>} />
          <Route path="profile" element={<AnimatedPage><ProfilePage /></AnimatedPage>} />
          <Route path="settings" element={<AnimatedPage><SettingsPage /></AnimatedPage>} />
        </Route>

        {/* 🚫 404 */}
        <Route
          path="*"
          element={
            <AnimatedPage>
              <div className="flex h-screen items-center justify-center text-center text-lg font-medium">
                404: Halaman Tidak Ditemukan
              </div>
            </AnimatedPage>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
