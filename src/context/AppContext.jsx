import React, { useState, createContext } from 'react';
import { dummyUsers } from '../data/dummyData';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState('light');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // ✅ SINGLE SOURCE OF TRUTH
  const [allUsers, setAllUsers] = useState(dummyUsers);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const login = (email, password) => {
    const user = allUsers.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
      return { success: true, role: user.role };
    }
    return { success: false, message: 'Email atau password salah!' };
  };

  const registerUser = (newUser) => {
    setAllUsers(prev => [...prev, newUser]);
  };

  const updateUser = (updatedUser) => {
    setAllUsers(prev =>
      prev.map(user =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  };

  const deleteUser = (id) => {
    setAllUsers(prev => prev.filter(user => user.id !== id));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const value = {
    isSidebarOpen, setSidebarOpen,
    theme, toggleTheme,
    isAuthenticated, login, logout, currentUser,
    allUsers, registerUser, updateUser, deleteUser
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
