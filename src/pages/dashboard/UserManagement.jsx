import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import Input from '@/components/ui/Input';
import StatusBadge from '@/components/common/StatusBadge';
import { dummyUsers } from '@/data/dummyData';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

const UserManagement = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'User' });

  const handleInputChange = (e) => {
    const { id, name, value } = e.target;
    const field = id || name;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const openAddModal = () => {
    setEditingUser(null);
    setFormData({ id: Date.now(), name: '', email: '', role: 'User', status: 'Active', joined: new Date().toISOString().split('T')[0]});
    setModalOpen(true);
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setFormData(user);
    setModalOpen(true);
  };

  const handleSaveUser = (e) => {
    e.preventDefault();
    if (editingUser) {
      setUsers(users.map(user => user.id === editingUser.id ? formData : user));
    } else {
      setUsers([formData, ...users]);
    }
    setModalOpen(false);
  };

  const handleDeleteUser = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <Card>
      <div className="p-5 border-b dark:border-gray-700 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Manajemen Pengguna</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Kelola semua pengguna dalam sistem.</p>
        </div>
        <Button onClick={openAddModal}><PlusCircle size={16} className="mr-2" /> Tambah User</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nama</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Bergabung</th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only">Aksi</span></th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/150?u=${user.email}`} alt={user.name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={user.status} /></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.joined}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => openEditModal(user)} className="text-blue-600 hover:text-blue-900 p-2"><Edit size={16}/></button>
                  <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-900 p-2"><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title={editingUser ? 'Edit Pengguna' : 'Tambah Pengguna Baru'}>
        <form onSubmit={handleSaveUser} className="space-y-4">
          <Input id="name" label="Nama Lengkap" value={formData.name} onChange={handleInputChange} required />
          <Input id="email" type="email" label="Alamat Email" value={formData.email} onChange={handleInputChange} required />
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="flex justify-end pt-4 space-x-2">
            <Button type="button" variant="secondary" onClick={() => setModalOpen(false)}>Batal</Button>
            <Button type="submit">Simpan</Button>
          </div>
        </form>
      </Modal>
    </Card>
  );
};

export default UserManagement;