// src/components/layout/Sidebar/Sidebar.jsx
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onToggle }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  
  const menuItems = [
    { id: 'dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard' },
    { id: 'intercomm', icon: 'fas fa-comments', label: 'InterComm' },
    { id: 'workflow', icon: 'fas fa-project-diagram', label: 'Workflow' },
    // ... tambahkan semua menu
  ];

  const submenus = {
    mydesk: [
      { id: 'mydesk-onprogress', label: 'On progress' },
      { id: 'mydesk-tasklist', label: 'Task List' },
      { id: 'mydesk-reporting', label: 'Reporting' }
    ],
    // ... tambahkan semua submenu
  };

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onToggle} />
      <nav id="sidebar" className={isOpen ? 'active' : ''}>
        <div className="sidebar-header">
          <h3><i className="fas fa-shield-alt"></i> Vencorio HQ</h3>
          <button className="close-sidebar" onClick={onToggle}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        {/* User Profile */}
        <div className="user-profile">
          <img src="https://ui-avatars.com/api/?name=Admin+User&background=3498db&color=fff&size=128" alt="Profile" />
          <h5>Admin User</h5>
          <p>Administrator</p>
          <p>Vencorio Inc.</p>
          <button className="btn btn-outline-light profile-btn">
            <i className="fas fa-user-circle"></i> My Profile
          </button>
        </div>
        
        {/* Menu Items */}
        <div className="sidebar-menu">
          <ul>
            {menuItems.map(item => (
              <li key={item.id}>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  // Handle menu click
                }}>
                  <i className={item.icon}></i> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Footer */}
        <div className="sidebar-footer">
          <button className="btn btn-sm btn-outline-light w-100">
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;