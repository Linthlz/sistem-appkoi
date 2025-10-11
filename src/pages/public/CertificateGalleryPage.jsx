import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { Award, Search, User, Eye, Download } from 'lucide-react';

// Data sampel sertifikat
const dummyCertificates = [
  { id: 'APKOI-001', name: 'Dr. Haris Nugroho, S.Pd.,M.Or', program: 'Sertifikasi Asesor', date: '2025-06-15', image: '/pdf/sertif.png', pdfFile: '/pdf/Haris.pdf' },
  { id: 'APKOI-002', name: 'Dr. Wisnu Nugroho, M.Pd', program: 'Workshop Sport Science', date: '2025-07-20', image: '/pdf/sertif.png', pdfFile: '/pdf/Agus.pdf' },
  { id: 'APKOI-003', name: 'Dr. Suratmin, S.Pd., M.Or', program: 'Pelatihan Manajemen Klub', date: '2025-08-01', image: '/pdf/sertif.png', pdfFile: '/pdf/suratmin.pdf' },
  { id: 'APKOI-004', name: 'Adiska Rani Ditya Candra, S.Pd.,M.Pd', program: 'Sertifikasi Asesor', date: '2025-06-15', image: '/pdf/sertif.png', pdfFile: '/pdf/sertifikat-contoh-4.pdf' },
];

const CertificateGalleryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCertificates = dummyCertificates.filter(cert =>
    cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.program.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="py-16 bg-gray-50 dark:bg-gray-800 min-h-screen overflow-x-hidden"
      style={{
        backgroundImage: "url('/background2.jpg')",
        backgroundSize: "cover",          // Gambar menyesuaikan layar
        backgroundRepeat: "no-repeat",    // Tidak berulang
        backgroundPosition: "center",     // Pusat
        backgroundAttachment: "fixed",    // Efek parallax halus
      }}
    >
      <div className="max-w-screen-xl px-4 mx-auto">
        {/* Judul Halaman */}
        <div className="text-center mb-12">
          <Award className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Galeri Sertifikat Anggota APKOI
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Verifikasi pencapaian para profesional kepelatihan olahraga Indonesia.
          </p>
        </div>

        {/* Kolom Pencarian */}
        <div className="max-w-lg mx-auto mb-12 relative">
          <Input
            id="search"
            placeholder="Cari nama anggota atau program..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        {/* Daftar Sertifikat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.length > 0 ? (
            filteredCertificates.map((cert) => (
              <Card
                key={cert.id}
                className="overflow-hidden group flex flex-col bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
              >
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={`Sertifikat ${cert.name}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Tombol Lihat PDF */}
                    <a
                      href={cert.pdfFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Lihat PDF"
                    >
                      <div className="p-2 bg-white/80 dark:bg-gray-800/80 rounded-full text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-colors">
                        <Eye size={20} />
                      </div>
                    </a>
                    {/* Tombol Unduh PDF */}
                    <a href={cert.pdfFile} download title="Unduh PDF">
                      <div className="p-2 bg-white/80 dark:bg-gray-800/80 rounded-full text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-colors">
                        <Download size={20} />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Info Sertifikat */}
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-sm text-primary font-semibold">
                    {cert.program}
                  </p>
                  <h3 className="text-lg font-bold mt-1 dark:text-white flex items-center">
                    <User size={16} className="mr-2 text-gray-500" />
                    {cert.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Diterbitkan: {cert.date} | ID: {cert.id}
                  </p>
                </div>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
              Sertifikat tidak ditemukan.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateGalleryPage;
