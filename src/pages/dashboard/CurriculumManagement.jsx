import React, { useState } from 'react';
import { PlusCircle, Edit, Trash2, Paperclip } from 'lucide-react';

// --- KOMPONEN UI & DATA (digabung untuk mengatasi error import) ---

const Card = ({ children, className }) => <div className={`bg-white shadow rounded-lg ${className}`}>{children}</div>;
const Button = ({ children, onClick, type = "button", variant = "primary", className = "" }) => {
    const primaryStyles = "bg-red-600 text-white hover:bg-red-700";
    const secondaryStyles = "bg-gray-200 text-gray-800 hover:bg-gray-300";
    return <button type={type} onClick={onClick} className={`inline-flex items-center px-4 py-2 border rounded text-sm font-medium ${variant === 'primary' ? primaryStyles : secondaryStyles} ${className}`}>{children}</button>;
};
const Modal = ({ isOpen, onClose, title, children }) => !isOpen ? null : (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
            <div className="p-4 border-b flex justify-between items-center"><h3 className="text-lg font-bold">{title}</h3><button onClick={onClose} className="text-2xl">&times;</button></div>
            <div className="p-6">{children}</div>
        </div>
    </div>
);
const Input = ({ id, label, value, onChange, required }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        <input id={id} name={id} value={value} onChange={onChange} required={required} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm" />
    </div>
);
const StatusBadge = ({ status }) => {
    const styles = status === 'Active' 
        ? 'bg-green-100 text-green-800' 
        : 'bg-gray-100 text-gray-800';
    return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${styles}`}>{status === 'Active' ? 'Aktif' : 'Tidak Aktif'}</span>;
};

const dummyCurriculums = [
    { id: 1, name: 'Kurikulum Pelatih Profesional', code: 'K-PRO-2024', program: 'S1 Kepelatihan', status: 'Active', file: 'kurikulum-pro-2024.pdf' },
    { id: 2, name: 'Kurikulum Sport Science', code: 'K-SS-2023', program: 'S2 Olahraga', status: 'Active', file: null },
    { id: 3, name: 'Kurikulum Manajemen Klub', code: 'K-MK-2022', program: 'S1 Manajemen', status: 'Inactive', file: 'kurikulum-mk-2022.pdf' },
];

// --- KOMPONEN UTAMA ---

const CurriculumManagement = () => {
  const [curriculums, setCurriculums] = useState(dummyCurriculums);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({ name: '', code: '', program: '', status: 'Active' });

  const handleInputChange = (e) => {
    const { id, name, value } = e.target;
    const field = id || name;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const openAddModal = () => {
    setEditingItem(null);
    setFormData({ name: '', code: '', program: '', status: 'Active' });
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setFormData(item);
    setModalOpen(true);
  };
  
  const handleSave = (e) => {
      e.preventDefault();
      if (editingItem) {
          setCurriculums(curriculums.map(item => item.id === editingItem.id ? formData : item));
      } else {
          setCurriculums([{ ...formData, id: Date.now() }, ...curriculums]);
      }
      setModalOpen(false);
  };
  
  const handleDelete = (id) => {
      if (window.confirm('Apakah Anda yakin ingin menghapus kurikulum ini?')) {
        setCurriculums(curriculums.filter(item => item.id !== id));
      }
  };

  return (
    <Card>
      <div className="p-5 border-b flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Manajemen Kurikulum</h2>
          <p className="text-sm text-gray-500">Kelola semua kurikulum yang tersedia.</p>
        </div>
        <Button onClick={openAddModal} variant="primary" className="bg-red-600 text-white hover:bg-red-700">
            <PlusCircle size={16} className="mr-2" /> Tambah Kurikulum
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Nama Kurikulum</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Kode</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">File</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Status</th>
              <th className="relative px-6 py-3"><span className="sr-only">Aksi</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {curriculums.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 font-medium">{item.name}</td>
                <td className="px-6 py-4">{item.code}</td>
                <td className="px-6 py-4">
                    {item.file ? 
                        <span className="inline-flex items-center text-blue-600"><Paperclip size={14} className="mr-1"/>{item.file}</span> : 
                        <span className="text-gray-400">-</span>
                    }
                </td>
                <td className="px-6 py-4"><StatusBadge status={item.status} /></td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <button onClick={() => openEditModal(item)} className="text-blue-600 hover:text-blue-900 p-2"><Edit size={16}/></button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-900 p-2"><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title={editingItem ? 'Edit Kurikulum' : 'Tambah Kurikulum Baru'}>
        <form onSubmit={handleSave} className="space-y-4">
          <Input id="name" label="Nama Kurikulum" value={formData.name} onChange={handleInputChange} required />
          <Input id="code" label="Kode Kurikulum" value={formData.code} onChange={handleInputChange} required />
          <Input id="program" label="Jenjang/Program" value={formData.program} onChange={handleInputChange} required />
           <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
            >
              <option value="Active">Aktif</option>
              <option value="Inactive">Tidak Aktif</option>
            </select>
          </div>
           <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload Dokumen Kurikulum (PDF)</label>
            <input type="file" id="file" accept=".pdf" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"/>
          </div>
          <div className="flex justify-end pt-4 space-x-2">
            <Button type="button" variant="secondary" onClick={() => setModalOpen(false)}>Batal</Button>
            <Button type="submit" variant="primary" className="bg-red-600 text-white">Simpan</Button>
          </div>
        </form>
      </Modal>
    </Card>
  );
};

export default CurriculumManagement;
