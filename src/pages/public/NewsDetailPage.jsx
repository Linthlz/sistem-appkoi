import React from "react";
import { useParams, Link } from "react-router-dom";
import { dummyNews } from "@/data/dummyData";
import { ArrowLeft } from "lucide-react";

const NewsDetailPage = () => {
  const { id } = useParams();
  const newsItem = dummyNews.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-700 dark:text-gray-200">
        <p>Berita tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-16"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",          // gambar menutupi seluruh layar
        backgroundPosition: "center",     // posisi tengah
        backgroundRepeat: "no-repeat",    // tidak diulang
        backgroundAttachment: "fixed",    // tetap saat scroll (efek parallax ringan)
      }}
    >
      {/* Overlay agar teks tetap terbaca */}
      <div className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm py-10 px-4 rounded-lg max-w-3xl mx-auto shadow-lg">
        <Link
          to="/news"
          className="inline-flex items-center mb-8 text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Berita
        </Link>
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="rounded-lg shadow-md mb-8 w-full h-80 object-cover"
        />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {newsItem.title}
        </h1>
        <p className="text-gray-500 mb-6">{newsItem.date}</p>
        <div className="prose dark:prose-invert max-w-none">
          {newsItem.content.split("\n").map((para, idx) => (
            <p key={idx} className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
