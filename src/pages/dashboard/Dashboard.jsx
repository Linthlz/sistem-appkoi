import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { Users, Briefcase, LayoutDashboard } from 'lucide-react';
import Card from '../../components/ui/Card';
import { overviewStats } from '../../data/dummyData';

const Dashboard = () => {
  const data = [
    { name: 'Jan', users: 400, projects: 24, revenue: 2400 },
    { name: 'Feb', users: 300, projects: 13, revenue: 2210 },
    { name: 'Mar', users: 200, projects: 98, revenue: 2290 },
    { name: 'Apr', users: 278, projects: 39, revenue: 2000 },
    { name: 'May', users: 189, projects: 48, revenue: 2181 },
    { name: 'Jun', users: 239, projects: 38, revenue: 2500 },
    { name: 'Jul', users: 349, projects: 43, revenue: 2100 },
  ];
  const pieData = [
    { name: 'Admin', value: 2 },
    { name: 'Member', value: 3 },
    { name: 'User', value: 2 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Pengguna</p>
              <p className="text-2xl font-bold">{overviewStats.totalUsers.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
              <Users size={24} />
            </div>
          </div>
          <p className="text-xs text-green-500 mt-2">+{overviewStats.newUserGrowth}% bulan ini</p>
        </Card>
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Proyek Aktif</p>
              <p className="text-2xl font-bold">{overviewStats.activeProjects}</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full text-green-600 dark:text-green-300">
              <Briefcase size={24} />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">+2 proyek dari minggu lalu</p>
        </Card>
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pendapatan (IDR)</p>
              <p className="text-2xl font-bold">{`Rp ${(overviewStats.revenue / 1000000).toFixed(1)} Jt`}</p>
            </div>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full text-yellow-600 dark:text-yellow-300">
              <LayoutDashboard size={24} />
            </div>
          </div>
          <p className="text-xs text-red-500 mt-2">-5.2% dari bulan lalu</p>
        </Card>
        <Card className="p-5">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Distribusi Role</p>
          <ResponsiveContainer width="100%" height={100}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={30} outerRadius={45} fill="#8884d8" paddingAngle={5} dataKey="value">
                {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-5">
          <h3 className="font-semibold mb-4">Aktivitas Pengguna</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#8884d8" name="Pengguna Baru" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card className="p-5">
          <h3 className="font-semibold mb-4">Kinerja Proyek</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="projects" stroke="#82ca9d" name="Proyek Selesai" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;