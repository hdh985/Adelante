import React from 'react';

const FolderGrid = ({ folders }) => {
  return (
    <div className="folder-grid">
      {folders.map((folder, index) => (
        <div key={index} className="folder-card" onClick={folder.onClick}>
          {folder.badge && <div className="folder-badge">{folder.badge}</div>}
          <div className="folder-icon">{folder.icon}</div>
          <div className="folder-name">{folder.name}</div>
          <div className="folder-info">{folder.info}</div>
        </div>
      ))}
    </div>
  );
};

export default FolderGrid;