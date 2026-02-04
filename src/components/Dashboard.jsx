// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import MainContent from './layout/MainContent';
import Footer from './layout/Footer';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  useEffect(() => {
    // Inisialisasi JavaScript dari simulation10.html
    initializeDashboard();
  }, []);

  const initializeDashboard = () => {
    // Fungsi inisialisasi akan kita pindahkan dari JavaScript asli
    console.log('Dashboard initialized');
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="main-content">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;