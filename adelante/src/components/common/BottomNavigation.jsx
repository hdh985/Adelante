import React from 'react';
import { NAV_ITEMS } from '../../data/navigationData';

const BottomNavigation = ({ activeTab, onTabChange }) => {
  return (
    <div className="bottom-nav-container">
      <nav className="bottom-nav">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => onTabChange(item.id)}
          >
            <div className="nav-icon">{item.icon}</div>
            <div className="nav-label">{item.label}</div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default BottomNavigation;