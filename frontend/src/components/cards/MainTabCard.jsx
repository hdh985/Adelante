import React from 'react';

const MainTabCard = ({ icon, title, desc, onClick }) => {
  return (
    <div className="main-tab-card" onClick={onClick}>
      <div className="main-tab-icon">{icon}</div>
      <div className="main-tab-title">{title}</div>
      <div className="main-tab-desc">{desc}</div>
    </div>
  );
};

export default MainTabCard;