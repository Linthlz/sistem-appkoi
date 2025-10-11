import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@/components/ui/Card';
import { dummyNews } from '@/data/dummyData';
import { Newspaper } from 'lucide-react';

const NewsPage = () => {
  return (
    <div
      className="py-16 bg-gray-50 dark:bg-gray-800 min-h-screen overflow-x-hidden"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",          // Gambar menutupi seluruh area layar
        backgroundRepeat: "no-repeat",    // Tidak diulang
        backgroundPosition: "center",     // Posisi di tengah
        backgroundAttachment: "fixed",    // Parallax halus saat scroll
      }}
    >
      <div className="max-w-screen-xl px-4 mx-auto">
        {/* Header Berita */}
        <div className="text-center mb-12">
          <Newspaper className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Berita & Acara APKOI
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Ikuti perkembangan dan pengumuman terbaru dari kami.
          </p>
        </div>

        {/* Daftar Berita */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dummyNews.map((item) => (
            <Card
              key={item.id}
              className="flex flex-col overflow-hidden group transition-transform transform hover:-translate-y-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover rounded-t-lg" 
                onError={(e) => (e.target.src = "https://placehold.co/600x400/E2E8F0/4A5568?text=No+Image")}
              />

              <div className="p-5 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-bold mb-3 dark:text-white flex-grow group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {item.excerpt}
                </p>
                <Link
                  to={`/news/${item.id}`}
                  className="font-semibold text-primary hover:underline self-start mt-auto"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
