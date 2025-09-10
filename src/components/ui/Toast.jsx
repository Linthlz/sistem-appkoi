import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };

  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-5 right-5 p-4 rounded-lg text-white shadow-lg ${colors[type]}`}>
      {message}
    </div>
  );
};

export default Toast;