import { Navigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext'; 

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, currentUser } = useAppContext();
  const location = useLocation();

  if (!isAuthenticated) {
    // Belum login, arahkan ke login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(currentUser?.role)) {
    // Role tidak cocok, arahkan ke unauthorized
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;