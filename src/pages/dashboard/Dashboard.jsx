import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { Users, Briefcase, DollarSign, BookOpen, Newspaper, Award } from 'lucide-react';

// --- Data Dummy & Komponen UI Lokal ---
// Karena ada masalah resolusi path, data dan komponen didefinisikan di sini.

const overviewStats = {
  totalUsers: 1250,
  newUserGrowth: 15.8,
  publishedNews: 45,
  certificatesIssued: 520,
  activeCurriculums: 5,
};

const Card = ({ children, className }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);
// --- Akhir dari Definisi Lokal ---


const Dashboard = () => {
  const activityData = [
    { name: 'Jan', users: 400, projects: 24, revenue: 2400 },
    { name: 'Feb', users: 300, projects: 13, revenue: 2210 },
    { name: 'Mar', users: 200, projects: 98, revenue: 2290 },
    { name: 'Apr', users: 278, projects: 39, revenue: 2000 },
    { name: 'May', users: 189, projects: 48, revenue: 2181 },
    { name: 'Jun', users: 239, projects: 38, revenue: 2500 },
    { name: 'Jul', users: 349, projects: 43, revenue: 2100 },
  ];

  const roleData = [
    { name: 'Admin', value: 5 },
    { name: 'Anggota', value: 85 },
    { name: 'Staf', value: 10 },
  ];
  const COLORS = ['#DC2626', '#F97316', '#EC4899']; // Red, Orange, Pink

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Anggota</p>
              <p className="text-2xl font-bold">{overviewStats.totalUsers.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full text-red-600 dark:text-red-300">
              <Users size={24} />
            </div>
          </div>
          <p className="text-xs text-green-500 mt-2">+{overviewStats.newUserGrowth}% bulan ini</p>
        </Card>
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Artikel & Berita</p>
              <p className="text-2xl font-bold">{overviewStats.publishedNews}</p>
            </div>
            <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full text-orange-600 dark:text-orange-300">
              <Newspaper size={24} />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">+2 artikel dari minggu lalu</p>
        </Card>
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Sertifikat Terbit</p>
              <p className="text-2xl font-bold">{overviewStats.certificatesIssued}</p>
            </div>
            <div className="p-3 bg-pink-100 dark:bg-pink-900 rounded-full text-pink-600 dark:text-pink-300">
                <Award size={24} />
            </div>
          </div>
           <p className="text-xs text-green-500 mt-2">+10 sertifikat bulan ini</p>
        </Card>
        <Card className="p-5">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">Program Aktif</p>
                    <p className="text-2xl font-bold">{overviewStats.activeCurriculums}</p>
                </div>
                <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full text-red-600 dark:text-red-300">
                    <BookOpen size={24} />
                </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Total {overviewStats.activeCurriculums} program</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <Card className="lg:col-span-3 p-5">
          <h3 className="font-semibold mb-4">Aktivitas Anggota Baru</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#EF4444" name="Anggota Baru" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card className="lg:col-span-2 p-5">
          <h3 className="font-semibold mb-4">Distribusi Keanggotaan</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={roleData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {roleData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

