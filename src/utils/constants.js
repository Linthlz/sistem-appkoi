import {
 Home, ChevronsRight, Menu, Bell, Sun, Moon, ChevronDown, UserCircle, 
    Settings, LogOut, Briefcase, X, LayoutDashboard, Users, Newspaper, Award, BookOpen 
} from 'lucide-react';

// Path diubah agar sesuai dengan struktur di AppRoutes.jsx
export const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Manajemen User', path: '/dashboard/users', icon: Users },
    { name: 'Berita & Acara', path: '/dashboard/news', icon: Newspaper },
    { name: 'Sertifikat', path: '/dashboard/certificates', icon: Award },
    { name: 'Kurikulum', path: '/dashboard/curriculums', icon: BookOpen },
    { name: 'Program', path: '/dashboard/services', icon: Briefcase },
    { name: 'Pengaturan', path: '/dashboard/settings', icon: Settings },
];
