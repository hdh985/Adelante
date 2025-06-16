import React from 'react';

const FileList = ({ title, icon, items }) => {
  return (
    <div className="file-list">
      <div className="file-list-header">
        <span>{icon}</span>
        <div className="file-list-title">{title}</div>
      </div>
      {items.map((item, index) => (
        <div key={index} className="file-item" onClick={item.onClick}>
          <div className="file-item-icon">{item.icon}</div>
          <div className="file-item-content">
            <div className="file-item-name">{item.name}</div>
            <div className="file-item-desc">{item.desc}</div>
          </div>
          {item.badge && <div className="file-item-badge">{item.badge}</div>}
        </div>
      ))}
    </div>
  );
};

export default FileList;