// src/contexts/DashboardContext.jsx
import React, { createContext, useState, useContext } from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [activePage, setActivePage] = useState('dashboard');
  const [tabs, setTabs] = useState([{ id: 'dashboard', title: 'Dashboard', icon: 'fas fa-tachometer-alt' }]);
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  const addTab = (pageId, title, icon) => {
    if (!tabs.find(tab => tab.id === pageId)) {
      setTabs(prev => [...prev, { id: pageId, title, icon }]);
    }
    setActivePage(pageId);
  };
  
  return (
    <DashboardContext.Provider value={{
      theme,
      toggleTheme,
      activePage,
      setActivePage,
      tabs,
      addTab,
    }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);