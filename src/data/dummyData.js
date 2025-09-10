// src/data/dummyData.js

export const dummyUsers = [
  { id: 1, name: 'Admin Utama', email: 'admin@organisasi.com', role: 'Admin', status: 'Active', joined: '2023-01-15' },
  { id: 2, name: 'Budi Santoso', email: 'budi.s@example.com', role: 'Member', status: 'Active', joined: '2023-02-20' },
  { id: 3, name: 'Citra Lestari', email: 'citra.l@example.com', role: 'User', status: 'Inactive', joined: '2023-03-10' },
  { id: 4, name: 'Dewi Anggraini', email: 'dewi.a@example.com', role: 'Member', status: 'Active', joined: '2023-04-05' },
  { id: 5, name: 'Eko Prasetyo', email: 'eko.p@example.com', role: 'Admin', status: 'Active', joined: '2023-05-12' },
  { id: 6, name: 'Fitriani', email: 'fitri@example.com', role: 'User', status: 'Pending', joined: '2023-06-18' },
  { id: 7, name: 'Guntur Wibowo', email: 'guntur.w@example.com', role: 'Member', status: 'Active', joined: '2023-07-22' },
];

export const dummyNews = [
  { 
    id: 1, 
    title: 'Program Pelatihan Baru Telah Dibuka!', 
    date: '2025-09-05', 
    category: 'Pengumuman', 
    excerpt: 'Kami dengan gembira mengumumkan peluncuran program pelatihan terbaru kami...' 
  },
  { 
    id: 2, 
    title: 'Laporan Tahunan 2024 Dirilis', 
    date: '2025-08-20', 
    category: 'Laporan', 
    excerpt: 'Laporan tahunan yang merangkum pencapaian dan kinerja kami selama 2024...' 
  },
  { 
    id: 3, 
    title: 'Kerjasama Strategis dengan Mitra Baru', 
    date: '2025-07-15', 
    category: 'Berita', 
    excerpt: 'Organisasi kami menjalin kerjasama strategis untuk memperluas jangkauan...' 
  },
];

export const overviewStats = {
  totalUsers: 1250,
  activeProjects: 45,
  revenue: 520500000,
  newUserGrowth: 15.8
};

export const chartData = [
  { name: 'Jan', users: 400, projects: 24, revenue: 2400 },
  { name: 'Feb', users: 300, projects: 13, revenue: 2210 },
  { name: 'Mar', users: 200, projects: 98, revenue: 2290 },
  { name: 'Apr', users: 278, projects: 39, revenue: 2000 },
  { name: 'May', users: 189, projects: 48, revenue: 2181 },
  { name: 'Jun', users: 239, projects: 38, revenue: 2500 },
  { name: 'Jul', users: 349, projects: 43, revenue: 2100 },
];

export const pieData = [
  { name: 'Admin', value: 2 },
  { name: 'Member', value: 3 },
  { name: 'User', value: 2 },
];

export const CHART_COLORS = ['#0088FE', '#00C49F', '#FFBB28'];