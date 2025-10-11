import React, { useState } from 'react';
import { Shield, Award, Users, Briefcase, GraduationCap, Users2, Mic, Handshake, DollarSign, TrendingUp, Settings2, ChevronDown } from 'lucide-react';

// Card component placeholder, as the original is imported.
// In a real environment, you would remove this and rely on your import.
const Card = ({ children, className = "" }) => (
  <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);


// --- DATA LENGKAP DARI SK PENGURUS APKOI 2025-2029 ---
const dewanKehormatan = [ "Prof. Dr. Siswantoyo, M.Kes (UNY)", "Prof. Dr. Tomoliyus, M.S (UNY)", "Prof. Dr. M. Furqon Hidayatullah, M.Pd (UNS)", "Prof. Dr. Eddy Marheni, M.Pd (UNP)", "Prof. Dr. Ria Lumintuarso, M.Pd (UNY)", "Prof. Dr. Sapta Kunta Purnama, M.Pd (UNS)", "Prof. Dr. Syahrudin, M.Pd (UNM)", "Prof. Dr. Rd. Boyke Mulyana, M.Pd (UPI)", "Prof. Dr. Imran Akhmad, M.Pd (UNIMED)", "Prof. Dr. Komarudin, M.Pd (UPI)", "Prof. Dr. I Made Sry Undy Mahardika, M.Pd (Unesa)", "Prof. Dr. A Paturusi, M.Kes.,AIFO (UNIMA)" ];
const dewanPakar = [ "Prof. Dr. Endang Rini Sukamti, M.S (UNY)", "Prof. Dr. Nasuka, M.Kes (UNNES)", "Prof. Dr. Imam Marsudi, M.Si (Unesa)", "Prof. Dr. Umar , MS., AIFO (UNP)", "Prof. Dr. Dikdik Z. Sidik, M.Pd (UPI)", "Prof. Dr. Johansyah Lubis, M. Pd (UNJ)", "Prof. Dr. Awan Hariono, M.Or (UNY)", "Prof. Dr. Abdul Alim, M.Or (UNY)", "Prof. Dr. Nurkholis, M.Kes (Unesa)", "Prof. Dr. Mulyana, M.Pd (UPI)", "Prof. Dr. Ch. Fajar Sriwahyuniati, S.Pd., M.Or (UNY)", "Prof. Dr. Or. Gigih Siantoro, M.Pd (Unesa)", "Prof. Dr. Nurkadri, M.Pd (UNIMED)", "Prof. Dr. Ilham (UNJA)", "Prof. Dr. Made Agus Dharmadi, M.Pd (Undiksha)", "Prof. Dr. H. Nukhrawi Nawir, M.Kes.,AIFO (UNM)", "Dr. Irmantara Subagio, M.Kes (Unesa)", "Dr. Fauzi, M.Si (UNY)", "Dr. Frederik Alfred Makadada, M.Kes (UNIMA)", "Dr. Tirto Apriyanto, M.Si (UNJ)", "Dr. Imam Hariadi, M.Pd (UM)", "Dr. Sri Haryono, S.Pd.,M.Or (UNNES)", "Dr. Hartono Hadjarati, S.Pd. M.Pd (UNG)", "Dr. Hikmad Hakim, M.Kes., AIFO (UNM)", "Drs. Supriatna, M.Pd (UM)" ];

const pengurusInti = [
  { jabatan: 'Ketua Umum', nama: 'Dr. Suratmin, S.Pd., M.Or', asal: 'Undiksha', image: '/Suratmin.jpg' },
  { jabatan: 'Wakil Ketua', nama: 'Dr. Haris Nugroho, S.Pd.,M.Or', asal: 'UNS', image: '/haris.jpg' },
  { jabatan: 'Sekretaris', nama: 'Dr. Wisnu Nugroho, M.Pd', asal: 'UNY', image: '/wisnu.jpg' },
  { jabatan: 'Wakil Sekretaris', nama: 'Dr. Syarif Hidayat, M.Pd', asal: 'Undiksha', image: '/syarif.jpg' },
  { jabatan: 'Bendahara', nama: 'Dr. Hendrig Joko Prasetyo, S.Pd.,M.Or', asal: 'UNS', image: '/hendrig.jpeg' },
  { jabatan: 'Wakil Bendahara', nama: 'Adiska Rani Ditya Candra, S.Pd.,M.Pd', asal: 'UNNES', image: '/adiska.jpg' },
];
const semuaBidang = [
    { nama: 'Organisasi dan Kelembagaan', koordinator: 'Dr. Fadillah Umar. M.Or (UNS)', icon: Users, anggota: ["Dr. Abdul Gani, M.Pd (UNJ)", "Dr. Mansuralhudlori, M.Or (UNS)", "Dr. Donie, S.Pd, M.Pd (UNP)", "Dr. Reza Hadinata, S.Si.,M.Pd (UNJA)", "Dr. Nawan Primasoni, M.Or (UNY)", "Dr. Jamaluddin, M.Pd (UNM)", "Dr. Iwan Hermawan, M.Pd (UNJ)", "Dr. Fedrik Dj Samarauw, M.Kes (UNIMA)", "Wisnu Mahardika, S.Pd.,M.Or (UTP)", "Salsabilah, S.Pd.,M.Pd (UNRI)", "Juli Chandra, M.Pd (UBHARA)", "Prisca Widiawat, M.Pd (UM)", "Afif Bayu Eko Prasetyo, S.Pd., M.Or (UMUKA)"] },
    { nama: 'Lembaga Sertifikasi Profesi (LSP)', koordinator: 'Dr. Alen Rismayadi, S.Pd.,M. Pd (UPI)', icon: Briefcase, anggota: ["Dr. Roma Irawan, S,Pd, M.Pd (UNP)", "Dr. Wijono, M.Pd (Unesa)", "Dr. Wasti Danardani, S.Pd.,MA (Undiksha)", "Dr. Agus Supriyoko, M.Pd (UTP)", "Dr. Juriana, S.Psi.,M.Psi (UNJ)", "Dr. Danang Wicaksono, M.Or (UNY)", "Dr. Dewangga Yudhistira, M.Pd (Unesa)", "Dr. Okky Indera Pamungkas, M.Or (UNY)", "Dr. Ahmad Rum Bismar, M.Pd (UNM)", "Dr. Padli, S.Si.,M.Pd (UNP)", "Dr. Rina Ambar Dewanti, M.Pd (UNJ)", "Edy Dharma Putra Duhe, S.Pd. M.Pd (UNG)", "Geraldi Novian, M.Pd (UPI)", "Dra. Jeanne R. Malonda, M.Kes (UNIMA)", "Dery Rimasa, M.Pd (UPI)", "Oca Fernandes AF, S.Pd.,M.Pd (UNRI)"] },
    { nama: 'Kurikulum dan Akademik', koordinator: 'Dr. Ratna Budiarti, S.Pd.Kor.,M.Or (UNY)', icon: GraduationCap, anggota: ["Dr. Agus Setyanto. M.Or (UNS)", "Dr. Rivan Saghita Pratama, S.Pd.,M.Or (UNNES)", "Dr. I Kadek Suardika, M.Pd (UNG)", "Dr. Uzizatun Maslikah, S. Pd, M. Pd (UNJ)", "Dr. Touvan Juni Samodra, M.Pd (UNTAN)", "Dr. Heru Prasetyo, M.Pd (UNY)", "Dr. Bacilius Sukadana, M.Kes.,AIFO (UNIMA)", "Dr. Nurul Musfira A., M.Pd (UNM)", "David Iqroni, S.Pd., M.Pd (UNJA)", "Rodhi Rusdianto Hidayat, S.Pd.,M.Pd (UNCEN)", "Siti Maesaroh, S.Pd., M.Kes (UNRI)", "Nurrul Riyard Fadhli, S. Pd M. Or (UM)", "Okki Yonda, S.Or.,M.Pd (UNJ)", "Rudolof Yanto Basna, S.Pd.,M.Pd (UNCEN)", "Faridatul Ala, S.Pd.,M.Pd (UBHARA)", "Syarif Hidayat, M.Or (UNG)"] },
    { nama: 'Ikatan Pelatih Indonesia (IPI)', koordinator: 'Dr. Dede Rohmat Nurjaya, M.Pd (UPI)', icon: Users2, anggota: ["Dr. Ira Purnamasari MN, M.Pd (UPI)", "Dr. Or. Muhammad, M.Pd (Unesa)", "Dr. Daniel Womsiwor, S.Pd.,M.Fis (UNCEN)", "Dr. Wawan Junresti Daya, S.Si., M.Pd (UNJA)", "Dr. Tri Aji, S.Pd.,M.Pd (UNNES)", "Dr. Rachman Widohardhono, M.Psi (Unesa)", "Dr. I Wayan Muliarta, S.Pd.,M.Or (Undiksha)", "Dr. Alex Aldha Yudi, M.Pd (UNP)", "Dr. Sahabuddin, M.Pd (UNM)", "Ferry Y Wattimena, M. Pd (UNJ)", "Dewi Nur Hidayah, M.Or (UNCEN)", "Andi Akbar, S.Pd.,M.Pd (UNM)", "Romi Mardela, M.Pd (UNP)", "Drs. Serly Ompi, M.Kes (UNIMA)"] },
    { nama: 'Publikasi dan Karya Ilmiah', koordinator: 'Febriani Fajar Ekawati., S.Pd., M.Or., Ph.D (UNS)', icon: Mic, anggota: ["Dr. Apta Mylsidayu, S. Pd, Kor, M. Or (UNJ)", "Dr. Ahmad Muchlisin Natas Pasaribu, M.Pd (UBHARA)", "Dr. Wedi S, S.Si., M.Pd (UNRI)", "Dr. Suci Nanda Sari, S.Pd.,M.Pd (UNP)", "Dr. Ely Yuliawan, S.Pd., M.Pd (UNJA)", "Dadan Resmana, M. Or (UNJ)", "Anggit Wicaksono, S.Pd.,M.Pd (UNNES)", "Raisa Ganeswara, M. Or (UNJ)", "Isnan Rahmat Wiyata, S.Pd.,M.Pd (UMUKA)", "Muhammad Fitrah Mubarak, S.Or., M.Or (UNCEN)", "M. Torero Rigel Centeury (UNIMA)"] },
    { nama: 'Kerjasama', koordinator: 'Purwono Sidik Permono, S.Pd.,M.Pd (UNNES)', icon: Handshake, anggota: ["Dr. Luh Putu Tuti Ariani, S.Pd, M.Fis (Undiksha)", "Dr. Kunjung Ashadi, S.Pd.,M.Fis (Unesa)", "Dr. Ugi Nugraha, M.Pd (UNJA)", "Dr. Nurliati Syamsuddin, M.Pd (UNM)", "Dr. Mudayat, M.Pd (UT)", "Muhammad Qadavi, S.Pd., M.Pd (UNRI)", "Edi Purnomo, S.Pd.,M.Or (UNTAN)", "Mahmmudin, S.Pd.,M.Pd (UNIMED)", "Daryanto S.Pd., M.Or (UNS)", "Andri Irawan, M. Pd (UNJ)", "Yudi Karisma Sari, S.Si.,M.Or (UTP)", "Muhammad Teguh Prasetyo, S.Or.,M.Or (UNCEN)", "Suprianto Kadir, S.Pd.,M.Pd (UNG)", "Agung Robianto, S.Pd., M.Or (UNJ)"] },
    { nama: 'Pendanaan', koordinator: 'Dr. Bayu Nugroho (UNJ)', icon: DollarSign, anggota: ["Dr. Slamet Widodo. M.Or (UNS)", "Dr. Anggel Hardiyanto, M.Pd (UNJA)", "Yan Indra Siregar, S.Pd, M.Pd (UNIMED)", "Rahmad Diyanto, S.Pd., M.Pd (UNRI)", "Burhan Basyiruddin, M. Pd (UNJ)", "Dra. Doortje Tamunu, M.For (UNIMA)", "Kadek Happy Kardiawan, S.Pd.,M.Pd (Undiksha)"] },
    { nama: 'Pengembangan Profesi Lulusan', koordinator: 'Dr. Made Bang Redy Utama,S. Pd, M.Fis (UNJ)', icon: TrendingUp, anggota: ["Dr. Hendro Wardoyo, M. Pd (UNJ)", "Kurniati Rahayuni, Ph.D (UM)", "Ketut Chandra Adinata Kusuma, S.Pd.,M.Pd (Undiksha)", "Muhammad Bram Riyadi, S.Pd, M.Or (UNS)", "Drs. Nofrie Sondakh, M.For (UNIMA)", "Agus Sulastio, S.Pd.,M.Pd (UNRI)", "Bangkit Yudho Prabowo, M.Or (UNJA)", "Asep Prima, M.Pd (UNIMED)"] },
    { nama: 'Pembinaan dan Evaluasi Pelatih', koordinator: 'Dr. Hadi, M.Pd (UNNES)', icon: Settings2, anggota: ["Dr. Masrun, M.Kes (UNP)", "Dr. Syahriadi, S.Pd., M.Pd (UNRI)", "Dr. Agung Ngurah Putra Laksana, S.Pd.,M.Pd (Undiksha)", "Dr. Puguh Satya Hasmara M. Pd (UM)", "Dr. Muhammad Ishak, M.Pd (UNM)", "Arief Ibnu Haryanto, S.Pd.M.Pd (UNG)", "Andhica Harfie Herawan, M.Or (UNS)", "Muhammad Faisal Nasution, M.Pd (UNIMED)", "Yudhi Esa Saputra, M.Pd (UNTARA)", "Glady Sukma Perdana, M.Pd (UNIMA)"] },
    { nama: 'Hubungan Masyarakat (Humas)', koordinator: 'Kodrad Budiyono, S.Pd.,M.Pd (UTP)', icon: Mic, anggota: ["Dr. Muhammad Kharis Fajar, S.Pd. M.Pd (Unesa)", "Fajar Arie Mangun, M. Pd (UNJ)", "Iwan Budi Setiawan, S.Pd., M.Pd (UNJA)", "Henry Hermawan S.Pd., M.Or (UNS)", "Dr. Alimandan, S.Pd., M.Pd (UNRI)", "Muhammad Thoriq Hadad Akbar, S.Pd., M.Or (UMUKA)", "Siti Jubaedah, S.Or., M.Pd (UNTARA)", "Muslim, S.Pd.,M.Pd (UNM)", "Karisdha Pradityana, M.Pd (UT)"] },
];

// Komponen untuk kartu profil pengurus inti
const ProfileCard = ({ nama, jabatan, image, asal }) => (
    <div className="text-center group">
        <div className="relative inline-block">
            <img 
                src={image} 
                alt={`Foto ${nama}`}
                className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover mx-auto border-4 border-white dark:border-gray-800 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x200/EFEFEF/333333?text=Error'; }}
            />
            <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <div className="mt-4 space-y-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{nama}</h3>
            <p className="text-sm md:text-base font-medium text-red-600 dark:text-red-400">{jabatan}</p>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{asal}</p>
        </div>
    </div>
);

// Komponen untuk dropdown (accordion) setiap bidang
const AccordionItem = ({ bidang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { nama, koordinator, icon: Icon, anggota } = bidang;

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition-colors"
      >
        <div className="flex items-center">
            <Icon className="mr-3 text-red-600 dark:text-red-400" size={20} />
            <span className="font-semibold">{nama}</span>
        </div>
        <div className='flex items-center'>
            <span className='text-sm text-gray-500 dark:text-gray-400 mr-4 hidden sm:block'>{koordinator}</span>
            <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-3 sm:hidden'>Koordinator: {koordinator}</p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-gray-600 dark:text-gray-400">
                {anggota.map((nama, index) => (
                    <li key={index}>{nama}</li>
                ))}
            </ul>
        </div>
      )}
    </div>
  );
};

// --- KOMPONEN: Tabel untuk Dewan ---
const DewanTable = ({ title, icon: Icon, data }) => (
    <Card className="overflow-hidden">
        <div className="p-5 border-b dark:border-gray-700">
            <h3 className="text-xl font-bold text-red-600 dark:text-red-400 flex items-center">
                <Icon className="mr-3"/>{title}
            </h3>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 w-16">No.</th>
                        <th scope="col" className="px-6 py-3">Nama</th>
                        <th scope="col" className="px-6 py-3">Asal Institusi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        const match = item.match(/(.*) \((.*)\)/);
                        const name = match ? match[1] : item;
                        const university = match ? match[2] : '-';
                        return (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{index + 1}</td>
                                <td className="px-6 py-4">{name}</td>
                                <td className="px-6 py-4">{university}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </Card>
);

// --- KOMPONEN BARU: Dropdown untuk Section Dewan ---
const DewanDropdown = () => {
  const [isOpen, setIsOpen] = useState(true); // Dibuat terbuka secara default

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden max-w-4xl mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition-colors"
      >
        <div className="flex items-center">
            <Users className="mr-3 text-red-600 dark:text-red-400" size={20} />
            <span className="font-semibold">Dewan</span>
        </div>
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DewanTable title="Dewan Kehormatan" icon={Award} data={dewanKehormatan} />
            <DewanTable title="Dewan Pakar" icon={Shield} data={dewanPakar} />
          </div>
        </div>
      )}
    </div>
  );
};


const StrukturOrganisasiPage = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* --- KONTEN UTAMA DIBUNGKUS DALAM CONTAINER DENGAN PEMISAH ANTAR SECTION --- */}
      <div className="max-w-screen-xl px-4 mx-auto space-y-20">
        
        {/* Section Header Halaman */}
        <section className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Struktur Organisasi</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Pengurus Pusat APKOI Masa Bhakti 2025-2029</p>
        </section>

        {/* --- SECTION PENGURUS INTI --- */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Struktur Pengurus Inti</h2>
          <div className="flex flex-col items-center space-y-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
              <ProfileCard {...pengurusInti[0]} />
              <ProfileCard {...pengurusInti[1]} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12 w-full max-w-4xl mx-auto">
              <ProfileCard {...pengurusInti[2]} />
              <ProfileCard {...pengurusInti[3]} />
              <ProfileCard {...pengurusInti[4]} />
              <ProfileCard {...pengurusInti[5]} />
            </div>
          </div>
        </section>
        
        {/* --- SECTION DEWAN (SEKARANG MENGGUNAKAN DROPDOWN) --- */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Dewan</h2>
          <DewanDropdown />
        </section>

        {/* --- SECTION STRUKTUR BIDANG --- */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Struktur Bidang</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {semuaBidang.map((bidang) => (
              <AccordionItem key={bidang.nama} bidang={bidang} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default StrukturOrganisasiPage;


