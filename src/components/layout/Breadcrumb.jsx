import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronsRight } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <li>
          <Link to="/dashboard" className="hover:text-blue-600"><Home size={16} /></Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const name = value.charAt(0).toUpperCase() + value.slice(1).replace('-', ' ');
          return (
            <li key={to} className="flex items-center">
              <ChevronsRight size={16} className="mx-2" />
              {isLast ? (
                <span className="font-semibold text-gray-700 dark:text-gray-200">{name}</span>
              ) : (
                <Link to={to} className="hover:text-blue-600">{name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;