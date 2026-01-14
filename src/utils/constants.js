import { 
  LayoutDashboard, Users, Newspaper, Award, 
  BookOpen, Briefcase, Settings, FileText 
} from 'lucide-react';

export const menuItems = [
  { name: 'Dashboard', path: '', icon: LayoutDashboard, roles: ['Admin', 'Anggota'] },
  { name: 'Manajemen User', path: 'users', icon: Users, roles: ['Admin'] },
  { name: 'Berita & Acara', path: 'news', icon: Newspaper, roles: ['Admin', 'Anggota'] },
  { name: 'Sertifikat', path: 'certificates', icon: Award, roles: ['Admin', 'Anggota'] },
  { name: 'Kurikulum', path: 'curriculums', icon: BookOpen, roles: ['Admin', 'Anggota'] },
  { name: 'Program', path: 'services', icon: Briefcase, roles: ['Admin', 'Anggota'] },
  { name: 'Pengaturan', path: 'settings', icon: Settings, roles: ['Admin', 'Anggota'] },
];