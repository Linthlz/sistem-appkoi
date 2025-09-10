import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useAppContext } from '@/hooks/useAppContext';
import { Sun, Moon } from 'lucide-react';

const SettingsPage = () => {
  // Mengambil state dan fungsi yang relevan dari context global
  const { theme, toggleTheme } = useAppContext();

  return (
    <Card>
      <div className="p-5 border-b dark:border-gray-700">
        <h2 className="text-xl font-bold">Pengaturan</h2>
      </div>
      <div className="p-5 space-y-6">
        
        {/* Pengaturan Tampilan */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Tampilan</h3>
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <p className="font-medium">Tema Aplikasi</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Saat ini: {theme === 'light' ? 'Terang' : 'Gelap'}
              </p>
            </div>
            {/* Tombol ini memanggil fungsi toggleTheme saat diklik */}
            <Button onClick={toggleTheme} variant="secondary">
              {theme === 'light' ? <Moon size={16} className="mr-2" /> : <Sun size={16} className="mr-2" />}
              Ubah Tema
            </Button>
          </div>
        </div>
        
        {/* Pengaturan Notifikasi (UI Saja) */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Notifikasi</h3>
           <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-3">
             <label className="flex items-center justify-between cursor-pointer">
               <span>Notifikasi Email untuk Berita Baru</span>
               {/* Ini adalah toggle switch CSS-only */}
               <input type="checkbox" className="sr-only peer" defaultChecked/>
               <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-primary"></div>
             </label>
             <label className="flex items-center justify-between cursor-pointer">
               <span>Notifikasi Browser saat Login</span>
               <input type="checkbox" className="sr-only peer" />
               <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-primary"></div>
             </label>
           </div>
        </div>
        
      </div>
    </Card>
  );
};

export default SettingsPage;

