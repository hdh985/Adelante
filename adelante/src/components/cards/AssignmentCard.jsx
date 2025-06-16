import React from 'react';
import { getStatusClass } from '../../utils/helpers';

const AssignmentCard = ({ 
  icon, 
  title, 
  desc, 
  managerName, 
  managerContact, 
  status, 
  onClick 
}) => {
  return (
    <div className="assignment-card" onClick={onClick}>
      <div className="contact-icon">{icon}</div>
      <div className="contact-title">{title}</div>
      <div className="contact-desc">{desc}</div>
      <div className="manager-info">
        <div className="manager-name">{managerName}</div>
        {managerContact && <div className="manager-contact">{managerContact}</div>}
      </div>
      <div className={`status-indicator ${getStatusClass(status)}`}>{status}</div>
    </div>
  );
};

export default AssignmentCard;