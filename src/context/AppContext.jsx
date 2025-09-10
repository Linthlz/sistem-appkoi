import React, { useState, createContext } from 'react';
import { dummyUsers } from '../data/dummyData';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState('light');
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Default true untuk development
  const [currentUser, setCurrentUser] = useState(dummyUsers[0]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const login = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const value = {
    isSidebarOpen, setSidebarOpen,
    theme, toggleTheme,
    isAuthenticated, login, logout, currentUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};