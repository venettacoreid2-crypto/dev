// src/App.jsx - Updated
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardProvider } from './contexts/DashboardContext';
import Dashboard from './components/Dashboard';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import SystemStatusPage from './pages/SystemStatusPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <DashboardProvider>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<DashboardPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="system-status" element={<SystemStatusPage />} />
            {/* Tambahkan route lainnya */}
          </Route>
        </Routes>
      </DashboardProvider>
    </Router>
  );
}

export default App;