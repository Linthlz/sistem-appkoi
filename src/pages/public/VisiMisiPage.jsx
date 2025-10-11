import React from 'react';
import { CheckCircle, Rocket, Users, BookOpen } from 'lucide-react';
import Card from '@/components/ui/Card';

const VisiMisiPage = () => {
  const missions = [
    {
      icon: Users,
      text: "Mengembangkan jaringan dan kolaborasi antar pendidik dan pelatih olahraga di seluruh Indonesia."
    },
    {
      icon: BookOpen,
      text: "Menyelenggarakan program sertifikasi, seminar, dan workshop untuk meningkatkan standar kompetensi profesional."
    },
    {
      icon: Rocket,
      text: "Mendorong inovasi dan penerapan sport science dalam metode kepelatihan untuk meningkatkan prestasi olahraga nasional."
    },
    {
      icon: CheckCircle,
      text: "Menetapkan standar dan etika profesi kepelatihan olahraga yang diakui secara nasional."
    }
  ];

  return (
    <div
      className="py-16 bg-gray-50 dark:bg-gray-800 min-h-screen overflow-x-hidden"
      style={{
        backgroundImage: "url('/background1.jpg')",
        backgroundSize: "cover",          // Gambar akan menutupi seluruh area
        backgroundRepeat: "no-repeat",    // Tidak diulang
        backgroundPosition: "center",     // Pusatkan gambar
        backgroundAttachment: "fixed",    // Agar efek parallax saat scroll
      }}
    >
      <div className="max-w-screen-xl px-4 mx-auto">
        
        {/* Bagian Visi */}
        <div className="text-center mb-16">
          <img 
            src="/logo.png" 
            alt="Logo Organisasi APKOI"
            className="mx-auto h-24 w-auto mb-6"
          />
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Visi APKOI
          </h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            "Asosiasi yang Mengembangkan Kompetensi Sumber Daya Manusia Dalam Bidang Pendidikan Kepelatihan Olahraga Indonesia"
          </p>
        </div>
        
        {/* Bagian Misi */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
            Misi Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missions.map((misi, index) => (
              <Card key={index} className="p-8 transform transition-transform hover:-translate-y-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
                <div className="mx-auto flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-light text-primary">
                  <misi.icon size={32} />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {misi.text}
                </p>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisiMisiPage;
