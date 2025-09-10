import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  
  const variants = {
    // Tombol utama: Latar belakang merah solid
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    
    // Tombol sekunder: Garis tepi merah dengan teks merah
    secondary: 'bg-transparent border border-primary text-primary hover:bg-primary-light focus:ring-primary dark:text-red-400 dark:border-red-400 dark:hover:bg-gray-700',
    
    // Tombol bahaya: Tetap merah solid untuk aksi berbahaya
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',

    // Tombol "ghost": Teks merah transparan
    ghost: 'bg-transparent text-primary hover:bg-primary-light focus:ring-primary dark:text-red-400 dark:hover:bg-gray-700',
  };

  const sizes = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2 text-sm', lg: 'px-6 py-3 text-base' };

  return <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>{children}</button>;
};

export default Button;

