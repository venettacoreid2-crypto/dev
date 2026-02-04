// src/hooks/useDashboard.js
import { useState, useEffect } from 'react';

export const useDashboard = () => {
  const [activeTabs, setActiveTabs] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [user, setUser] = useState(null);
  
  // Initialize dashboard
  useEffect(() => {
    loadUserData();
    loadNotifications();
  }, []);
  
  const loadUserData = () => {
    const userData = {
      id: 1,
      username: 'admin',
      name: 'Admin User',
      email: 'admin@vencorio.com',
      employee_id: '26190101',
      company: 'Vencorio Inc.',
      role: 'Administrator'
    };
    setUser(userData);
  };
  
  const loadNotifications = () => {
    // Load notifications
    const notifications = [
      { id: 1, title: 'New Task', message: 'You have a new task assigned', read: false },
      // ... more notifications
    ];
    setNotifications(notifications);
  };
  
  const addTab = (tabId, title, icon) => {
    // Add new tab logic
    const newTab = { id: tabId, title, icon };
    setActiveTabs(prev => [...prev, newTab]);
  };
  
  return {
    user,
    notifications,
    activeTabs,
    addTab,
    // ... other functions
  };
};