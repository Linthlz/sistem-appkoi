import React, { useState } from 'react';
import { PlusCircle, Edit, Trash2, Download } from 'lucide-react';

// --- Komponen UI tiruan (agar kode bisa berjalan mandiri) ---
const Card = ({ children, className }) => <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md ${className}`}>{children}</div>;
const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
    const styles = variant === 'primary' 
        ? 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500' 
        : 'text-gray-700 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300';
    return <button type={type} onClick={onClick} className={`inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium ${styles}`}>{children}</button>;
};
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg">
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <button onClick={onClose}>&times;</button>
                </div>
                <div className="p-6">{children}</div>
            </div>
        </div>
    );
};
const Input = ({ id, label, value, onChange, required, type = 'text' }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
        <input type={type} id={id} name={id} value={value} onChange={onChange} required={required} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600" />
    </div>
);

// --- Data Dummy ---
const dummyCertificates = [
    { id: 1, recipientName: 'Agus Setiawan', programName: 'Pelatihan Pelatih Dasar', issueDate: '2024-06-20', certificateNumber: 'CERT-001', file: 'sertifikat-agus.pdf' },
    { id: 2, recipientName: 'Siti Aminah', programName: 'Workshop Sport Science', issueDate: '2024-06-15', certificateNumber: 'CERT-002', file: null },
    { id: 3, recipientName: 'Rian Hidayat', programName: 'Pelatihan Pelatih Dasar', issueDate: '2024-06-20', certificateNumber: 'CERT-003', file: 'sertifikat-rian.pdf' },
];


const CertificateManagement = () => {
  const [certificates, setCertificates] = useState(dummyCertificates);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingCert, setEditingCert] = useState(null);
  const [formData, setFormData] = useState({ recipientName: '', programName: '', certificateNumber: '' });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const openAddModal = () => {
    setEditingCert(null);
    setFormData({ id: Date.now(), issueDate: new Date().toISOString().split('T')[0], recipientName: '', programName: '', certificateNumber: `CERT-${Date.now()}` });
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingCert(item);
    setFormData(item);
    setModalOpen(true);
  };
  
  const handleSave = (e) => {
      e.preventDefault();
      if (editingCert) {
          setCertificates(certificates.map(item => item.id === editingCert.id ? formData : item));
      } else {
          setCertificates([formData, ...certificates]);
      }
      setModalOpen(false);
  };
  
  const handleDelete = (id) => {
      if (window.confirm('Apakah Anda yakin ingin menghapus sertifikat ini?')) {
        setCertificates(certificates.filter(item => item.id !== id));
      }
  };

  return (
    <Card>
      <div className="p-5 border-b dark:border-gray-700 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Manajemen Sertifikat</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Kelola semua sertifikat yang diterbitkan.</p>
        </div>
        <Button onClick={openAddModal}><PlusCircle size={16} className="mr-2" /> Tambah Sertifikat</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Nama Penerima</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Program/Kegiatan</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Tanggal Terbit</th>
              <th className="relative px-6 py-3"><span className="sr-only">Aksi</span></th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {certificates.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap font-medium">{item.recipientName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.programName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.issueDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-600 hover:text-gray-900 p-2"><Download size={16}/></button>
                  <button onClick={() => openEditModal(item)} className="text-blue-600 hover:text-blue-900 p-2"><Edit size={16}/></button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-900 p-2"><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title={editingCert ? 'Edit Sertifikat' : 'Tambah Sertifikat Baru'}>
        <form onSubmit={handleSave} className="space-y-4">
          <Input id="recipientName" label="Nama Penerima" value={formData.recipientName} onChange={handleInputChange} required />
          <Input id="programName" label="Nama Program/Kegiatan" value={formData.programName} onChange={handleInputChange} required />
          <Input id="certificateNumber" label="Nomor Sertifikat" value={formData.certificateNumber} onChange={handleInputChange} required />
          <div>
            <label htmlFor="issueDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tanggal Terbit</label>
            <input type="date" id="issueDate" value={formData.issueDate} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600" required/>
          </div>
           <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Upload File (PDF/JPG)</label>
            <input type="file" id="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"/>
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

export default CertificateManagement;

