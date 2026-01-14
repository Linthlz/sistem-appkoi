import React, { useState, useContext } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import Input from '@/components/ui/Input';
import StatusBadge from '@/components/common/StatusBadge';
import { AppContext } from '@/context/AppContext';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

const UserManagement = () => {
  const {
    allUsers,
    registerUser,
    updateUser,
    deleteUser
  } = useContext(AppContext);

  const [isModalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User'
  });

  const handleInputChange = (e) => {
    const { id, name, value } = e.target;
    const field = id || name;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const openAddModal = () => {
    setEditingUser(null);
    setFormData({
      id: Date.now(),
      name: '',
      email: '',
      role: 'User',
      status: 'Active',
      joined: new Date().toISOString().split('T')[0]
    });
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
      updateUser(formData);
    } else {
      registerUser(formData);
    }

    setModalOpen(false);
  };

  return (
    <Card>
      <div className="p-5 border-b dark:border-gray-700 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Manajemen Pengguna</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Kelola semua pengguna dalam sistem.
          </p>
        </div>
        <Button onClick={openAddModal}>
          <PlusCircle size={16} className="mr-2" />
          Tambah User
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <tbody className="bg-white dark:bg-gray-800 divide-y">
            {allUsers.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={`https://i.pravatar.cc/150?u=${user.email}`}
                      alt={user.name}
                    />
                    <div className="ml-4">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={user.status} />
                </td>
                <td className="px-6 py-4">{user.joined}</td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => openEditModal(user)}>
                    <Edit size={16} />
                  </button>
                  <button onClick={() => deleteUser(user.id)}>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={editingUser ? 'Edit Pengguna' : 'Tambah Pengguna'}
      >
        <form onSubmit={handleSaveUser} className="space-y-4">
          <Input id="name" label="Nama" value={formData.name} onChange={handleInputChange} />
          <Input id="email" label="Email" value={formData.email} onChange={handleInputChange} />
          <Button type="submit">Simpan</Button>
        </form>
      </Modal>
    </Card>
  );
};

export default UserManagement;
