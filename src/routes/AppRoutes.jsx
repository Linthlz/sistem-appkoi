import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.jsx';

// Layouts
import PublicLayout from '../components/layout/PublicLayout.jsx';
import DashboardLayout from '../components/layout/DashboardLayout.jsx';

// Public Pages
import LandingPage from '../pages/public/LandingPage.jsx';
import ServicesPage from '../pages/public/ServicesPage.jsx';
import NewsPage from '../pages/public/NewsPage.jsx';
import ContactPage from '../pages/public/ContactPage.jsx';
import SelayangPandangPage from '../pages/public/SelayangPandangPage.jsx';
import VisiMisiPage from '../pages/public/VisiMisiPage.jsx';
import StrukturOrganisasiPage from '../pages/public/StrukturOrganisasiPage.jsx';

// Auth Pages
import LoginPage from '../pages/auth/LoginPage.jsx';
import RegisterPage from '../pages/auth/RegisterPage.jsx';

// Dashboard Pages
import Dashboard from '../pages/dashboard/Dashboard.jsx';
import UserManagement from '../pages/dashboard/UserManagement.jsx';
import NewsManagement from '../pages/dashboard/NewsManagement.jsx';
import ServicesManagement from '../pages/dashboard/ServicesManagement.jsx';
import ProfilePage from '../pages/dashboard/ProfilePage.jsx';
import SettingsPage from '../pages/dashboard/SettingsPage.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Rute Publik dengan Layout */}
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<LandingPage />} />
                <Route path="profil/selayang-pandang" element={<SelayangPandangPage />} />
                <Route path="profil/visi-misi" element={<VisiMisiPage />} />
                <Route path="profil/struktur-organisasi" element={<StrukturOrganisasiPage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="news" element={<NewsPage />} />
                <Route path="contact" element={<ContactPage />} />
            </Route>

            {/* Rute Auth (tanpa layout) */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Rute Dashboard Terproteksi */}
            <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
                <Route index element={<Dashboard />} />
                <Route path="users" element={<UserManagement />} />
                <Route path="news" element={<NewsManagement />} />
                <Route path="services" element={<ServicesManagement />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="settings" element={<SettingsPage />} />
            </Route>

            {/* Rute Not Found */}
            <Route path="*" element={
                <div className="flex h-screen items-center justify-center">
                    404: Halaman Tidak Ditemukan
                </div>
            } />
        </Routes>
    );
};

export default AppRoutes;

